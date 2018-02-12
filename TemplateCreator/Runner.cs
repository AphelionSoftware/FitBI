using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TemplateCreator;
using Dapper;
using Newtonsoft.Json;

namespace TemplateCreator
{
    public partial class Runner : Form
    {
        public Runner()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            StoreBySchema.testFile(".\\SQL2017", "FitBI");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            APIBySchema.testFile(".\\SQL2017", "FitBI");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Enum.testFile("Core", "Active");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            var container = JsonConvert.DeserializeObject<WeightMeasurementContainer>(txtJson.Text);

            var tvp_WeightMeasurement = container.WeightMeasurement.AsTableValuedParameter( "Stats.tvp_WeightMeasurement"
                        , (new string[] { "Active", "BodyFatPercentage", "BonePercentage", "CreatedAt", "Deleted", "ID", "MeasurementDate", "MusclePercentage", "PercentMeasurementTypeID", "PersonID", "UnitID", "UpdatedAt", "Version", "WaterPercentage", "Weight", "WeightMeasurementID" })
                        );
        }
    }
}
