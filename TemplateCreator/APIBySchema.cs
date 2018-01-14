using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Data.Sql;
using Microsoft.SqlServer.Management.Smo;


namespace TemplateCreator
{
    static class APIBySchema
    {
        public static void testFile(string pServer, string pDatabase)
        {
            var server = new Server(pServer);
            var database = new Database(server, pDatabase);
            database.Refresh();


            Schema[] sorted = (from Schema s in database.Schemas where s.Name == "Core" orderby s.Name select s).ToArray();
                //string fileName =  "coreSetup.js";
                var lt = new APITemplate(database, sorted, "Core");

            sorted = (from Schema s in database.Schemas where s.Name == "Exercise" || s.Name == "Program" || s.Name == "Stats" orderby s.Name select s).ToArray();
            //string fileName =  "coreSetup.js";
            lt = new APITemplate(database, sorted, "Core");
        }
    }

    public class APITemplate
    {
        public APITemplate(Database db, Schema[] sorted, string className)
        {
            string strFile = @"import store from 'vuex/store'
export default function (" + className.ToLower() + @"Values) {";
            foreach (Schema sSchema in sorted)
            {
                Table[] tTables = (from Table tTable in db.Tables where tTable.Schema == sSchema.Name select tTable).ToArray();
                foreach (Table tTable in tTables)
                {
                    if (!(tTable.Name == "Active" || tTable.Name == "Dates" || tTable.Name == "Time"))
                    {

                        strFile += @"
  store.commit('" + className + @"/SET_" + tTable.Name.ToUpper() + @"_LIST', " + className.ToLower() + @"Values." + tTable.Name + @")";
                    }
                }
            }
            strFile += @"
}
";
            this.FileName = strFile;

        }
        public string FileName { get; set; }

    }
}
