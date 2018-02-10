namespace TemplateCreator
{
    partial class Runner
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Runner));
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.txtJson = new System.Windows.Forms.TextBox();
            this.txtString = new System.Windows.Forms.TextBox();
            this.button4 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(66, 12);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(233, 73);
            this.button1.TabIndex = 0;
            this.button1.Text = "vuex-store";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(66, 115);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(233, 73);
            this.button2.TabIndex = 1;
            this.button2.Text = "API";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(970, 72);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(238, 223);
            this.button3.TabIndex = 2;
            this.button3.Text = "button3";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // txtJson
            // 
            this.txtJson.Location = new System.Drawing.Point(113, 369);
            this.txtJson.Multiline = true;
            this.txtJson.Name = "txtJson";
            this.txtJson.Size = new System.Drawing.Size(927, 543);
            this.txtJson.TabIndex = 3;
            this.txtJson.Text = resources.GetString("txtJson.Text");
            // 
            // txtString
            // 
            this.txtString.Location = new System.Drawing.Point(1061, 369);
            this.txtString.Name = "txtString";
            this.txtString.Size = new System.Drawing.Size(927, 31);
            this.txtString.TabIndex = 4;
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(1363, 556);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(204, 79);
            this.button4.TabIndex = 5;
            this.button4.Text = "button4";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // Runner
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(2614, 1582);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.txtString);
            this.Controls.Add(this.txtJson);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Name = "Runner";
            this.Text = "Runner";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.TextBox txtJson;
        private System.Windows.Forms.TextBox txtString;
        private System.Windows.Forms.Button button4;
    }
}