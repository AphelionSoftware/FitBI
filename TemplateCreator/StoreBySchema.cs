using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Data.Sql;
using Microsoft.SqlServer.Management.Smo;
using System.IO;

namespace TemplateCreator
{
    static class StoreBySchema
    {
        public static void testFile(string pServer, string pDatabase)
        {
            var server = new Server(pServer);
            var database = new Database(server, pDatabase);
            database.Refresh();


            Schema[] sorted = (from Schema s in database.Schemas where s.Name == "Core" || s.Name == "Exercise" || s.Name == "Program" || s.Name == "Stats" orderby s.Name select s).ToArray();
            foreach (Schema sSchema in sorted)
            {
                string fileName = sSchema.Name + ".js";
                var lt = new ValuesTemplate(database, sSchema, fileName);
                if (!Directory.Exists(""))
                {
                    
                }

            }
        }
    }

    public class ValuesTemplate
    {
        public ValuesTemplate(Database db, Schema sSchema, string className)
        {
            string strFile = @"import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {";
            Table[] tTables = (from Table tTable in db.Tables where tTable.Schema == sSchema.Name select tTable).ToArray();
            foreach (Table tTable in tTables)
            {
                strFile += @"
  " + tTable.Name + @": { },
  " + tTable.Name + @"List: [],
  " + tTable.Name + @"Item: {},";
                

            }
            strFile = strFile.Substring(0, strFile.Length - 1); //Remove trailing space

            strFile += @"
}

const getters = {
  getField";
            foreach (Table tTable in tTables)
            {
                strFile += @"
  Get_" + tTable.Name + @"_ByRouteID: function (state, getters, rootState) {
    return state." + tTable.Name + @"[+rootState.route.params." + tTable.Name.ToLower() + @"id]
  },
  Get_" + tTable.Name + @"_All: function () {
    return state." + tTable.Name + @"
  },
  Get_" + tTable.Name + @"_List: function () {
    return state." + tTable.Name + @"
  },
  Get_" + tTable.Name + @"_Item: function () {
    return state." + tTable.Name + @"Item
  },";

                foreach (Column col in tTable.Columns)
                {
                    var x = col.DataType;
                    if ( col.DataType == DataType.DateTime)
                    {
                        var y = DataType.DateTime;
                    }
                }
                Column[] cColDates = (from Column cCol in tTable.Columns where cCol.DataType.SqlDataType == SqlDataType.DateTime select cCol).ToArray();

                foreach (Column col in cColDates)
                {
                    strFile += @"
  Get_" + tTable.Name + @"_ByLatest_" + col.Name + @": function() {
    return Vue.$_.chain(state." + tTable.Name + @")
      .sortBy(function(item) { return item." + col.Name + @" }
      .first()
      .value()
  },
";
                }
            }
            strFile = strFile.Substring(strFile.Length - 2);
            strFile += @"
}

const mutations = {
  updateField";
            foreach (Table tTable in tTables)
            {
                strFile += @",
  SET_" + tTable.Name.ToUpper() + @"_LIST: function (state, fullList) {
    fullList.forEach(function (element) {
      state." + tTable.Name + @"[element." + tTable.Name + @"ID] = element
      state." + tTable.Name + @"List.push(element." + tTable.Name + @"ID)
    }, this)
  }";
            }

            strFile += @"
}

const exercise = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default exercise
";

            this.FileName = strFile;

        }
        public string FileName { get; set; }

    }
}
