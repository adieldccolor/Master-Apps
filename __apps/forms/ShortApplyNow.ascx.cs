using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Net.Mail;
using System.Net.Mime;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ShortApplyNow : System.Web.UI.UserControl
{
    #region Public Vars
    public bool returning = false;

    public string path = NewClientSites.UIF.GetTempPath();
    public string link = NewClientSites.UIF.GetLink("");

    public string Unsecure = NewClientSites.Global.getServerURL("UnsecureClientPost");
    public string Secure = NewClientSites.Global.getServerURL("SecureClientPost");

    public string SendEmailAdress = NewClientSites.Global.SendEmailAddress;
    public string SendEmailName = NewClientSites.Global.SendEmailName;
    #endregion

    #region Autoresponder
    //class for borrower and coborrower data
    protected class dataBorrowerCo
    {
        //Borrower
        public string BorrowerFirstName;
        public string BorrowerLastName;
        public string BorrowerAddress;
        public string BorrowerCity;
        public string BorrowerState;
        public string BorrowerZip;
        public string BorrowerHomePhone;
        public string BorrowerCellPhone;
        public string BorrowerEmail;
        public string BorrowerLoanAmount;
        public string BorrowerDOB;

        //Co Borrower
        public string CoBorrowerFirstName;
        public string CoBorrowerLastName;
        public string CoBorrowerAddress;
        public string CoBorrowerCity;
        public string CoBorrowerState;
        public string CoBorrowerZip;
        public string CoBorrowerHomePhone;
        public string CoBorrowerCellPhone;
        public string CoBorrowerEmail;
        public string CoBorrowerDOB;

        public dataBorrowerCo()
        {
            //Borrower
            BorrowerFirstName = "";
            BorrowerLastName = "";
            BorrowerAddress = "";
            BorrowerCity = "";
            BorrowerState = "";
            BorrowerZip = "";
            BorrowerHomePhone = "";
            BorrowerCellPhone = "";
            BorrowerEmail = "";
            BorrowerLoanAmount = "";
            BorrowerDOB = "";

            //Co Borrower
            CoBorrowerFirstName = "";
            CoBorrowerLastName = "";
            CoBorrowerAddress = "";
            CoBorrowerCity = "";
            CoBorrowerState = "";
            CoBorrowerZip = "";
            CoBorrowerHomePhone = "";
            CoBorrowerCellPhone = "";
            CoBorrowerEmail = "";
            CoBorrowerDOB = "";
        }
    }

    //class for create autoresponders
    protected class getAutoResponder
    {
        //basic variables
        private string C_ID;
        private string SITE_ID;
        private dataBorrowerCo dataBCo;
        private dataCompany companyTags;

        //Database access
        AdminClients.Controls.tbl cnn = new AdminClients.Controls.tbl();

        //private class for companydata
        private class dataCompany
        {
            public string CompanyURL;
            public string CompanyName;
            public string CompanyAddress;
            public string CompanyCity;
            public string CompanyState;
            public string CompanyZip;
            public string CompanyPhone;
            public string CompanyCellPhone;

            public dataCompany()
            {
                CompanyURL = "";
                CompanyName = "";
                CompanyAddress = "";
                CompanyCity = "";
                CompanyState = "";
                CompanyZip = "";
                CompanyPhone = "";
                CompanyCellPhone = "";
            }
        }

        //constructor to set initial values consultant id, site id, borrower and co borrower data
        public getAutoResponder(string cid, string site_id, dataBorrowerCo values)
        {
            //set initial values
            this.companyTags = new dataCompany();
            this.dataBCo = new dataBorrowerCo();
            this.dataBCo = values;
            this.C_ID = cid;
            this.SITE_ID = site_id;
        }

        /************************************************************************************************
        * with this class we get in an easier way all autoresponders based and tags are translated
        * type means the value from AdminClients/Controls/Edit_EMAIL_MSL.ascx.cs function Page_PreRender
        ************************************************************************************************/
        public string getHTML_DATA(string type)
        {
            /*******************************************************************************
            * create basic values which include a DataBase Access the body the AutoResponder
            * the Signature of the LO (if exist) SQL queries to use
            *******************************************************************************/
            string body = "";
            string signature = "";
            string SQL = "";

            /*******************************************************************************
            * In this section we get the Value Subject or Body for the 
            * email, at the beginning we set site_id, and the content_value to search (type)
            *******************************************************************************/
            using (SqlDataReader reader = cnn.ExecuteReader("SELECT CONTENT_VALUE FROM tblClientPagesContent WHERE SITE_ID=@SITE_ID AND CONTENT_TYPE_NAME=@CONTENT_TYPE_NAME",
                    new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@SITE_ID", this.SITE_ID) ,
                        new System.Data.SqlClient.SqlParameter("@CONTENT_TYPE_NAME", type)}))
            {
                /******************************************************************
                * After the result, we check the values from the database
                * if it has it'll add the rest of data and start to replace tags
                ******************************************************************/
                if (reader.Read())
                {
                    //we set the result of the previous query
                    body = reader["CONTENT_VALUE"].ToString();

                    //We need to get the values from the Company in order to replace them
                    setCompany_Data();

                    #region set lo tags
                    if (!String.IsNullOrEmpty(this.C_ID))
                    {
                        body = changeLOTags(body);
                        signature = getSignature_LO();
                        body = body.Replace("{%Signature%}", signature);
                    }
                    #endregion

                    #region set company tags
                    body = body.Replace("{%CompanyPhoto%}", "");
                    body = body.Replace("{%CompanyURL%}", companyTags.CompanyURL);
                    body = body.Replace("{%CompanyName%}", companyTags.CompanyName);
                    body = body.Replace("{%CompanyAddress%}", companyTags.CompanyAddress);
                    body = body.Replace("{%CompanyCity%}", companyTags.CompanyCity);
                    body = body.Replace("{%CompanyState%}", companyTags.CompanyState);
                    body = body.Replace("{%CompanyZip%}", companyTags.CompanyZip);
                    body = body.Replace("{%CompanyPhone%}", companyTags.CompanyPhone);
                    body = body.Replace("{%CompanyCellPhone%}", companyTags.CompanyCellPhone);
                    #endregion

                    #region set borrower and co borrower tags
                    //when we have the values from the tags (borrower) we replace them with its real values
                    body = body.Replace("{%BorrowerAddress%}", this.dataBCo.BorrowerAddress);
                    body = body.Replace("{%BorrowerCellPhone%}", this.dataBCo.BorrowerCellPhone);
                    body = body.Replace("{%BorrowerCity%}", this.dataBCo.BorrowerCity);
                    body = body.Replace("{%BorrowerDOB%}", this.dataBCo.BorrowerDOB);
                    body = body.Replace("{%BorrowerEmail%}", this.dataBCo.BorrowerEmail);
                    body = body.Replace("{%BorrowerFirstName%}", this.dataBCo.BorrowerFirstName);
                    body = body.Replace("{%BorrowerHomePhone%}", this.dataBCo.BorrowerHomePhone);
                    body = body.Replace("{%BorrowerLastName%}", this.dataBCo.BorrowerLastName);
                    body = body.Replace("{%BorrowerLoanAmount%}", this.dataBCo.BorrowerLoanAmount);
                    body = body.Replace("{%BorrowerState%}", this.dataBCo.BorrowerState);
                    body = body.Replace("{%BorrowerZip%}", this.dataBCo.BorrowerZip);

                    //when we have the values from the tags (co-borrower) we replace them with its real values
                    body = body.Replace("{%CoBorrowerAddress%}", this.dataBCo.CoBorrowerAddress);
                    body = body.Replace("{%CoBorrowerCellPhone%}", this.dataBCo.CoBorrowerCellPhone);
                    body = body.Replace("{%CoBorrowerCity%}", this.dataBCo.CoBorrowerCity);
                    body = body.Replace("{%CoBorrowerDOB%}", this.dataBCo.CoBorrowerDOB);
                    body = body.Replace("{%CoBorrowerEmail%}", this.dataBCo.CoBorrowerEmail);
                    body = body.Replace("{%CoBorrowerFirstName%}", this.dataBCo.CoBorrowerFirstName);
                    body = body.Replace("{%CoBorrowerHomePhone%}", this.dataBCo.CoBorrowerHomePhone);
                    body = body.Replace("{%CoBorrowerLastName%}", this.dataBCo.CoBorrowerLastName);
                    body = body.Replace("{%CoBorrowerState%}", this.dataBCo.CoBorrowerState);
                    body = body.Replace("{%CoBorrowerZip%}", this.dataBCo.CoBorrowerZip);
                    #endregion
                }
            }
            return body;
        }

        //change the LO tags
        private string changeLOTags(string body_html)
        {
            using (SqlDataReader reader = cnn.ExecuteReader("SELECT TOP 1 Consultant_ID, FullName, txtTitle, c.txtFax txtFax, c.txtCellPhone txtCellPhone, c.EMAIL EMAIL, txtCity, txtState, txtZip, c.txtPhone txtPhone, c.txtCellPhone txtCellPhone, c.txtAddress1 txtAddress, c.NMLS NMLS, [Role], c.txtWebSite txtWebSite, c.txtBiography txtBiography, social_facebook, social_twitter, social_linkedin, Name bname, b.txtCity bcity, b.txtState bstate, b.txtZip bzip, b.txtPhone bphone, b.txtFax bfax, b.NMLS bnmls, b.txtCellPhone bcellphone, b.txtWebSite bwebsite, b.txtBiography bbiography, b.txtAddress1 baddress FROM tblConsultants c LEFT JOIN tblBranches b ON b.branch_id=c.branch_id WHERE Consultant_ID=@Consultant_ID",
                    new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@Consultant_ID", this.C_ID)}))
            {
                if (reader.Read())
                {
                    string fullName = reader["FullName"].ToString();
                    string[] names = fullName.Split(' ');
                    body_html = body_html.Replace("{%LOFullname%}", fullName);
                    body_html = body_html.Replace("{%LOFirstname%}", names[0]);
                    body_html = body_html.Replace("{%LOLastname%}", names[names.Length - 1]);
                    body_html = body_html.Replace("{%LOTitle%}", reader["txtTitle"].ToString());
                    string currentURL = "";
                    string ImageUrl = string.Format("{0}GetConsultantPhoto.aspx?id={1}", currentURL, this.C_ID);
                    string photo = "<img id='Consultantsnp_Image1' src='" + ImageUrl + "' alt='Consultant'>";
                    body_html = body_html.Replace("{%LOPhoto%}", photo);
                    body_html = body_html.Replace("{%LOFax%}", reader["txtFax"].ToString());
                    body_html = body_html.Replace("{%LOCell%}", reader["txtCellPhone"].ToString());
                    body_html = body_html.Replace("{%LOEmail%}", reader["EMAIL"].ToString());
                    body_html = body_html.Replace("{%LOCity%}", reader["txtCity"].ToString());
                    body_html = body_html.Replace("{%LOState%}", reader["txtState"].ToString());
                    body_html = body_html.Replace("{%LOZip%}", reader["txtZip"].ToString());
                    body_html = body_html.Replace("{%LOPhone%}", reader["txtPhone"].ToString());
                    body_html = body_html.Replace("{%LOAddress%}", reader["txtAddress"].ToString());
                    body_html = body_html.Replace("{%LONMLS%}", reader["NMLS"].ToString());
                    body_html = body_html.Replace("{%LORole%}", reader["Role"].ToString());
                    body_html = body_html.Replace("{%LOWebsite%}", reader["txtWebSite"].ToString());
                    body_html = body_html.Replace("{%LODescription%}", reader["txtBiography"].ToString());
                    body_html = body_html.Replace("{%LOFacebook%}", "<a href='" + reader["social_facebook"].ToString() + "'>" + reader["social_facebook"].ToString()) + "</a>";
                    body_html = body_html.Replace("{%LOTwitter%}", "<a href='" + reader["social_twitter"].ToString() + "'>" + reader["social_twitter"].ToString() + "</a>");
                    body_html = body_html.Replace("{%LOLinkedin%}", "<a href='" + reader["social_linkedin"].ToString() + "'>" + reader["social_linkedin"].ToString() + "</a>");

                    //branch values
                    body_html = body_html.Replace("{%LOBranchName%}", reader["bname"].ToString());
                    body_html = body_html.Replace("{%LOBranchCity%}", reader["bcity"].ToString());
                    body_html = body_html.Replace("{%LOBranchState%}", reader["bstate"].ToString());
                    body_html = body_html.Replace("{%LOBranchZip%}", reader["bzip"].ToString());
                    body_html = body_html.Replace("{%LOBranchPhone%}", reader["bphone"].ToString());
                    body_html = body_html.Replace("{%LOBranchFax%}", reader["bfax"].ToString());
                    body_html = body_html.Replace("{%LOBranchNMLS%}", reader["bnmls"].ToString());
                    body_html = body_html.Replace("{%LOBranchCell%}", reader["bcellphone"].ToString());
                    body_html = body_html.Replace("{%LOBranchWebSite%}", reader["bwebsite"].ToString());
                    body_html = body_html.Replace("{%BranchDescription%}", reader["bbiography"].ToString());
                    body_html = body_html.Replace("{%LOBranchAddress%}", reader["baddress"].ToString());
                }
            }
            return body_html;
        }

        //get LO signature
        private string getSignature_LO()
        {
            string Signature = "";
            using (SqlDataReader reader = cnn.ExecuteReader("SELECT EESignature FROM tblEmailSignatureUsers WHERE Consultant_ID=@Consultant_ID",
                    new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@Consultant_ID", this.C_ID)}))
            {
                if (reader.Read())
                {
                    Signature = reader["EESignature"].ToString();
                    Signature = changeLOTags(Signature);
                }
                else
                {
                    Signature = "";
                }
            }
            return Signature;
        }

        //set Company data
        private void setCompany_Data()
        {
            using (SqlDataReader reader = cnn.ExecuteReader("SELECT TOP 1 c.site_id, cpc.content_value CompanyURL, c.full_site_name CompanyName, sa.[Address] CompanyAddress, sa.City CompanyCity, sa.[State] CompanyState, sa.Zip CompanyZip, sa.Phone CompanyPhone, sa.CellPhone CompanyCellPhone FROM tblclientsites c LEFT JOIN [tblSiteAttributes] sa ON c.site_id=sa.site_id LEFT JOIN tblClientPagesContent cpc ON cpc.site_id=c.site_id WHERE c.site_id=@SITE_ID AND content_type_name=@EMAIL_SITE_URL",
                    new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@SITE_ID", this.SITE_ID) ,
                        new System.Data.SqlClient.SqlParameter("@EMAIL_SITE_URL", "EMAIL_SITE_URL")}))
            {
                reader.Read();
                this.companyTags.CompanyName = reader["CompanyName"].ToString();
                this.companyTags.CompanyURL = reader["CompanyURL"].ToString();
                this.companyTags.CompanyAddress = reader["CompanyAddress"].ToString();
                this.companyTags.CompanyCity = reader["CompanyCity"].ToString();
                this.companyTags.CompanyState = reader["CompanyState"].ToString();
                this.companyTags.CompanyZip = reader["CompanyZip"].ToString();
                this.companyTags.CompanyPhone = reader["CompanyPhone"].ToString();
                this.companyTags.CompanyCellPhone = reader["CompanyCellPhone"].ToString();
            }
        }
    }
    #endregion

    //Page Load
    protected void Page_Load(object sender, EventArgs e)
    {
        getList();
    }

    //Function To Get The Consultant ID
    private string getConsultant_ID()
    {
        if (hdfConsultant.Value == "true")
        {
            if (drpMortgageSpecialist1.SelectedIndex > 1)
            {
                return drpMortgageSpecialist1.SelectedItem.Value.ToString();
            }
            else
            {
                return "";
            }
        }
        else
        {
            try
            {
                return NewClientSites.UIF.GetConsultantParam("Consultant_ID").ToString().Trim();
            }
            catch
            {
                return "";
            }
        }
    }

    //
    protected void DropDownList1_DataBound(object sender, EventArgs e)
    {
        if (drpMortgageSpecialist1.Items.Count > 0)
        {
            drpMortgageSpecialist1.Items.Insert(0, new ListItem("Please Select", ""));
            drpMortgageSpecialist1.Items.Insert(1, new ListItem("No, I am not", "noyet"));
        }
        else
        {
            if (NewClientSites.UIF.CurrentBranch.HasBranch)
            {
                drpMortgageSpecialist1.Items.Insert(0, new ListItem("Please Select", ""));
                drpMortgageSpecialist1.Items.Insert(1, new ListItem("No, I am not", "noyet"));
            }
            else
            {
                pnlConsultant.Visible = false;
                hdfConsultant.Value = "false";
            }
        }
    }

    //Function to get LO List
    public void getList()
    {
        Guid g = NewClientSites.UIF.Get_SITE_ID();
        string sql = "";
        if (NewClientSites.UIF.CurrentBranch.HasBranch)
        {
            sql = "SELECT Consultant_ID, RTRIM(FullName) + ' ('+role+ ') ' as FullName, [ROLE], [EMAIL], RTRIM(FullName) as FullNameWithoutRole FROM tblConsultants with(nolock) WHERE Site_ID = '" + returnSITE_ID() + "' AND IS_ACTIVE=1 ORDER BY FullName";
            SqlDataSource1.SelectCommand = sql;
        }
        else
        {
            sql = "SELECT Consultant_ID, RTRIM(FullName) + ' ('+role+ ') ' as FullName, [ROLE], [EMAIL], RTRIM(FullName) as FullNameWithoutRole FROM tblConsultants with(nolock) WHERE Site_ID = '" + g.ToString() + "' AND IS_ACTIVE=1 ORDER BY FullName";
            SqlDataSource1.SelectCommand = sql;
        }
    }

    //Function to get the Site ID
    public string returnSITE_ID()
    {
        string result;
        AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
        try
        {
            if (NewClientSites.UIF.CurrentLO.HasLo)
            {
                string c_id2 = NewClientSites.UIF.GetConsultantParam("Consultant_ID").Trim();
                string loId2 = NewClientSites.UIF.Get_SITE_ID().ToString();
                using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 SITE_ID FROM tblConsultants WHERE Consultant_ID = @c_id2 OR LO_SITE_ID = @loId2",
                        new System.Data.SqlClient.SqlParameter[] { 
                            new System.Data.SqlClient.SqlParameter("@c_id2", c_id2),
                            new System.Data.SqlClient.SqlParameter("@loId2", loId2)}))
                {
                    if (reader.Read())
                    {
                        result = reader["SITE_ID"].ToString();
                    }
                    else
                    {
                        result = "";
                    }
                }
            }
            else if (NewClientSites.UIF.CurrentBranch.HasBranch)
            {
                string b_name = NewClientSites.UIF.CurrentBranch.Name;
                using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 SITE_ID FROM tblBranches WHERE Name = @b_name",
                        new System.Data.SqlClient.SqlParameter[] { 
                            new System.Data.SqlClient.SqlParameter("@b_name", b_name),}))
                {
                    if (reader.Read())
                    {
                        result = reader["SITE_ID"].ToString();
                    }
                    else
                    {
                        result = "";
                    }
                }
            }
            else
            {
                result = NewClientSites.UIF.Get_SITE_ID().ToString();
            }
            return result;
        }
        catch (Exception)
        {
            throw;
        }
    }

    // Function to get the Purchase Price
    private void SalesPriceOrHomevalue2DB(AdminClients.BusinessLogicLayer.User u)
    {
        if (edtAPP_LOAN_PURPOSE.SelectedValue.StartsWith("Refinance"))
        {
            u["Property Value/Price"] = this.PropertyEstimatedValue.Text.Trim();
        }
        else
        {
            u["Purchase Price"] = this.PropertyEstimatedValue.Text.Trim();
        }
    }

    //Function To Validate
    bool IsValid()
    {
        return (!string.IsNullOrEmpty(firstName.Text.Trim()) && !string.IsNullOrEmpty(email.Text.Trim()));
    }

    //Function To Add Lead
    private bool AddLead()
    {
        string err;
        bool isDupLeadSource;
        string Consultant_ID = "";
        Guid c_id = Guid.Empty;

        #region Initialize User Class
        AdminClients.BusinessLogicLayer.User u = new AdminClients.BusinessLogicLayer.User();
        #endregion

        #region Get Consultant ID
        Consultant_ID = getConsultant_ID();
        try
        {
            c_id = new Guid(Consultant_ID);
        }
        catch { }
        #endregion

        #region Step1
        u.SITE_ID = NewClientSites.UIF.Get_SITE_ID();
        u.LeadSource = "Website: Short App";
        u.txtFirstName = this.firstName.Text.Trim();
        u.txtLastName = this.lastName.Text.Trim();
        u.txtEmail = this.email.Text.Trim();
        u.txtPhone = this.phone.Text.Trim();
        #endregion

        #region Step2
        u["Loan Type"] = this.edtAPP_LOAN_PURPOSE.SelectedValue;
        u["LoanPurposeRefiType"] = this.edtAPP_REF_LOAN_PURPOSE.SelectedValue;
        u["LoanPurposeOther"] = this.LoanPurposeOther.Text.Trim();

        SalesPriceOrHomevalue2DB(u);

        string txtMarkGroup = "";
        if (excellent.Checked)
            txtMarkGroup = this.excellent.Text;
        else if (good.Checked)
            txtMarkGroup = this.good.Text;
        else if (fair.Checked)
            txtMarkGroup = this.fair.Text;
        else if (NotSure.Checked)
            txtMarkGroup = this.NotSure.Text;
        u["BorrowerCreditScore"] = txtMarkGroup.Trim();

        u["LoanProgram"] = this.ddlLoanProgram.SelectedValue;

        string s = this.LoanAmount.Text.Trim();
        decimal amt;
        if (decimal.TryParse(s, System.Globalization.NumberStyles.AllowDecimalPoint | System.Globalization.NumberStyles.AllowCurrencySymbol | System.Globalization.NumberStyles.AllowThousands, null, out amt))
        {
            u.LoanAmount = amt;
        }

        u["LoanDownPayment"] = this.LoanDownPayment.Text.Trim();
        #endregion

        #region Step3
        u.BorrowerAddress = this.StreetAddress.Text.Trim();
        u.BorrowerCity = this.city.Text.Trim();
        u.BorrowerState = this.ddlstate.SelectedValue;
        u.BorrowerZip = this.zip.Text.Trim();
        u["PropertyType"] = this.ddlPropertyType.SelectedValue;
        u["PropertyWillBe"] = this.ddlPropertyWillBe.SelectedValue;
        u["Notes"] = "How did you hear about us? " + this.ddlHowdidyouhearaboutus.SelectedValue;
        u["AGENT_ID"] = c_id;
        #endregion

        //Save changes into the datase
        return u.ApplyChanges(true, out err, out isDupLeadSource);
    }

    //Function To Create The Autoresponder To Leads
    protected void send_AutoResponderLead(Guid site_id, string c_id, dataBorrowerCo data)
    {
        //Set initial variables
        string html_body = "";
        string subject = "";
        MailMessage m = new MailMessage();

        #region Get Message
        //Get Values from the autoresponder
        getAutoResponder values = new getAutoResponder(c_id, site_id.ToString(), data);

        //Get subject from autoresponder without tags
        subject = values.getHTML_DATA("EMAIL_SUBJECT_RT").Replace("</a>", " ");

        //Get body from autoresponder without tags
        html_body = values.getHTML_DATA("EMAIL_BODY_RT");
        #endregion


        //Set basic from 
        string recipientFrom = "";
        string recipientFromName = "";
        if (NewClientSites.UIF.CurrentBranch.HasBranch)
        {
            recipientFrom = NewClientSites.UIF.CurrentBranch.Email;
            recipientFromName = NewClientSites.UIF.CurrentBranch.Name;
            m.From = new MailAddress(recipientFrom, recipientFromName);
        }
        else if (NewClientSites.UIF.CurrentLO.HasLo)
        {
            recipientFrom = NewClientSites.UIF.CurrentLO.Email;
            recipientFromName = NewClientSites.UIF.CurrentLO.FullName;
            m.From = new MailAddress(recipientFrom, recipientFromName);
        }
        else
        {

            AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
            try
            {
                //Verify if is not empty the LO
                if (!String.IsNullOrEmpty(c_id))
                {
                    using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 FullName, email FROM tblConsultants where consultant_id=@c_id",
                            new System.Data.SqlClient.SqlParameter[] { 
                            new System.Data.SqlClient.SqlParameter("@c_id", c_id)}))
                    {
                        /*****************************************************
                        * if there's an email (it should be because it's a LO)
                        * set full name and email to CC
                        *****************************************************/
                        if (reader.Read())
                        {
                            recipientFromName = reader["FullName"].ToString();
                            recipientFrom = reader["email"].ToString();
                        }
                    }
                    m.From = new MailAddress(recipientFrom, recipientFromName);
                }
                else
                {
                    recipientFrom = NewClientSites.Global.SendEmailAddress;
                    recipientFromName = NewClientSites.UIF.GetSITE_NAME();
                    m.From = new MailAddress(recipientFrom, recipientFromName);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Set recipients
        m.To.Add(new MailAddress(data.BorrowerEmail, data.BorrowerFirstName));

        #region Send Email
        m.Subject = subject;
        m.Body = html_body;

        try
        {
            AdminClients.Controls.SmtpAPIWrapper cl = AdminClients.EmailEvents.Controls.SmtpHosts.SmtpClientCreaCRM();
            cl.Send(m);
        }
        catch { }
        #endregion
    }

    //Submit Button
    protected void submit_Click(object sender, EventArgs e)
    {
        string c_id = "";
        if (IsValid())
        {
            if (this.AddLead())
            {
                dataBorrowerCo dataForm = new dataBorrowerCo();

                #region Set Values Borrower
                //This values are used for the autoresponders
                dataForm.BorrowerFirstName = this.firstName.Text.Trim();
                dataForm.BorrowerLastName = this.lastName.Text.Trim();
                dataForm.BorrowerAddress = this.StreetAddress.Text.Trim();
                dataForm.BorrowerCity = this.city.Text.Trim();
                dataForm.BorrowerEmail = this.email.Text.Trim();
                dataForm.BorrowerHomePhone = this.phone.Text.Trim();
                dataForm.BorrowerLoanAmount = this.LoanAmount.Text.Trim();
                dataForm.BorrowerState = this.ddlstate.SelectedValue;
                dataForm.BorrowerZip = this.zip.Text.Trim();
                #endregion

                /*******************************************************************
                * calling the function to send autoresponders setting values like:
                * site_id, consultant_id (lo id) and borrower and co borrower values
                *******************************************************************/
                send_AutoResponderLead(new Guid(returnSITE_ID()), getConsultant_ID(), dataForm);
                string YourName = firstName.Text.Trim();
                this.Message.Text = YourName;

                //Hide form section
                this.formData.Visible = false;

                //Show “Thank you” section
                this.thankYou.Visible = true;
            }
        }
    }
}