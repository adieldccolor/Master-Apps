using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Net.Mail;
using System.Net.Mime;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class FullApplyNow : System.Web.UI.UserControl
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

    //Class For Fill And Set All Dropdowns
    protected class fullDropDowns
    {
        //Variable to set values
        private List<KeyValuePair<string, string>> data;

        //Empty constructor
        public fullDropDowns()
        {
        }

        //With this constructor we create the list of values that we want to add based on a type
        public fullDropDowns(string type)
        {
            this.data = new List<KeyValuePair<string, string>>();
            switch (type)
            {
                case "LoanPurpose":
                    this.data.Add(new KeyValuePair<string, string>("Purchase", "Purchase"));
                    this.data.Add(new KeyValuePair<string, string>("Refinance", "Refinance"));
                    this.data.Add(new KeyValuePair<string, string>("Construction", "Construction"));
                    this.data.Add(new KeyValuePair<string, string>("Construction - Perm", "Construction - Perm"));
                    this.data.Add(new KeyValuePair<string, string>("Other", "Other"));
                    break;
                case "Liabilities":
                    this.data.Add(new KeyValuePair<string, string>("Select an Option", ""));
                    this.data.Add(new KeyValuePair<string, string>("Child Care", "Child Care"));
                    this.data.Add(new KeyValuePair<string, string>("Child Support", "Child Support"));
                    this.data.Add(new KeyValuePair<string, string>("Collections Judgments And Liens", "Collections Judgments And Liens"));
                    this.data.Add(new KeyValuePair<string, string>("HELOC", "HELOC"));
                    this.data.Add(new KeyValuePair<string, string>("Installment", "Installment"));
                    this.data.Add(new KeyValuePair<string, string>("Lease Payments", "Lease Payments"));
                    this.data.Add(new KeyValuePair<string, string>("Mortgage", "Mortgage"));
                    this.data.Add(new KeyValuePair<string, string>("Open 30 Days Charge Account", "Open 30 Days Charge Account"));
                    this.data.Add(new KeyValuePair<string, string>("Other Liability", "Other Liability"));
                    this.data.Add(new KeyValuePair<string, string>("Revolving", "Revolving"));
                    this.data.Add(new KeyValuePair<string, string>("Separate Maintenance Expense", "Separate Maintenance Expense"));
                    this.data.Add(new KeyValuePair<string, string>("Other Expense", "Other Expense"));
                    this.data.Add(new KeyValuePair<string, string>("Taxes", "Taxes"));
                    break;
                case "RealStatus":
                    this.data.Add(new KeyValuePair<string, string>("Please Select", ""));
                    this.data.Add(new KeyValuePair<string, string>("Already Sold, Sold", "Already Sold, Sold"));
                    this.data.Add(new KeyValuePair<string, string>("Pending Sale", "Pending Sale"));
                    this.data.Add(new KeyValuePair<string, string>("Rental Being Held for Income, Rental", "Rental Being Held for Income, Rental"));
                    this.data.Add(new KeyValuePair<string, string>("Will Remain or Become Primary", "Will Remain or Become Primary"));
                    break;
                case "PropertyType":
                    this.data.Add(new KeyValuePair<string, string>("Select an Option", ""));
                    this.data.Add(new KeyValuePair<string, string>("Single Family", "Single Family"));
                    this.data.Add(new KeyValuePair<string, string>("Co-Operative", "Co-Operative"));
                    this.data.Add(new KeyValuePair<string, string>("Commercial - Non-Residential", "Commercial - Non-Residential"));
                    this.data.Add(new KeyValuePair<string, string>("Condominium", "Condominium"));
                    this.data.Add(new KeyValuePair<string, string>("Farm", "Farm"));
                    this.data.Add(new KeyValuePair<string, string>("Home - Business Combined", "Home - Business Combined"));
                    this.data.Add(new KeyValuePair<string, string>("Land", "Land"));
                    this.data.Add(new KeyValuePair<string, string>("Manufactured/Mobile Home", "Manufactured/Mobile Home"));
                    this.data.Add(new KeyValuePair<string, string>("Mixed Use - Residential", "Mixed Use - Residential"));
                    this.data.Add(new KeyValuePair<string, string>("Multifamily (More than 4 units", "Multifamily (More than 4 units)"));
                    this.data.Add(new KeyValuePair<string, string>("Townhouse", "Townhouse"));
                    this.data.Add(new KeyValuePair<string, string>("Two-to-Four-Unit Property", "Two-to-Four-Unit Property"));
                    break;
                case "State":
                    this.data.Add(new KeyValuePair<string, string>("Please select", ""));
                    this.data.Add(new KeyValuePair<string, string>("Alabama", "AL"));
                    this.data.Add(new KeyValuePair<string, string>("Alaska", "AK"));
                    this.data.Add(new KeyValuePair<string, string>("American Samoa", "AS"));
                    this.data.Add(new KeyValuePair<string, string>("Arizona", "AZ"));
                    this.data.Add(new KeyValuePair<string, string>("Arkansas", "AR"));
                    this.data.Add(new KeyValuePair<string, string>("California", "CA"));
                    this.data.Add(new KeyValuePair<string, string>("Colorado", "CO"));
                    this.data.Add(new KeyValuePair<string, string>("Connecticut", "CT"));
                    this.data.Add(new KeyValuePair<string, string>("Delaware", "DE"));
                    this.data.Add(new KeyValuePair<string, string>("District of Columbia", "DC"));
                    this.data.Add(new KeyValuePair<string, string>("Dominican Republic", "DO"));
                    this.data.Add(new KeyValuePair<string, string>("Federated states of Micronesia", "FM"));
                    this.data.Add(new KeyValuePair<string, string>("Florida", "FL"));
                    this.data.Add(new KeyValuePair<string, string>("Georgia", "GA"));
                    this.data.Add(new KeyValuePair<string, string>("Guam", "GU"));
                    this.data.Add(new KeyValuePair<string, string>("Hawaii", "HI"));
                    this.data.Add(new KeyValuePair<string, string>("Idaho", "ID"));
                    this.data.Add(new KeyValuePair<string, string>("Illinois", "IL"));
                    this.data.Add(new KeyValuePair<string, string>("Indiana", "IN"));
                    this.data.Add(new KeyValuePair<string, string>("Iowa", "IA"));
                    this.data.Add(new KeyValuePair<string, string>("Kansas", "KS"));
                    this.data.Add(new KeyValuePair<string, string>("Kentucky", "KY"));
                    this.data.Add(new KeyValuePair<string, string>("Louisiana", "LA"));
                    this.data.Add(new KeyValuePair<string, string>("Maine", "ME"));
                    this.data.Add(new KeyValuePair<string, string>("Marshall Islands", "MH"));
                    this.data.Add(new KeyValuePair<string, string>("Maryland", "MD"));
                    this.data.Add(new KeyValuePair<string, string>("Massachusetts", "MA"));
                    this.data.Add(new KeyValuePair<string, string>("Michigan", "MI"));
                    this.data.Add(new KeyValuePair<string, string>("Minnesota", "MN"));
                    this.data.Add(new KeyValuePair<string, string>("Mississippi", "MS"));
                    this.data.Add(new KeyValuePair<string, string>("Missouri", "MO"));
                    this.data.Add(new KeyValuePair<string, string>("Montana", "MT"));
                    this.data.Add(new KeyValuePair<string, string>("Nebraska", "NE"));
                    this.data.Add(new KeyValuePair<string, string>("Nevada", "NV"));
                    this.data.Add(new KeyValuePair<string, string>("New Hampshire", "NH"));
                    this.data.Add(new KeyValuePair<string, string>("New Jersey", "NJ"));
                    this.data.Add(new KeyValuePair<string, string>("New Mexico", "NM"));
                    this.data.Add(new KeyValuePair<string, string>("New York", "NY"));
                    this.data.Add(new KeyValuePair<string, string>("North Carolina", "NC"));
                    this.data.Add(new KeyValuePair<string, string>("North Dakota", "ND"));
                    this.data.Add(new KeyValuePair<string, string>("Northern Mariana Islands", "MP"));
                    this.data.Add(new KeyValuePair<string, string>("Ohio", "OH"));
                    this.data.Add(new KeyValuePair<string, string>("Oklahoma", "OK"));
                    this.data.Add(new KeyValuePair<string, string>("Oregon", "OR"));
                    this.data.Add(new KeyValuePair<string, string>("Palau", "PW"));
                    this.data.Add(new KeyValuePair<string, string>("Pennsylvania", "PA"));
                    this.data.Add(new KeyValuePair<string, string>("Puerto Rico", "PR"));
                    this.data.Add(new KeyValuePair<string, string>("Rhode Island", "RI"));
                    this.data.Add(new KeyValuePair<string, string>("South Carolina", "SC"));
                    this.data.Add(new KeyValuePair<string, string>("South Dakota", "SD"));
                    this.data.Add(new KeyValuePair<string, string>("Tennessee", "TN"));
                    this.data.Add(new KeyValuePair<string, string>("Texas", "TX"));
                    this.data.Add(new KeyValuePair<string, string>("Utah", "UT"));
                    this.data.Add(new KeyValuePair<string, string>("Vermont", "VT"));
                    this.data.Add(new KeyValuePair<string, string>("Virgin Islands", "VI"));
                    this.data.Add(new KeyValuePair<string, string>("Virginia", "VA"));
                    this.data.Add(new KeyValuePair<string, string>("Washington", "WA"));
                    this.data.Add(new KeyValuePair<string, string>("West Virginia", "WV"));
                    this.data.Add(new KeyValuePair<string, string>("Wisconsin", "WI"));
                    this.data.Add(new KeyValuePair<string, string>("Wyoming", "WY"));
                    break;
                case "RealPropertyType":
                    this.data.Add(new KeyValuePair<string, string>("Select an Option", ""));
                    this.data.Add(new KeyValuePair<string, string>("Single Family", "Single Family"));
                    this.data.Add(new KeyValuePair<string, string>("Co-Operative", "Co-Operative"));
                    this.data.Add(new KeyValuePair<string, string>("Commercial - Non-Residential", "Commercial - Non-Residential"));
                    this.data.Add(new KeyValuePair<string, string>("Condominium", "Condominium"));
                    this.data.Add(new KeyValuePair<string, string>("Farm", "Farm"));
                    this.data.Add(new KeyValuePair<string, string>("Home - Business Combined", "Home - Business Combined"));
                    this.data.Add(new KeyValuePair<string, string>("Land", "Land"));
                    this.data.Add(new KeyValuePair<string, string>("Manufactured/Mobile Home", "Manufactured/Mobile Home"));
                    this.data.Add(new KeyValuePair<string, string>("Mixed Use - Residential", "Mixed Use - Residential"));
                    this.data.Add(new KeyValuePair<string, string>("Multifamily (More than 4 units", "Multifamily (More than 4 units)"));
                    this.data.Add(new KeyValuePair<string, string>("Townhouse", "Townhouse"));
                    this.data.Add(new KeyValuePair<string, string>("Two-to-Four-Unit Property", "Two-to-Four-Unit Property"));
                    break;
            }
        }

        //Set values to dropdown selected
        public void setData(DropDownList dd)
        {
            for (int i = 0; i < data.Count; i++)
            {
                dd.Items.Add(new ListItem(this.data[i].Key, this.data[i].Value));
            }
        }

        //Delete previous data
        public void clearData()
        {
            for (int i = 0; i < data.Count - 1; i++)
            {
                data.Remove(new KeyValuePair<string, string>(data[i].Key, data[i].Value));
            }
        }
    }

    //Class For Borrower And Co-Borrower Data
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

        //Co-Borrower
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

        //Borrovwe And Co-Borrower List
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

            //CO-Borrower
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

    //Class For Create Autoresponders
    protected class getAutoResponder
    {
        //Basic Variables
        private string C_ID;
        private string SITE_ID;
        private dataBorrowerCo dataBCo;
        private dataCompany companyTags;

        //Data Company
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

            //Data Company
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

        //Constructor to set initial values consultant
        public getAutoResponder(string cid, string site_id, dataBorrowerCo values)
        {
            //Set initial values
            this.companyTags = new dataCompany();
            this.dataBCo = new dataBorrowerCo();
            this.dataBCo = values;
            this.C_ID = cid;
            this.SITE_ID = site_id;
        }

        /******************************************************************************************
        * with this class we get in an easier way all autoresponders based and tags are translated
        * type means the value from AdminClients/Controls/Edit_EMAIL_MSL.ascx.cs
        * function Page_PreRender
        ******************************************************************************************/
        public string getHTML_DATA(string type)
        {
            /***************************************************************
            * create basic values which include a DataBase Access
            * the body the AutoResponder the Signature of the LO (if exist)
            * SQL queries to use
            ***************************************************************/
            string body = "";
            string signature = "";

            AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
            try
            {
                /*******************************************************************************
                * in this section we get the Value Subject or Body for the 
                * email, at the beginning we set site_id, and the content_value to search (type)
                *******************************************************************************/
                using (SqlDataReader reader = conn.ExecuteReader("SELECT CONTENT_VALUE FROM tblClientPagesContent WHERE SITE_ID=@SITE_ID AND CONTENT_TYPE_NAME=@type",
                            new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@SITE_ID", this.SITE_ID),
                        new System.Data.SqlClient.SqlParameter("@type", type)}))
                {
                    /******************************************************************
                    * after the result, we check the values from the database
                    * if it has it'll add the rest of data and start to replace tags
                    ******************************************************************/
                    if (reader.Read())
                    {
                        //Set the result of the previous query
                        body = reader["CONTENT_VALUE"].ToString();

                        //Get the values from the company in order to replace them
                        setCompany_Data();

                        #region Set LO Tags
                        //Evaluate if it's a LO if it's we get its signature
                        if (!String.IsNullOrEmpty(this.C_ID))
                        {
                            body = changeLOTags(body);
                            signature = getSignature_LO();

                            //Replace new signature translated
                            body = body.Replace("{%Signature%}", signature);
                        }
                        else
                        {
                            body = changeLOTags2(body);

                            //Replace new signature translated
                            body = body.Replace("{%Signature%}", "");
                        }

                        #endregion

                        #region Set Company tags
                        //When we have the values from the tags (company) we replace them with its real values
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

                        #region Set Borrower And Co-Borrower Tags
                        //When we have the values from the tags (borrower) we replace them with its real values
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

                        //When we have the values from the tags (co-borrower) we replace them with its real values
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
                    return body;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Change The LO Tags
        private string changeLOTags(string body_html)
        {
            AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
            try
            {
                using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 Consultant_ID, FullName, txtTitle, c.txtFax txtFax, c.txtCellPhone txtCellPhone, c.EMAIL EMAIL, txtCity, txtState, txtZip, c.txtPhone txtPhone, c.txtCellPhone txtCellPhone, c.txtAddress1 txtAddress, c.NMLS NMLS, [Role], c.txtWebSite txtWebSite, c.txtBiography txtBiography, social_facebook, social_twitter, social_linkedin, Name bname, b.txtCity bcity, b.txtState bstate, b.txtZip bzip, b.txtPhone bphone, b.txtFax bfax, b.NMLS bnmls, b.txtCellPhone bcellphone, b.txtWebSite bwebsite, b.txtBiography bbiography, b.txtAddress1 baddress FROM tblConsultants c LEFT JOIN tblBranches b ON b.branch_id=c.branch_id WHERE Consultant_ID=@C_ID",
                            new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@C_ID", this.C_ID)}))
                {
                    if (reader.Read())
                    {
                        string fullName = reader["FullName"].ToString();
                        string[] names = fullName.Split(' ');
                        string currentURL = "";
                        string ImageUrl = string.Format("{0}GetConsultantPhoto.aspx?id={1}", currentURL, this.C_ID);
                        string photo = "<img id='Consultantsnp_Image1' src='" + ImageUrl + "' alt='Consultant'>";
                        body_html = body_html.Replace("{%LOFullname%}", fullName);
                        body_html = body_html.Replace("{%LOFirstname%}", names[0]);
                        body_html = body_html.Replace("{%LOLastname%}", names[names.Length - 1]);
                        body_html = body_html.Replace("{%LOTitle%}", reader["txtTitle"].ToString());
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
                        body_html = body_html.Replace("https://admin.arginteractive.com:444", AdminClients.SecureEncompassSync.getServerURL("CRMAdminURL"));

                        //Branch values
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
                    return body_html;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }


        //Change The LO Tags
        private string changeLOTags2(string body_html)
        {
            body_html = body_html.Replace("{%LOFullname%}", "");
            body_html = body_html.Replace("{%LOFirstname%}", "");
            body_html = body_html.Replace("{%LOLastname%}", "");
            body_html = body_html.Replace("{%LOTitle%}", "");
            body_html = body_html.Replace("{%LOPhoto%}", "");
            body_html = body_html.Replace("{%LOFax%}", "");
            body_html = body_html.Replace("{%LOCell%}", "");
            body_html = body_html.Replace("{%LOEmail%}", "");
            body_html = body_html.Replace("{%LOCity%}", "");
            body_html = body_html.Replace("{%LOState%}", "");
            body_html = body_html.Replace("{%LOZip%}", "");
            body_html = body_html.Replace("{%LOPhone%}", "");
            body_html = body_html.Replace("{%LOAddress%}", "");
            body_html = body_html.Replace("{%LONMLS%}", "");
            body_html = body_html.Replace("{%LORole%}", "");
            body_html = body_html.Replace("{%LOWebsite%}", "");
            body_html = body_html.Replace("{%LODescription%}", "");
            body_html = body_html.Replace("{%LOFacebook%}", "");
            body_html = body_html.Replace("{%LOTwitter%}", "");
            body_html = body_html.Replace("{%LOLinkedin%}", "");
            body_html = body_html.Replace("https://admin.arginteractive.com:444", AdminClients.SecureEncompassSync.getServerURL("CRMAdminURL"));

            //Branch values
            body_html = body_html.Replace("{%LOBranchName%}", "");
            body_html = body_html.Replace("{%LOBranchCity%}", "");
            body_html = body_html.Replace("{%LOBranchState%}", "");
            body_html = body_html.Replace("{%LOBranchZip%}", "");
            body_html = body_html.Replace("{%LOBranchPhone%}", "");
            body_html = body_html.Replace("{%LOBranchFax%}", "");
            body_html = body_html.Replace("{%LOBranchNMLS%}", "");
            body_html = body_html.Replace("{%LOBranchCell%}", "");
            body_html = body_html.Replace("{%LOBranchWebSite%}", "");
            body_html = body_html.Replace("{%BranchDescription%}", "");
            body_html = body_html.Replace("{%LOBranchAddress%}", "");

            return body_html;
        }

        //Get LO Signature
        private string getSignature_LO()
        {
            string Signature = "";

            AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
            try
            {
                //Get signature
                using (SqlDataReader reader = conn.ExecuteReader("SELECT EESignature FROM tblEmailSignatureUsers WHERE Consultant_ID=@C_ID",
                            new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@C_ID", this.C_ID)}))
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
                    return Signature;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Set Company Data
        private void setCompany_Data()
        {
            AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();
            try
            {
                using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 c.site_id, cpc.content_value CompanyURL, c.full_site_name CompanyName, sa.[Address] CompanyAddress, sa.City CompanyCity, sa.[State] CompanyState, sa.Zip CompanyZip, sa.Phone CompanyPhone, sa.CellPhone CompanyCellPhone FROM tblclientsites c LEFT JOIN [tblSiteAttributes] sa ON c.site_id=sa.site_id LEFT JOIN tblClientPagesContent cpc ON cpc.site_id=c.site_id WHERE c.site_id=@SITE_ID AND content_type_name=@type",
                            new System.Data.SqlClient.SqlParameter[] { 
                                new System.Data.SqlClient.SqlParameter("@SITE_ID", this.SITE_ID),
                                new System.Data.SqlClient.SqlParameter("@type", "EMAIL_SITE_URL")}))
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
            catch (Exception)
            {
                throw;
            }
        }
    }

    //Page Load
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            #region Get If It's Returning
            returning = (Request.QueryString["returning"] ?? "").Length > 0 ? true : false;
            try
            {
                returning = Convert.ToBoolean(Request.QueryString["returning"].ToString());
            }
            catch { }
            #endregion

            //Activate validate match if it's not returning
            // if (returning == false)
            //{
            //CompareValidator1.Enabled = true;
            //}

            #region Set Data Dropdown
            fullDropDowns fDD = new fullDropDowns();
            fDD = new fullDropDowns("LoanPurpose");
            fDD.setData(edtAPP_LOAN_PURPOSE);
            fDD.clearData();
            fDD = new fullDropDowns("State");
            fDD.setData(edtAPP_PROPERTY_STATE);
            fDD.setData(edtAPP_CB_EMP_STATE);
            fDD.setData(edtAPP_PB_CURR_STATE);
            fDD.setData(edtAPP_CB_CURR_STATE);
            fDD.setData(edtAPP_PB_EMP_STATE);
            fDD.setData(edtAPP_CB_EMP_STATE);
            fDD.setData(edtAPP_REAL_PROPERTY_STATE);
            fDD.setData(edtAPP_REAL_PROPERTY_STATE2);
            fDD.setData(edtAPP_REAL_PROPERTY_STATE3);
            fDD.clearData();

            //Set data of liabilities
            fDD = new fullDropDowns("Liabilities");
            fDD.setData(LiaType1);
            fDD.setData(LiaType2);
            fDD.setData(LiaType3);
            fDD.setData(LiaType4);
            fDD.setData(LiaType5);
            fDD.setData(LiaType6);
            fDD.setData(LiaType7);
            fDD.clearData();

            //Set data of real status
            fDD = new fullDropDowns("RealStatus");
            fDD.setData(edtAPP_REAL_STATUS);
            fDD.setData(edtAPP_REAL_STATUS2);
            fDD.setData(edtAPP_REAL_STATUS3);
            fDD.clearData();

            //Set data of real property type
            fDD = new fullDropDowns("RealPropertyType");
            fDD.setData(edtAPP_REAL_PROPERTY_TYPE);
            fDD.setData(edtAPP_REAL_PROPERTY_TYPE2);
            fDD.setData(edtAPP_REAL_PROPERTY_TYPE3);
            fDD.clearData();

            for (int i = 1; i < 5; i++)
            {
                edtAPP_UNITS_NUM.Items.Add(new ListItem(i.ToString(), i.ToString()));
            }
            #endregion
        }
    }

    #region Previous Codes (but essentials)
    private void SetDropDownValue(DropDownList dd, string value)
    {
        ListItem li = dd.Items.FindByValue(value);
        if (null == li) { li = new ListItem(value); dd.Items.Add(li); }
        dd.SelectedIndex = -1;
        li.Selected = true;
    }

    private void DB2SalesPriceOrHomevalue(AdminClients.BusinessLogicLayer.User u)
    {
        if (edtAPP_LOAN_PURPOSE.SelectedValue.StartsWith("Refinance"))
        {
            edtHOME_VALUE.Text = u["Property Value/Price"].ToString();
        }
        else
        {
            edtHOME_VALUE.Text = u["Purchase Price"].ToString();
        }
    }

    Guid uid()
    {
        try
        {
            return new Guid(u.Value);
        }
        catch
        {
            return Guid.Empty;
        }
    }

    private void SalesPriceOrHomevalue2DB(AdminClients.BusinessLogicLayer.User u)
    {
        if (edtAPP_LOAN_PURPOSE.SelectedValue.StartsWith("Refinance"))
        {
            u["Property Value/Price"] = this.edtHOME_VALUE.Text.Trim();
        }
        else
        {
            u["Purchase Price"] = this.edtHOME_VALUE.Text.Trim();
        }
    }
    #endregion

    //Function To Get Site Id
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
                        return result = reader["SITE_ID"].ToString();
                    }
                    else
                    {
                        return result = "";
                    }
                }
            }
            else if (NewClientSites.UIF.CurrentBranch.HasBranch)
            {
                string b_name = NewClientSites.UIF.CurrentBranch.Name;
                using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 SITE_ID FROM tblBranches WHERE Name = @b_name",
                        new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@b_name", b_name)}))
                {
                    if (reader.Read())
                    {
                        return result = reader["SITE_ID"].ToString();
                    }
                    else
                    {
                        return result = "";
                    }
                }
            }
            else
            {
                result = NewClientSites.UIF.Get_SITE_ID().ToString();
                return result;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }

    //Function To Get The Consultant ID
    private string getConsultant_ID()
    {
        //check if if it's a lo site or not
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

    //Function To Set Values From A Previous Registration
    private bool SetFields(Guid userid)
    {
        //Basic variables
        string s;
        bool b;

        //Set user ID to get values from DB
        AdminClients.BusinessLogicLayer.User u = new AdminClients.DataAccess.SQLDataAccess().GetUser(userid);

        //Check if the user is null if it's return
        if (u == null)
        {
            return false;
        }

        #region Set Step
        if (!string.IsNullOrEmpty(u["Notes"].ToString()))
        {
            MultiView1.ActiveViewIndex = Convert.ToInt32(u["Notes"].ToString());
        }
        #endregion

        #region Step2
        try
        {
            s = u["Loan Type"].ToString();
            edtAPP_LOAN_PURPOSE.SelectedValue = u["Loan Type"].ToString();
            if (s == "Other")
            {
                LoanPurposeOther.Text = u["LoanPurposeOther"].ToString();
            }
            edtAPP_REF_LOAN_PURPOSE.SelectedValue = u["LoanPurposeRefiType"].ToString();
        }
        catch { }

        //Sales Price/Home value
        DB2SalesPriceOrHomevalue(u);

        edtLOAN_AMOUNT.Text = u.LoanAmount.ToString();
        s = u["SalesDetailsFoundAHome"].ToString();
        if (s == "not found")
        {
            edtPROPERTY_NOT_FOUND.Checked = true;
        }
        edtAPP_PROPERTY_ADDRESS.Text = u.txtPropertyAdress;
        edtAPP_PROPERTY_CURR_CITY.Text = u.txtCity;
        try
        {
            edtAPP_PROPERTY_STATE.SelectedValue = u.txtState;
        }
        catch { }
        edtAPP_PROPERTY_ZIP.Text = u.intZip;
        edtAPP_PROPERTY_COUNTY.Text = u["Property County"].ToString();
        try
        {
            edtAPP_UNITS_NUM.SelectedValue = u["Num Of Units"].ToString();
        }
        catch { }

        //Set values radio buttons of Property Will be
        s = u["pWillBeIsPrimary"].ToString();
        if (bool.TryParse(s, out b))
        {
            this.propertyWillBeIsPrimary.Checked = b;
        }
        s = u["pWillBeIsSecondary"].ToString();
        if (bool.TryParse(s, out b))
        {
            this.propertyWillBeIsSecondary.Checked = b;
        }
        s = u["pWillBeIsInvestment"].ToString();
        if (bool.TryParse(s, out b))
        {
            this.propertyWillBeIsInvestment.Checked = b;
        }

        try
        {
            s = u.LoanType;
            DropDownLoanType.SelectedValue = u.LoanType;
            if (s == "Other")
            {
                LoanTypeOther.Text = u["LoanTypeOther"].ToString();
            }
        }
        catch { }
        #endregion

        #region Step3
        //Borrower
        edtAPP_PB_FIRST_NAME.Text = u.txtFirstName;
        edtAPP_PB_LAST_NAME.Text = u.txtLastName;
        edtAPP_PB_MIDDLE_INITIALS.Text = u.txtMiddleName;
        edtAPP_PB_SOC_NO.Text = u["SocNum"].ToString();
        try
        {
            edtAPP_PB_MARITAL.SelectedValue = u["MartialStatus"].ToString();
        }
        catch { }
        edtAPP_PB_DOB.Text = u["DOB"].ToString();
        edtAPP_PB_YEARS_IN_SCOOL.Text = u["AssetYearsOfSchool"].ToString();
        edtAPP_PB_DEPENDANTS_NO.Text = u["DependentsNum"].ToString();
        edtAPP_PB_DEPENDANTS_AGE.Text = u["DependentsAges"].ToString();
        txtPhone.Text = u.txtPhone;
        txtCellPhone.Text = u.txtCellPhone;
        WorkPhone.Text = u.WorkPhone;
        edtAPP_PB_CURR_ADDRESS.Text = u.BorrowerAddress;
        edtAPP_PB_CURR_CITY.Text = u.BorrowerCity;
        try
        {
            edtAPP_PB_CURR_STATE.SelectedValue = u.BorrowerState;
        }
        catch { }
        edtAPP_PB_CURR_ZIP.Text = u.BorrowerZip;
        this.edtAPP_PB_HOW_LONG_YEARS.Text = u["TimeAtResidenceYears"].ToString();
        this.edtAPP_PB_HOW_LONG_MONTHS.Text = u["TimeAtResidenceMonths"].ToString();
        try
        {
            this.edtAPP_PB_OWNERSHIP.SelectedValue = u["Ownership"].ToString();
        }
        catch { }

        //Co-Borrower
        edtCoBorrowerEmail.Text = u["CoEmail"].ToString();
        edtAPP_CB_FIRST_NAME.Text = u.CoFirstName;
        edtAPP_CB_LAST_NAME.Text = u.CoLastName;
        edtAPP_CB_MIDDLE_INITIALS.Text = u["CoBorrowerMiddleName"].ToString();
        edtAPP_CB_SOC_NO.Text = u["CoSocNum"].ToString();
        try
        {
            this.edtAPP_CB_MARITAL.SelectedValue = u["CoMartialStatus"].ToString();
        }
        catch { }
        this.edtAPP_CB_DOB.Text = u["CoDOB"].ToString();
        this.edtAPP_CB_YEARS_IN_SCOOL.Text = u["CoBoAssetYearsOfSchool"].ToString();
        this.edtAPP_CB_DEPENDANTS_NO.Text = u["CoBoDependentsNum"].ToString();
        this.edtAPP_CB_DEPENDANTS_AGE.Text = u["CoBoDependentsAges"].ToString();
        this.CoWorkPhone.Text = u.CoWorkPhone;
        this.CoPhone.Text = u.CoPhone;
        this.CoCellPhone.Text = u.CoCellPhone;
        this.edtAPP_CB_CURR_ADDRESS.Text = u.CoAddress;
        this.edtAPP_CB_CURR_CITY.Text = u.CoCity;
        try
        {
            this.edtAPP_CB_CURR_STATE.SelectedValue = u.CoState;
        }
        catch { }
        this.edtAPP_CB_CURR_ZIP.Text = u.CoZip;
        this.edtAPP_CB_HOW_LONG_YEARS.Text = u["CoTimeAtResidenceYears"].ToString();
        this.edtAPP_CB_HOW_LONG_MONTHS.Text = u["CoTimeAtResidenceMonths"].ToString();
        try
        {
            this.edtAPP_CB_OWNERSHIP.SelectedValue = u["CoOwnership"].ToString();
        }
        catch { }

        //Hidden but needed
        try
        {
            this.DropDownPreferredLanguage.Text = u["Preferred Language"].ToString();
        }
        catch { }
        #endregion

        #region Step4
        //Borrower
        edtAPP_PB_EMP_NAME.Text = u.txtCompany;
        edtAPP_PB_EMP_ADDRESS.Text = u["EmployerAddress"].ToString();
        edtAPP_PB_EMP_CITY.Text = u["EmployerCity"].ToString();
        try
        {
            edtAPP_PB_EMP_STATE.SelectedValue = u["EmployerState"].ToString();
        }
        catch { }
        edtAPP_PB_EMP_ZIP.Text = u["EmployerZip"].ToString();
        edtAPP_PB_EMP_PHONE.Text = u["EmployerPhone"].ToString();
        edtAPP_PB_EMP_TITLE.Text = u["EmployerTitle"].ToString();
        if (bool.TryParse(u["SelfEmployed"].ToString(), out b))
        {
            edtAPP_PB_EMP_SELF.Checked = b;
        }
        edtAPP_PB_EMP_YEARS.Text = u["YearsWithEmloyer"].ToString();
        edtAPP_PB_EMP_MONTHS.Text = u["MonthsWithEmloyer"].ToString();

        //CO-Borrower
        edtAPP_CB_EMP_NAME.Text = u["CoEmployerName"].ToString();
        edtAPP_CB_EMP_ADDRESS.Text = u["CoEmployerAddress"].ToString();
        edtAPP_CB_EMP_CITY.Text = u["CoEmployerCity"].ToString();
        try
        {
            edtAPP_CB_EMP_STATE.SelectedValue = u["CoEmployerState"].ToString();
        }
        catch { }
        edtAPP_CB_EMP_ZIP.Text = u["CoEmployerZip"].ToString();
        edtAPP_CB_EMP_PHONE.Text = u["CoEmployerPhone"].ToString();
        edtAPP_CB_EMP_TITLE.Text = u["CoEmployerTitle"].ToString();
        if (bool.TryParse(u["CoSelfEmployed"].ToString(), out b))
        {
            edtAPP_CB_EMP_SELF.Checked = b;
        }
        edtAPP_CB_EMP_YEARS.Text = u["CoYearsWithEmloyer"].ToString();
        edtAPP_CB_EMP_MONTHS.Text = u["CoMonthsWithEmloyer"].ToString();
        #endregion

        #region Step5
        //Borrower
        edtAPP_INC_BASE.Text = u["BaseEmploymentIncome"].ToString();
        edtAPP_INC_OVERTIME.Text = u["Overtime"].ToString();
        edtAPP_INC_BONUSES.Text = u["Bonuses"].ToString();
        edtAPP_INC_COMMISSIONS.Text = u["Commissions"].ToString();
        edtAPP_INC_DIVIDENTS.Text = u["Dividends"].ToString();
        edtAPP_INC_RENTAL_INC.Text = u["NetRentalIncome"].ToString();

        //CO-Borrower
        edtAPP_INC_BASE_CB.Text = u["CoBaseEmploymentIncome"].ToString();
        edtAPP_INC_OVERTIME_CB.Text = u["CoOvertime"].ToString();
        edtAPP_INC_BONUSES_CB.Text = u["CoBonuses"].ToString();
        edtAPP_INC_COMMISSIONS_CB.Text = u["CoCommissions"].ToString();
        edtAPP_INC_DIVIDENTS_CB.Text = u["CoDividends"].ToString();
        edtAPP_INC_RENTAL_INC_CB.Text = u["CoNetRentalIncome"].ToString();
        #endregion

        #region Step6
        CashDepositDescr1.Text = u["CashDepositDescr1"].ToString();
        CashDepositVal1.Text = u["CashDepositVal1"].ToString();
        CashDepositDescr2.Text = u["CashDepositDescr2"].ToString();
        CashDepositVal2.Text = u["CashDepositVal2"].ToString();
        StocksBondsCompNameAccount1.Text = u["StocksBondsCompNameAccount1"].ToString();
        StocksBondsVal1.Text = u["StocksBondsVal1"].ToString();
        StocksBondsCompNameAccount2.Text = u["StocksBondsCompNameAccount2"].ToString();
        StocksBondsVal2.Text = u["StocksBondsVal2"].ToString();
        StocksBondsCompNameAccount3.Text = u["StocksBondsCompNameAccount3"].ToString();
        StocksBondsVal3.Text = u["StocksBondsVal3"].ToString();
        LInsuranceFaceAmount.Text = u["LInsuranceFaceAmount"].ToString();
        LInsuranceMarketValue.Text = u["LInsuranceMarketValue"].ToString();
        VestedInterestInRF.Text = u["VestedInterestInRF"].ToString();
        NetWorthOfBusinessOwned.Text = u["NetWorthOfBusinessOwned"].ToString();
        AutoMakeAndYear1.Text = u["AutoMakeAndYear1"].ToString();
        AutoMakeAndYear2.Text = u["AutoMakeAndYear2"].ToString();
        AutoMakeAndYear3.Text = u["AutoMakeAndYear3"].ToString();
        AutoVal1.Text = u["AutoVal1"].ToString();
        AutoVal2.Text = u["AutoVal2"].ToString();
        AutoVal3.Text = u["AutoVal3"].ToString();
        AssetsOtherDescr1.Text = u["AssetsOtherDescr1"].ToString();
        AssetsOtherVal1.Text = u["AssetsOtherVal1"].ToString();
        AssetsOtherDescr2.Text = u["AssetsOtherDescr2"].ToString();
        AssetsOtherVal2.Text = u["AssetsOtherVal2"].ToString();
        AssetsOtherDescr3.Text = u["AssetsOtherDescr3"].ToString();
        AssetsOtherVal3.Text = u["AssetsOtherVal3"].ToString();
        AssetsOtherDescr4.Text = u["AssetsOtherDescr4"].ToString();
        AssetsOtherVal4.Text = u["AssetsOtherVal4"].ToString();
        AssetType1.Text = u["AssetType1"].ToString();
        AssetInstitution1.Text = u["AssetInstitution1"].ToString();
        AssetAccount1.Text = u["AssetAccount1"].ToString();
        AssetBalance1.Text = u["AssetBalance1"].ToString();
        AssetType2.Text = u["AssetType2"].ToString();
        AssetInstitution2.Text = u["AssetInstitution2"].ToString();
        AssetAccount2.Text = u["AssetAccount2"].ToString();
        AssetBalance2.Text = u["AssetBalance2"].ToString();
        AssetType3.Text = u["AssetType3"].ToString();
        AssetInstitution3.Text = u["AssetInstitution3"].ToString();
        AssetAccount3.Text = u["AssetAccount3"].ToString();
        AssetBalance3.Text = u["AssetBalance3"].ToString();
        AssetType4.Text = u["AssetType4"].ToString();
        AssetInstitution4.Text = u["AssetInstitution4"].ToString();
        AssetAccount4.Text = u["AssetAccount4"].ToString();
        AssetBalance4.Text = u["AssetBalance4"].ToString();
        #endregion

        #region Step7
        LiaCompanyName1.Text = u["LiaCompanyName1"].ToString();
        SetDropDownValue(LiaType1, u["LiaType1"].ToString());
        LiaBalance1.Text = u["LiaBalance1"].ToString();
        LiaPayment1.Text = u["LiaPayment1"].ToString();
        LiaMosLeft1.Text = u["LiaMosLeft1"].ToString();
        if (bool.TryParse(u["LiaPaidOff1"].ToString(), out b))
        {
            LiaPaidOff1.Checked = b;
        }
        LiaCompanyName2.Text = u["LiaCompanyName2"].ToString();
        SetDropDownValue(LiaType2, u["LiaType2"].ToString());
        LiaBalance2.Text = u["LiaBalance2"].ToString();
        LiaPayment2.Text = u["LiaPayment2"].ToString();
        LiaMosLeft2.Text = u["LiaMosLeft2"].ToString();
        if (bool.TryParse(u["LiaPaidOff2"].ToString(), out b))
        {
            LiaPaidOff2.Checked = b;
        }
        LiaCompanyName3.Text = u["LiaCompanyName3"].ToString();
        SetDropDownValue(LiaType3, u["LiaType3"].ToString());
        LiaBalance3.Text = u["LiaBalance3"].ToString();
        LiaPayment3.Text = u["LiaPayment3"].ToString();
        LiaMosLeft3.Text = u["LiaMosLeft3"].ToString();
        if (bool.TryParse(u["LiaPaidOff3"].ToString(), out b))
        {
            LiaPaidOff3.Checked = b;
        }
        LiaCompanyName4.Text = u["LiaCompanyName4"].ToString();
        SetDropDownValue(LiaType4, u["LiaType4"].ToString());
        LiaBalance4.Text = u["LiaBalance4"].ToString();
        LiaPayment4.Text = u["LiaPayment4"].ToString();
        LiaMosLeft4.Text = u["LiaMosLeft4"].ToString();
        if (bool.TryParse(u["LiaPaidOff4"].ToString(), out b))
        {
            LiaPaidOff4.Checked = b;
        }
        LiaCompanyName5.Text = u["LiaCompanyName5"].ToString();
        SetDropDownValue(LiaType5, u["LiaType5"].ToString());
        LiaBalance5.Text = u["LiaBalance5"].ToString();
        LiaPayment5.Text = u["LiaPayment5"].ToString();
        LiaMosLeft5.Text = u["LiaMosLeft5"].ToString();
        if (bool.TryParse(u["LiaPaidOff5"].ToString(), out b))
        {
            LiaPaidOff5.Checked = b;
        }
        LiaCompanyName6.Text = u["LiaCompanyName6"].ToString();
        SetDropDownValue(LiaType6, u["LiaType6"].ToString());
        LiaBalance6.Text = u["LiaBalance6"].ToString();
        LiaPayment6.Text = u["LiaPayment6"].ToString();
        LiaMosLeft6.Text = u["LiaMosLeft6"].ToString();
        if (bool.TryParse(u["LiaPaidOff6"].ToString(), out b))
        {
            LiaPaidOff6.Checked = b;
        }
        LiaCompanyName7.Text = u["LiaCompanyName7"].ToString();
        SetDropDownValue(LiaType7, u["LiaType7"].ToString());
        LiaBalance7.Text = u["LiaBalance7"].ToString();
        LiaPayment7.Text = u["LiaPayment7"].ToString();
        LiaMosLeft7.Text = u["LiaMosLeft7"].ToString();
        if (bool.TryParse(u["LiaPaidOff7"].ToString(), out b))
        {
            LiaPaidOff7.Checked = b;
        }
        #endregion

        #region Step8
        MHERent.Text = u["MHERent"].ToString();
        MHE1stMrtgP.Text = u["MHE1stMrtgP"].ToString();
        MHEOthrMrtgP.Text = u["MHEOthrMrtgP"].ToString();
        MHEHazIns.Text = u["MHEHazIns"].ToString();
        MHERETaxes.Text = u["MHERETaxes"].ToString();
        MHEMtgIns.Text = u["MHEMtgIns"].ToString();
        MHEHOADues.Text = u["MHEHOADues"].ToString();
        MHEOther.Text = u["MHEOther"].ToString();
        #endregion

        #region Step9
        edtAPP_REAL_ADDRESS.Text = u["REAL_ADDRESS1"].ToString();
        edtAPP_REAL_PROPERTY_CITY.Text = u["REAL_PROPERTY_CITY1"].ToString();
        try
        {
            edtAPP_REAL_PROPERTY_STATE.SelectedValue = u["REAL_PROPERTY_STATE1"].ToString();
        }
        catch { }
        edtAPP_REAL_PROPERTY_ZIP.Text = u["REAL_PROPERTY_ZIP1"].ToString();
        try
        {
            edtAPP_REAL_STATUS.SelectedValue = u["REAL_STATUS1"].ToString();
        }
        catch { }
        try
        {
            edtAPP_REAL_PROPERTY_TYPE.SelectedValue = u["REAL_TYPE1"].ToString();
        }
        catch { }
        edtAPP_REAL_MARKET_VALUE.Text = u["REAL_MARKET_VALUE1"].ToString();
        edtAPP_REAL_MORTGAGE.Text = u["REAL_MORTGAGE1"].ToString();
        edtAPP_REAL_MORT_PAY.Text = u["REAL_MORT_PAY1"].ToString();
        edtAPP_REAL_MONTH_PAY.Text = u["REAL_MONTH_PAY1"].ToString();
        edtAPP_REAL_ADDRESS2.Text = u["REAL_ADDRESS2"].ToString();
        edtAPP_REAL_PROPERTY_CITY2.Text = u["REAL_PROPERTY_CITY2"].ToString();
        try
        {
            edtAPP_REAL_PROPERTY_STATE2.SelectedValue = u["REAL_PROPERTY_STATE2"].ToString();
        }
        catch { }
        edtAPP_REAL_PROPERTY_ZIP2.Text = u["REAL_PROPERTY_ZIP2"].ToString();
        try
        {
            edtAPP_REAL_STATUS2.SelectedValue = u["REAL_STATUS2"].ToString();
        }
        catch { }
        try
        {
            edtAPP_REAL_PROPERTY_TYPE2.SelectedValue = u["REAL_TYPE2"].ToString();
        }
        catch { }
        edtAPP_REAL_MARKET_VALUE2.Text = u["REAL_MARKET_VALUE2"].ToString();
        edtAPP_REAL_MORTGAGE2.Text = u["REAL_MORTGAGE2"].ToString();
        edtAPP_REAL_MORT_PAY2.Text = u["REAL_MORT_PAY2"].ToString();
        edtAPP_REAL_MONTH_PAY2.Text = u["REAL_MONTH_PAY2"].ToString();
        edtAPP_REAL_ADDRESS3.Text = u["REAL_ADDRESS3"].ToString();
        edtAPP_REAL_PROPERTY_CITY3.Text = u["REAL_PROPERTY_CITY3"].ToString();
        try
        {
            edtAPP_REAL_PROPERTY_STATE3.SelectedValue = u["REAL_PROPERTY_STATE3"].ToString();
        }
        catch { }
        edtAPP_REAL_PROPERTY_ZIP3.Text = u["REAL_PROPERTY_ZIP3"].ToString();
        try
        {
            edtAPP_REAL_STATUS3.SelectedValue = u["REAL_STATUS3"].ToString();
        }
        catch { }
        try
        {
            edtAPP_REAL_PROPERTY_TYPE3.SelectedValue = u["REAL_TYPE3"].ToString();
        }
        catch { }
        edtAPP_REAL_MARKET_VALUE3.Text = u["REAL_MARKET_VALUE3"].ToString();
        edtAPP_REAL_MORTGAGE3.Text = u["REAL_MORTGAGE3"].ToString();
        edtAPP_REAL_MORT_PAY3.Text = u["REAL_MORT_PAY3"].ToString();
        edtAPP_REAL_MONTH_PAY3.Text = u["REAL_MONTH_PAY3"].ToString();
        #endregion

        #region Step10
        //Borrower
        if (bool.TryParse(u["DeclarationA"].ToString(), out b))
        {
            this.edtAPP_Q_A.SelectedValue = u["DeclarationA"].ToString();
        }
        if (bool.TryParse(u["DeclarationB"].ToString(), out b))
        {
            this.edtAPP_Q_B.SelectedValue = u["DeclarationB"].ToString();
        }
        if (bool.TryParse(u["DeclarationC"].ToString(), out b))
        {
            this.edtAPP_Q_C.SelectedValue = u["DeclarationC"].ToString();
        }
        if (bool.TryParse(u["DeclarationD"].ToString(), out b))
        {
            this.edtAPP_Q_D.SelectedValue = u["DeclarationD"].ToString();
        }
        if (bool.TryParse(u["DeclarationE"].ToString(), out b))
        {
            this.edtAPP_Q_E.SelectedValue = u["DeclarationE"].ToString();
        }
        if (bool.TryParse(u["DeclarationF"].ToString(), out b))
        {
            this.edtAPP_Q_F.SelectedValue = u["DeclarationF"].ToString();
        }
        if (bool.TryParse(u["DeclarationG"].ToString(), out b))
        {
            this.edtAPP_Q_G.SelectedValue = u["DeclarationG"].ToString();
        }
        if (bool.TryParse(u["DeclarationH"].ToString(), out b))
        {
            this.edtAPP_Q_H.SelectedValue = u["DeclarationH"].ToString();
        }
        if (bool.TryParse(u["DeclarationI"].ToString(), out b))
        {
            this.edtAPP_Q_I.SelectedValue = u["DeclarationI"].ToString();
        }
        if (bool.TryParse(u["DeclarationJ"].ToString(), out b))
        {
            this.edtAPP_Q_J.SelectedValue = u["DeclarationJ"].ToString();
        }
        if (bool.TryParse(u["DeclarationK"].ToString(), out b))
        {
            this.edtAPP_Q_K.SelectedValue = u["DeclarationK"].ToString();
        }
        if (bool.TryParse(u["DeclarationL"].ToString(), out b))
        {
            this.edtAPP_Q_L.SelectedValue = u["DeclarationL"].ToString();
        }
        if (bool.TryParse(u["DeclarationM"].ToString(), out b))
        {
            this.edtAPP_Q_M.SelectedValue = u["DeclarationM"].ToString();
        }
        try
        {
            this.edtAPP_Q_1.SelectedValue = u["Declaration1"].ToString();
        }
        catch { }
        try
        {
            this.edtAPP_Q_2.SelectedValue = u["Declaration2"].ToString();
        }
        catch { }

        //CO-Borrower
        if (bool.TryParse(u["CoDeclarationA"].ToString(), out b))
        {
            this.edtCoDeclarationA.SelectedValue = u["CoDeclarationA"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationB"].ToString(), out b))
        {
            this.edtCoDeclarationB.SelectedValue = u["CoDeclarationB"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationC"].ToString(), out b))
        {
            this.edtCoDeclarationC.SelectedValue = u["CoDeclarationC"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationD"].ToString(), out b))
        {
            this.edtCoDeclarationD.SelectedValue = u["CoDeclarationD"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationE"].ToString(), out b))
        {
            this.edtCoDeclarationE.SelectedValue = u["CoDeclarationE"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationF"].ToString(), out b))
        {
            this.edtCoDeclarationF.SelectedValue = u["CoDeclarationF"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationG"].ToString(), out b))
        {
            this.edtCoDeclarationG.SelectedValue = u["CoDeclarationG"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationH"].ToString(), out b))
        {
            this.edtCoDeclarationH.SelectedValue = u["CoDeclarationH"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationI"].ToString(), out b))
        {
            this.edtCoDeclarationI.SelectedValue = u["CoDeclarationI"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationJ"].ToString(), out b))
        {
            this.edtCoDeclarationJ.SelectedValue = u["CoDeclarationJ"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationK"].ToString(), out b))
        {
            this.edtCoDeclarationK.SelectedValue = u["CoDeclarationK"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationL"].ToString(), out b))
        {
            this.edtCoDeclarationL.SelectedValue = u["CoDeclarationL"].ToString();
        }
        if (bool.TryParse(u["CoDeclarationM"].ToString(), out b))
        {
            this.edtCoDeclarationM.SelectedValue = u["CoDeclarationM"].ToString();
        }
        try
        {
            this.edtCoDeclaration1.SelectedValue = u["CoDeclaration1"].ToString();
        }
        catch { }
        try
        {
            this.edtCoDeclaration2.SelectedValue = u["CoDeclaration2"].ToString();
        }
        catch { };
        #endregion

        #region Step11
        //Borrower
        try
        {
            this.edtEthnicity.SelectedValue = u["Ethnicity"].ToString();
        }
        catch { }
        try
        {
            this.edtRace.SelectedValue = u["Race"].ToString();
        }
        catch { }
        try
        {
            this.edtSex.SelectedValue = u["Sex"].ToString();
        }
        catch { }

        //CO-Borrower
        try
        {
            this.edtCoEthnicity.SelectedValue = u["CoEthnicity"].ToString();
        }
        catch { }
        try
        {
            this.edtCoRace.SelectedValue = u["CoRace"].ToString();
        }
        catch { }
        try
        {
            this.edtCoSex.SelectedValue = u["CoSex"].ToString();
        }
        catch { }

        //authorization
        if (chkCreditCheckAuthorization != null && bool.TryParse(u["CreditCheckAuthorization"].ToString(), out b))
        {
            chkCreditCheckAuthorization.Checked = b;
        }
        #endregion

        return true;
    }

    //Function To Save All Values
    protected bool SaveData(Guid userid)
    {
        string err;
        bool isDupLeadSource;
        string Consultant_ID = "";
        Guid c_id = Guid.Empty;
        dataBorrowerCo dataForm = new dataBorrowerCo();

        #region Initialize User
        AdminClients.BusinessLogicLayer.User u;
        if (userid.Equals(Guid.Empty))
        {
            u = new AdminClients.BusinessLogicLayer.User();
        }
        else
        {
            u = new AdminClients.DataAccess.SQLDataAccess().GetUser(userid);
        }
        #endregion

        //Delete values with $ and ,
        deleteExtraValues();

        #region Consultant
        //Set consultant user
        Consultant_ID = getConsultant_ID();

        //Set guid for consultant_id
        try
        {
            c_id = new Guid(Consultant_ID);
        }
        catch { }
        #endregion

        #region Step1
        u.SITE_ID = NewClientSites.UIF.Get_SITE_ID();
        u.LeadSource = AdminClients.DataAccess.LeadSource.Website_FullApp;
        u.txtEmail = txtEmail.Text;
        u.txtPwd = txtPwd.Text;
        u["AGENT_ID"] = c_id;
        #endregion

        #region Step2
        //Loan Purpose evaluation
        u["Loan Type"] = this.edtAPP_LOAN_PURPOSE.SelectedValue;
        u["LoanPurposeOther"] = this.LoanPurposeOther.Text.Trim();
        u["LoanPurposeRefiType"] = this.edtAPP_REF_LOAN_PURPOSE.SelectedValue;

        SalesPriceOrHomevalue2DB(u);
        string s = this.edtLOAN_AMOUNT.Text.Trim();
        decimal amt;
        if (decimal.TryParse(s, System.Globalization.NumberStyles.AllowDecimalPoint | System.Globalization.NumberStyles.AllowCurrencySymbol | System.Globalization.NumberStyles.AllowThousands, null, out amt))
        {
            u.LoanAmount = amt;
        }
        u["SalesDetailsFoundAHome"] = this.edtPROPERTY_NOT_FOUND.Checked ? "not found" : "";
        u.txtPropertyAdress = this.edtAPP_PROPERTY_ADDRESS.Text.Trim();
        u.txtCity = this.edtAPP_PROPERTY_CURR_CITY.Text.Trim();
        u.txtState = this.edtAPP_PROPERTY_STATE.SelectedValue;
        u.intZip = this.edtAPP_PROPERTY_ZIP.Text.Trim();
        u["Property County"] = this.edtAPP_PROPERTY_COUNTY.Text.Trim();
        u["Num Of Units"] = this.edtAPP_UNITS_NUM.Text.Trim();
        u["pWillBeIsPrimary"] = this.propertyWillBeIsPrimary.Checked;
        u["pWillBeIsSecondary"] = this.propertyWillBeIsSecondary.Checked;
        u["pWillBeIsInvestment"] = this.propertyWillBeIsInvestment.Checked;

        //Loan Type evaluations
        u.LoanType = this.DropDownLoanType.SelectedValue;
        u["LoanTypeOther"] = this.LoanTypeOther.Text.Trim();
        #endregion

        #region Step3
        //Borrower
        u.txtFirstName = this.edtAPP_PB_FIRST_NAME.Text.Trim();
        u.txtLastName = this.edtAPP_PB_LAST_NAME.Text.Trim();
        u.txtMiddleName = this.edtAPP_PB_MIDDLE_INITIALS.Text.Trim();
        u["SocNum"] = this.edtAPP_PB_SOC_NO.Text.Trim();
        u["MartialStatus"] = this.edtAPP_PB_MARITAL.SelectedValue;
        u["DOB"] = this.edtAPP_PB_DOB.Text.Trim();
        u["AssetYearsOfSchool"] = this.edtAPP_PB_YEARS_IN_SCOOL.Text.Trim();
        u["DependentsNum"] = this.edtAPP_PB_DEPENDANTS_NO.Text.Trim();
        u["DependentsAges"] = this.edtAPP_PB_DEPENDANTS_AGE.Text.Trim();
        u.WorkPhone = this.WorkPhone.Text.Trim();
        u.txtPhone = this.txtPhone.Text.Trim();
        u.txtCellPhone = this.txtCellPhone.Text.Trim();
        u.BorrowerAddress = this.edtAPP_PB_CURR_ADDRESS.Text.Trim();
        u.BorrowerCity = this.edtAPP_PB_CURR_CITY.Text.Trim();
        u.BorrowerState = this.edtAPP_PB_CURR_STATE.SelectedValue;
        u.BorrowerZip = this.edtAPP_PB_CURR_ZIP.Text.Trim();
        u["TimeAtResidenceYears"] = this.edtAPP_PB_HOW_LONG_YEARS.Text.Trim();
        u["TimeAtResidenceMonths"] = this.edtAPP_PB_HOW_LONG_MONTHS.Text.Trim();
        u["Ownership"] = this.edtAPP_PB_OWNERSHIP.SelectedValue;

        //CO-Borrower
        u.CoFirstName = this.edtAPP_CB_FIRST_NAME.Text.Trim();
        u.CoLastName = this.edtAPP_CB_LAST_NAME.Text.Trim();
        u["CoBorrowerMiddleName"] = this.edtAPP_CB_MIDDLE_INITIALS.Text.Trim();
        u["CoSocNum"] = this.edtAPP_CB_SOC_NO.Text.Trim();
        u["CoMartialStatus"] = this.edtAPP_CB_MARITAL.SelectedValue;
        u["CoDOB"] = this.edtAPP_CB_DOB.Text.Trim();
        u["CoBoAssetYearsOfSchool"] = this.edtAPP_CB_YEARS_IN_SCOOL.Text.Trim();
        u["CoBoDependentsNum"] = this.edtAPP_CB_DEPENDANTS_NO.Text.Trim();
        u["CoBoDependentsAges"] = this.edtAPP_CB_DEPENDANTS_AGE.Text.Trim();
        u.CoWorkPhone = this.CoWorkPhone.Text.Trim();
        u.CoPhone = this.CoPhone.Text.Trim();
        u.CoCellPhone = this.CoCellPhone.Text.Trim();
        u.CoAddress = this.edtAPP_CB_CURR_ADDRESS.Text.Trim();
        u.CoCity = this.edtAPP_CB_CURR_CITY.Text.Trim();
        u.CoState = this.edtAPP_CB_CURR_STATE.SelectedValue;
        u["CoEmail"] = edtCoBorrowerEmail.Text;
        u.CoZip = this.edtAPP_CB_CURR_ZIP.Text.Trim();
        u["CoTimeAtResidenceYears"] = this.edtAPP_CB_HOW_LONG_YEARS.Text.Trim();
        u["CoTimeAtResidenceMonths"] = this.edtAPP_CB_HOW_LONG_MONTHS.Text.Trim();
        u["CoOwnership"] = this.edtAPP_CB_OWNERSHIP.SelectedValue;

        //Hidden
        u["Preferred Language"] = this.DropDownPreferredLanguage.SelectedValue;
        #endregion

        #region Step4
        //Borrower
        u.txtCompany = this.edtAPP_PB_EMP_NAME.Text.Trim();
        u["EmployerAddress"] = this.edtAPP_PB_EMP_ADDRESS.Text.Trim();
        u["EmployerCity"] = this.edtAPP_PB_EMP_CITY.Text.Trim();
        u["EmployerState"] = this.edtAPP_PB_EMP_STATE.SelectedValue;
        u["EmployerZip"] = this.edtAPP_PB_EMP_ZIP.Text.Trim();
        u["EmployerPhone"] = this.edtAPP_PB_EMP_PHONE.Text.Trim();
        u["EmployerTitle"] = this.edtAPP_PB_EMP_TITLE.Text.Trim();
        u["SelfEmployed"] = this.edtAPP_PB_EMP_SELF.Checked;
        u["YearsWithEmloyer"] = this.edtAPP_PB_EMP_YEARS.Text.Trim();
        u["MonthsWithEmloyer"] = this.edtAPP_PB_EMP_MONTHS.Text.Trim();

        //CO-Borrower
        u["CoEmployerName"] = this.edtAPP_CB_EMP_NAME.Text.Trim();
        u["CoEmployerAddress"] = this.edtAPP_CB_EMP_ADDRESS.Text.Trim();
        u["CoEmployerCity"] = this.edtAPP_CB_EMP_CITY.Text.Trim();
        u["CoEmployerState"] = this.edtAPP_CB_EMP_STATE.SelectedValue;
        u["CoEmployerZip"] = this.edtAPP_CB_EMP_ZIP.Text.Trim();
        u["CoEmployerPhone"] = this.edtAPP_CB_EMP_PHONE.Text.Trim();
        u["CoEmployerTitle"] = this.edtAPP_CB_EMP_TITLE.Text.Trim();
        u["CoSelfEmployed"] = this.edtAPP_CB_EMP_SELF.Checked;
        u["CoYearsWithEmloyer"] = this.edtAPP_CB_EMP_YEARS.Text.Trim();
        u["CoMonthsWithEmloyer"] = this.edtAPP_CB_EMP_MONTHS.Text.Trim();
        #endregion

        #region Step5
        //Borrower
        u["BaseEmploymentIncome"] = this.edtAPP_INC_BASE.Text.Trim();
        u["Overtime"] = this.edtAPP_INC_OVERTIME.Text.Trim();
        u["Bonuses"] = this.edtAPP_INC_BONUSES.Text.Trim();
        u["Commissions"] = this.edtAPP_INC_COMMISSIONS.Text.Trim();
        u["Dividends"] = this.edtAPP_INC_DIVIDENTS.Text.Trim();
        u["NetRentalIncome"] = this.edtAPP_INC_RENTAL_INC.Text.Trim();

        //CO-Borrower
        u["CoBaseEmploymentIncome"] = this.edtAPP_INC_BASE_CB.Text.Trim();
        u["CoOvertime"] = this.edtAPP_INC_OVERTIME_CB.Text.Trim();
        u["CoBonuses"] = this.edtAPP_INC_BONUSES_CB.Text.Trim();
        u["CoCommissions"] = this.edtAPP_INC_COMMISSIONS_CB.Text.Trim();
        u["CoDividends"] = this.edtAPP_INC_DIVIDENTS_CB.Text.Trim();
        u["CoNetRentalIncome"] = this.edtAPP_INC_RENTAL_INC_CB.Text.Trim();
        #endregion

        #region Step6
        u["CashDepositDescr1"] = CashDepositDescr1.Text.Trim();
        u["CashDepositVal1"] = CashDepositVal1.Text.Trim();
        u["CashDepositDescr2"] = CashDepositDescr2.Text.Trim();
        u["CashDepositVal2"] = CashDepositVal2.Text.Trim();
        u["StocksBondsCompNameAccount1"] = StocksBondsCompNameAccount1.Text.Trim();
        u["StocksBondsVal1"] = StocksBondsVal1.Text.Trim();
        u["StocksBondsCompNameAccount2"] = StocksBondsCompNameAccount2.Text.Trim();
        u["StocksBondsVal2"] = StocksBondsVal2.Text.Trim();
        u["StocksBondsCompNameAccount3"] = StocksBondsCompNameAccount3.Text.Trim();
        u["StocksBondsVal3"] = StocksBondsVal3.Text.Trim();
        u["LInsuranceFaceAmount"] = LInsuranceFaceAmount.Text.Trim();
        u["LInsuranceMarketValue"] = LInsuranceMarketValue.Text.Trim();
        u["VestedInterestInRF"] = VestedInterestInRF.Text.Trim();
        u["NetWorthOfBusinessOwned"] = NetWorthOfBusinessOwned.Text.Trim();
        u["AutoMakeAndYear1"] = AutoMakeAndYear1.Text.Trim();
        u["AutoMakeAndYear2"] = AutoMakeAndYear2.Text.Trim();
        u["AutoMakeAndYear3"] = AutoMakeAndYear3.Text.Trim();
        u["AutoVal1"] = AutoVal1.Text.Trim();
        u["AutoVal2"] = AutoVal2.Text.Trim();
        u["AutoVal3"] = AutoVal3.Text.Trim();
        u["AssetsOtherDescr1"] = AssetsOtherDescr1.Text.Trim();
        u["AssetsOtherVal1"] = AssetsOtherVal1.Text.Trim();
        u["AssetsOtherDescr2"] = AssetsOtherDescr2.Text.Trim();
        u["AssetsOtherVal2"] = AssetsOtherVal2.Text.Trim();
        u["AssetsOtherDescr3"] = AssetsOtherDescr3.Text.Trim();
        u["AssetsOtherVal3"] = AssetsOtherVal3.Text.Trim();
        u["AssetsOtherDescr4"] = AssetsOtherDescr4.Text.Trim();
        u["AssetsOtherVal4"] = AssetsOtherVal4.Text.Trim();
        u["AssetType1"] = AssetType1.Text.Trim();
        u["AssetInstitution1"] = AssetInstitution1.Text.Trim();
        u["AssetAccount1"] = AssetAccount1.Text.Trim();
        u["AssetBalance1"] = AssetBalance1.Text.Trim();
        u["AssetType2"] = AssetType2.Text.Trim();
        u["AssetInstitution2"] = AssetInstitution2.Text.Trim();
        u["AssetAccount2"] = AssetAccount2.Text.Trim();
        u["AssetBalance2"] = AssetBalance2.Text.Trim();
        u["AssetType3"] = AssetType3.Text.Trim();
        u["AssetInstitution3"] = AssetInstitution3.Text.Trim();
        u["AssetAccount3"] = AssetAccount3.Text.Trim();
        u["AssetBalance3"] = AssetBalance3.Text.Trim();
        u["AssetType4"] = AssetType4.Text.Trim();
        u["AssetInstitution4"] = AssetInstitution4.Text.Trim();
        u["AssetAccount4"] = AssetAccount4.Text.Trim();
        u["AssetBalance4"] = AssetBalance4.Text.Trim();
        #endregion

        #region Step7
        u["MHERent"] = MHERent.Text.Trim();
        u["MHE1stMrtgP"] = MHE1stMrtgP.Text.Trim();
        u["MHEOthrMrtgP"] = MHEOthrMrtgP.Text.Trim();
        u["MHEHazIns"] = MHEHazIns.Text.Trim();
        u["MHERETaxes"] = MHERETaxes.Text.Trim();
        u["MHEMtgIns"] = MHEMtgIns.Text.Trim();
        u["MHEHOADues"] = MHEHOADues.Text.Trim();
        u["MHEOther"] = MHEOther.Text.Trim();
        #endregion

        #region Step8
        u["LiaCompanyName1"] = LiaCompanyName1.Text.Trim();
        u["LiaType1"] = LiaType1.SelectedValue;
        u["LiaBalance1"] = LiaBalance1.Text.Trim();
        u["LiaPayment1"] = LiaPayment1.Text.Trim();
        u["LiaMosLeft1"] = LiaMosLeft1.Text.Trim();
        u["LiaPaidOff1"] = LiaPaidOff1.Checked;
        u["LiaCompanyName2"] = LiaCompanyName2.Text.Trim();
        u["LiaType2"] = LiaType2.SelectedValue;
        u["LiaBalance2"] = LiaBalance2.Text.Trim();
        u["LiaPayment2"] = LiaPayment2.Text.Trim();
        u["LiaMosLeft2"] = LiaMosLeft2.Text.Trim();
        u["LiaPaidOff2"] = LiaPaidOff2.Checked;
        u["LiaCompanyName3"] = LiaCompanyName3.Text.Trim();
        u["LiaType3"] = LiaType3.SelectedValue;
        u["LiaBalance3"] = LiaBalance3.Text.Trim();
        u["LiaPayment3"] = LiaPayment3.Text.Trim();
        u["LiaMosLeft3"] = LiaMosLeft3.Text.Trim();
        u["LiaPaidOff3"] = LiaPaidOff3.Checked;
        u["LiaCompanyName4"] = LiaCompanyName4.Text.Trim();
        u["LiaType4"] = LiaType4.SelectedValue;
        u["LiaBalance4"] = LiaBalance4.Text.Trim();
        u["LiaPayment4"] = LiaPayment4.Text.Trim();
        u["LiaMosLeft4"] = LiaMosLeft4.Text.Trim();
        u["LiaPaidOff4"] = LiaPaidOff4.Checked;
        u["LiaCompanyName5"] = LiaCompanyName5.Text.Trim();
        u["LiaType5"] = LiaType5.SelectedValue;
        u["LiaBalance5"] = LiaBalance5.Text.Trim();
        u["LiaPayment5"] = LiaPayment5.Text.Trim();
        u["LiaMosLeft5"] = LiaMosLeft5.Text.Trim();
        u["LiaPaidOff5"] = LiaPaidOff5.Checked;
        u["LiaCompanyName6"] = LiaCompanyName6.Text.Trim();
        u["LiaType6"] = LiaType6.SelectedValue;
        u["LiaBalance6"] = LiaBalance6.Text.Trim();
        u["LiaPayment6"] = LiaPayment6.Text.Trim();
        u["LiaMosLeft6"] = LiaMosLeft6.Text.Trim();
        u["LiaPaidOff6"] = LiaPaidOff6.Checked;
        u["LiaCompanyName7"] = LiaCompanyName7.Text.Trim();
        u["LiaType7"] = LiaType7.SelectedValue;
        u["LiaBalance7"] = LiaBalance7.Text.Trim();
        u["LiaPayment7"] = LiaPayment7.Text.Trim();
        u["LiaMosLeft7"] = LiaMosLeft7.Text.Trim();
        u["LiaPaidOff7"] = LiaPaidOff7.Checked;
        #endregion

        #region Step9
        //Verify if any all the values from property 1 in Step 9 (Real Estate) is not empty
        if (!String.IsNullOrEmpty(edtAPP_REAL_ADDRESS.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY.Text) || edtAPP_REAL_PROPERTY_STATE.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_ZIP.Text) || edtAPP_REAL_STATUS.SelectedIndex > 0 || edtAPP_REAL_PROPERTY_TYPE.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_MORTGAGE.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MORT_PAY.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MONTH_PAY.Text))
        {
            u["REAL_ADDRESS1"] = edtAPP_REAL_ADDRESS.Text.Trim();
            u["REAL_PROPERTY_CITY1"] = edtAPP_REAL_PROPERTY_CITY.Text.Trim();
            u["REAL_PROPERTY_STATE1"] = edtAPP_REAL_PROPERTY_STATE.SelectedValue;
            u["REAL_PROPERTY_ZIP1"] = edtAPP_REAL_PROPERTY_ZIP.Text.Trim();
            u["REAL_STATUS1"] = edtAPP_REAL_STATUS.SelectedValue;
            u["REAL_TYPE1"] = edtAPP_REAL_PROPERTY_TYPE.SelectedValue;
            u["REAL_MARKET_VALUE1"] = edtAPP_REAL_MARKET_VALUE.Text.Trim();
            u["REAL_MORTGAGE1"] = edtAPP_REAL_MORTGAGE.Text.Trim();
            u["REAL_MORT_PAY1"] = edtAPP_REAL_MORT_PAY.Text.Trim();
            u["REAL_MONTH_PAY1"] = edtAPP_REAL_MONTH_PAY.Text.Trim();
        }

        //Verify if any all the values from property 2 in Step 9 (Real Estate) is not empty
        if (!String.IsNullOrEmpty(edtAPP_REAL_ADDRESS2.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY2.Text) || edtAPP_REAL_PROPERTY_STATE2.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_ZIP2.Text) || edtAPP_REAL_STATUS2.SelectedIndex > 0 || edtAPP_REAL_PROPERTY_TYPE2.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_MORTGAGE2.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY2.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MORT_PAY2.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MONTH_PAY2.Text))
        {
            u["REAL_ADDRESS2"] = edtAPP_REAL_ADDRESS2.Text.Trim();
            u["REAL_PROPERTY_CITY2"] = edtAPP_REAL_PROPERTY_CITY2.Text.Trim();
            u["REAL_PROPERTY_STATE2"] = edtAPP_REAL_PROPERTY_STATE2.SelectedValue;
            u["REAL_PROPERTY_ZIP2"] = edtAPP_REAL_PROPERTY_ZIP2.Text.Trim();
            u["REAL_STATUS2"] = edtAPP_REAL_STATUS2.SelectedValue;
            u["REAL_TYPE2"] = edtAPP_REAL_PROPERTY_TYPE2.SelectedValue;
            u["REAL_MARKET_VALUE2"] = edtAPP_REAL_MARKET_VALUE2.Text.Trim();
            u["REAL_MORTGAGE2"] = edtAPP_REAL_MORTGAGE2.Text.Trim();
            u["REAL_MORT_PAY2"] = edtAPP_REAL_MORT_PAY2.Text.Trim();
            u["REAL_MONTH_PAY2"] = edtAPP_REAL_MONTH_PAY2.Text.Trim();
        }

        //Verify if any all the values from property 3 in Step 9 (Real Estate) is not empty
        if (!String.IsNullOrEmpty(edtAPP_REAL_ADDRESS3.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY3.Text) || edtAPP_REAL_PROPERTY_STATE.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_ZIP3.Text) || edtAPP_REAL_STATUS3.SelectedIndex > 0 || edtAPP_REAL_PROPERTY_TYPE3.SelectedIndex > 0 || !String.IsNullOrEmpty(edtAPP_REAL_MORTGAGE3.Text) || !String.IsNullOrEmpty(edtAPP_REAL_PROPERTY_CITY3.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MORT_PAY3.Text) || !String.IsNullOrEmpty(edtAPP_REAL_MONTH_PAY3.Text))
        {
            u["REAL_ADDRESS3"] = edtAPP_REAL_ADDRESS3.Text.Trim();
            u["REAL_PROPERTY_CITY3"] = edtAPP_REAL_PROPERTY_CITY3.Text.Trim();
            u["REAL_PROPERTY_STATE3"] = edtAPP_REAL_PROPERTY_STATE3.SelectedValue;
            u["REAL_PROPERTY_ZIP3"] = edtAPP_REAL_PROPERTY_ZIP3.Text.Trim();
            u["REAL_STATUS3"] = edtAPP_REAL_STATUS3.SelectedValue;
            u["REAL_TYPE3"] = edtAPP_REAL_PROPERTY_TYPE3.SelectedValue;
            u["REAL_MARKET_VALUE3"] = edtAPP_REAL_MARKET_VALUE3.Text.Trim();
            u["REAL_MORTGAGE3"] = edtAPP_REAL_MORTGAGE3.Text.Trim();
            u["REAL_MORT_PAY3"] = edtAPP_REAL_MORT_PAY3.Text.Trim();
            u["REAL_MONTH_PAY3"] = edtAPP_REAL_MONTH_PAY3.Text.Trim();
        }
        #endregion

        #region step10
        //Borrower
        u["DeclarationA"] = this.edtAPP_Q_A.Text.Trim();
        u["DeclarationB"] = this.edtAPP_Q_B.Text.Trim();
        u["DeclarationC"] = this.edtAPP_Q_C.Text.Trim();
        u["DeclarationD"] = this.edtAPP_Q_D.Text.Trim();
        u["DeclarationE"] = this.edtAPP_Q_E.Text.Trim();
        u["DeclarationF"] = this.edtAPP_Q_F.Text.Trim();
        u["DeclarationG"] = this.edtAPP_Q_G.Text.Trim();
        u["DeclarationH"] = this.edtAPP_Q_H.Text.Trim();
        u["DeclarationI"] = this.edtAPP_Q_I.Text.Trim();
        u["DeclarationJ"] = this.edtAPP_Q_J.Text.Trim();
        u["DeclarationK"] = this.edtAPP_Q_K.Text.Trim();
        u["DeclarationL"] = this.edtAPP_Q_L.Text.Trim();
        u["DeclarationM"] = this.edtAPP_Q_M.Text.Trim();
        u["Declaration1"] = this.edtAPP_Q_1.SelectedValue;
        u["Declaration2"] = this.edtAPP_Q_2.SelectedValue;

        //Co-Borrewer
        u["CoDeclarationA"] = this.edtCoDeclarationA.Text.Trim();
        u["CoDeclarationB"] = this.edtCoDeclarationB.Text.Trim();
        u["CoDeclarationC"] = this.edtCoDeclarationC.Text.Trim();
        u["CoDeclarationD"] = this.edtCoDeclarationD.Text.Trim();
        u["CoDeclarationE"] = this.edtCoDeclarationE.Text.Trim();
        u["CoDeclarationF"] = this.edtCoDeclarationF.Text.Trim();
        u["CoDeclarationG"] = this.edtCoDeclarationG.Text.Trim();
        u["CoDeclarationH"] = this.edtCoDeclarationH.Text.Trim();
        u["CoDeclarationI"] = this.edtCoDeclarationI.Text.Trim();
        u["CoDeclarationJ"] = this.edtCoDeclarationJ.Text.Trim();
        u["CoDeclarationK"] = this.edtCoDeclarationK.Text.Trim();
        u["CoDeclarationL"] = this.edtCoDeclarationL.Text.Trim();
        u["CoDeclarationM"] = this.edtCoDeclarationM.Text.Trim();
        u["CoDeclaration1"] = this.edtCoDeclaration1.SelectedValue;
        u["CoDeclaration2"] = this.edtCoDeclaration2.SelectedValue;
        #endregion

        #region step11
        //Borrower
        u["Ethnicity"] = this.edtEthnicity.SelectedValue;
        u["Race"] = this.edtRace.SelectedValue;
        u["Sex"] = this.edtSex.SelectedValue;

        //CO-Borrower
        u["CoEthnicity"] = this.edtCoEthnicity.SelectedValue;
        u["CoRace"] = this.edtCoRace.SelectedValue;
        u["CoSex"] = this.edtCoSex.SelectedValue;

        //Authorization
        if (chkCreditCheckAuthorization != null)
        {
            u["CreditCheckAuthorization"] = chkCreditCheckAuthorization.Checked;
        }
        #endregion

        #region Current Step
        int activeIndex;
        activeIndex = MultiView1.ActiveViewIndex;
        u["Notes"] = activeIndex;
        #endregion

        #region Set Values Autoresponder
        //Borrower
        dataForm.BorrowerFirstName = edtAPP_PB_FIRST_NAME.Text;
        dataForm.BorrowerLastName = edtAPP_PB_LAST_NAME.Text;
        dataForm.BorrowerAddress = edtAPP_PB_CURR_ADDRESS.Text;
        dataForm.BorrowerCellPhone = txtCellPhone.Text;
        dataForm.BorrowerCity = edtAPP_PB_CURR_CITY.Text;
        dataForm.BorrowerDOB = edtAPP_PB_DOB.Text;
        dataForm.BorrowerEmail = txtEmail.Text;
        dataForm.BorrowerHomePhone = txtPhone.Text;
        dataForm.BorrowerLoanAmount = edtLOAN_AMOUNT.Text;
        dataForm.BorrowerState = edtAPP_PB_CURR_STATE.SelectedValue;
        dataForm.BorrowerZip = edtAPP_PB_CURR_ZIP.Text;

        //CO-Borrower
        dataForm.CoBorrowerFirstName = edtAPP_CB_FIRST_NAME.Text;
        dataForm.CoBorrowerLastName = edtAPP_CB_LAST_NAME.Text;
        dataForm.CoBorrowerAddress = edtAPP_CB_CURR_ADDRESS.Text;
        dataForm.CoBorrowerCellPhone = CoCellPhone.Text;
        dataForm.CoBorrowerCity = edtAPP_CB_CURR_CITY.Text;
        dataForm.CoBorrowerDOB = edtAPP_CB_DOB.Text;
        dataForm.CoBorrowerEmail = edtCoBorrowerEmail.Text;
        dataForm.CoBorrowerHomePhone = CoPhone.Text;
        dataForm.BorrowerState = edtAPP_CB_CURR_STATE.SelectedValue;
        dataForm.BorrowerZip = edtAPP_CB_CURR_ZIP.Text;
        #endregion

        /********************************************************************
        * calling the function to send autoresponders setting values like:
        * site_id, consultant_id (lo id) and borrower and co borrower values
        ********************************************************************/
        send_AutoResponderLO(new Guid(returnSITE_ID()), getConsultant_ID(), dataForm);

        //Send notification to Lead
        send_AutoResponderLead(new Guid(returnSITE_ID()), getConsultant_ID(), dataForm);

        //Move to last step due to is a save and continue
        MultiView1.ActiveViewIndex = 11;

        this.Message.Text = edtAPP_PB_FIRST_NAME.Text;

        //Save changes into the datase
        return u.ApplyChanges(true, out err, out isDupLeadSource);
    }

    //Function To delete Values Like $ or ,
    protected void deleteExtraValues()
    {
        //Create a list for all textbox
        List<TextBox> values = new List<TextBox>();

        //Add each textbox that could have a number
        values.Add(AssetBalance1);
        values.Add(AssetBalance2);
        values.Add(AssetBalance3);
        values.Add(AssetBalance4);
        values.Add(edtHOME_VALUE);
        values.Add(edtLOAN_AMOUNT);
        values.Add(edtAPP_INC_BASE);
        values.Add(edtAPP_INC_BASE_CB);
        values.Add(edtAPP_INC_OVERTIME);
        values.Add(edtAPP_INC_OVERTIME_CB);
        values.Add(edtAPP_INC_BONUSES);
        values.Add(edtAPP_INC_BONUSES_CB);
        values.Add(edtAPP_INC_COMMISSIONS);
        values.Add(edtAPP_INC_COMMISSIONS_CB);
        values.Add(edtAPP_INC_DIVIDENTS);
        values.Add(edtAPP_INC_DIVIDENTS_CB);
        values.Add(edtAPP_INC_RENTAL_INC);
        values.Add(edtAPP_INC_RENTAL_INC_CB);
        values.Add(edtAPP_INC_OTHER_INC);
        values.Add(edtAPP_INC_OTHER_INC_CB);
        values.Add(CashDepositDescr1);
        values.Add(CashDepositDescr2);
        values.Add(CashDepositVal1);
        values.Add(CashDepositVal2);
        values.Add(VestedInterestInRF);
        values.Add(NetWorthOfBusinessOwned);
        values.Add(AutoVal1);
        values.Add(AutoVal2);
        values.Add(AutoVal3);
        values.Add(StocksBondsVal1);
        values.Add(StocksBondsVal2);
        values.Add(StocksBondsVal3);
        values.Add(AssetsOtherVal1);
        values.Add(AssetsOtherVal2);
        values.Add(AssetsOtherVal3);
        values.Add(AssetsOtherVal4);
        values.Add(LInsuranceFaceAmount);
        values.Add(LInsuranceMarketValue);
        values.Add(LiaBalance1);
        values.Add(LiaBalance2);
        values.Add(LiaBalance3);
        values.Add(LiaBalance4);
        values.Add(LiaBalance5);
        values.Add(LiaBalance6);
        values.Add(LiaBalance7);
        values.Add(LiaPayment1);
        values.Add(LiaPayment2);
        values.Add(LiaPayment3);
        values.Add(LiaPayment4);
        values.Add(LiaPayment5);
        values.Add(LiaPayment6);
        values.Add(LiaPayment7);
        values.Add(MHERent);
        values.Add(MHE1stMrtgP);
        values.Add(MHEOthrMrtgP);
        values.Add(MHEHazIns);
        values.Add(MHERETaxes);
        values.Add(MHEMtgIns);
        values.Add(MHEHOADues);
        values.Add(MHEOther);
        values.Add(edtAPP_REAL_MARKET_VALUE);
        values.Add(edtAPP_REAL_MORTGAGE);
        values.Add(edtAPP_REAL_MORT_PAY);
        values.Add(edtAPP_REAL_MONTH_PAY);
        values.Add(edtAPP_REAL_MARKET_VALUE2);
        values.Add(edtAPP_REAL_MORTGAGE2);
        values.Add(edtAPP_REAL_MORT_PAY2);
        values.Add(edtAPP_REAL_MONTH_PAY2);
        values.Add(edtAPP_REAL_MARKET_VALUE3);
        values.Add(edtAPP_REAL_MORTGAGE3);
        values.Add(edtAPP_REAL_MORT_PAY3);
        values.Add(edtAPP_REAL_MONTH_PAY3);

        //After all textbox are added we check if it's empty if it's not we delete $ and ,
        for (int i = 0; i < values.Count; i++)
        {
            if (values[i].Text != "")
            {
                values[i].Text = values[i].Text.Replace("$", "");
                values[i].Text = values[i].Text.Replace(",", "");
            }
        }
    }

    //Function To Create The Autoresponder To LOs
    protected void send_AutoResponderLO(Guid site_id, string c_id, dataBorrowerCo data)
    {
        //Set initial variables
        string html_body = "";
        string subject = "";
        string recipient = "";
        string[] allRecipients;
        string recipientFrom;
        string siteName = NewClientSites.UIF.GetSITE_NAME();
        string fullName = "";
        MailMessage m = new MailMessage();

        #region Get Message
        //Get Values from the autoresponder
        getAutoResponder values = new getAutoResponder(c_id, returnSITE_ID(), data);
        if (MultiView1.ActiveViewIndex < 10)
        {
            //Get subject from autoresponder without tags
            subject = values.getHTML_DATA("EMAIL_SUBJECT_CONGRAT").Replace("</a>", " ");

            //get body from autoresponder without tags
            html_body = values.getHTML_DATA("EMAIL_BODY_CONGRAT");
        }
        else
        {
            //Get subject from autoresponder without tags
            subject = values.getHTML_DATA("EMAIL_SUBJECT_FS").Replace("</a>", " ");

            //Get body from autoresponder without tags
            html_body = values.getHTML_DATA("EMAIL_BODY_FS");
        }
        #endregion

        //Set Basic From 
        m.From = new MailAddress(SendEmailAdress, SendEmailName);

        #region Set Recipients

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
                        fullName = reader["FullName"].ToString();
                        recipient = reader["email"].ToString();
                    }

                    //Add the email to send
                    m.To.Add(new MailAddress(recipient, fullName));
                }
            }
            else
            {
                //This is to get the recipient dinamic: 
                recipientFrom = NewClientSites.UIF.GetEmailTo();
                if (recipientFrom != "")
                {
                    allRecipients = recipientFrom.Split(',');
                    for (int i = 0; i < allRecipients.Length; i++)
                    {
                        if (i == 0) { m.To.Add(new MailAddress(allRecipients[i], siteName)); } else { m.To.Add(new MailAddress(allRecipients[i], siteName)); }
                    }
                }
                else
                {
                    m.To.Add(new MailAddress(NewClientSites.Global.SendEmailAddress, siteName));
                }
            }
        }
        catch (Exception)
        {
            throw;
        }
        #endregion

        #region Send Email

        m.Subject = subject;
        m.Body = html_body;

        //Set place where is going to be send the email
        try
        {
            AdminClients.Controls.SmtpAPIWrapper cl = AdminClients.EmailEvents.Controls.SmtpHosts.SmtpClientCreaCRM();
            cl.Send(m);
        }
        catch { }
        #endregion
    }

    //Function To Create The Autoresponder To Leads
    protected void send_AutoResponderLead(Guid site_id, string c_id, dataBorrowerCo data)
    {
        //Set initial variables
        string html_body = "";
        string subject = "";
        MailMessage m = new MailMessage();

        #region Get Message
        //Get values from the autoresponder
        getAutoResponder values = new getAutoResponder(c_id, returnSITE_ID(), data);
        if (MultiView1.ActiveViewIndex < 10)
        {
            //Get subject from autoresponder without tags
            subject = values.getHTML_DATA("EMAIL_SUBJECT_FC").Replace("</a>", " ");

            //Get body from autoresponder without tags
            html_body = values.getHTML_DATA("EMAIL_BODY_FC");
        }
        else
        {
            //Get subject from autoresponder without tags
            subject = values.getHTML_DATA("EMAIL_SUBJECT_PS");//.Replace("</a>", " ")

            //Get body from autoresponder without tags
            html_body = values.getHTML_DATA("EMAIL_BODY_PS");
        }
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

    //Function To Copy the Address From Borrower To Co-Borrower
    protected void copyBorrowAddress(object sender, EventArgs e)
    {
        edtAPP_CB_CURR_ADDRESS.Text = edtAPP_PB_CURR_ADDRESS.Text;
        edtAPP_CB_CURR_STATE.SelectedIndex = edtAPP_PB_CURR_STATE.SelectedIndex;
        edtAPP_CB_CURR_CITY.Text = edtAPP_PB_CURR_CITY.Text;
        edtAPP_CB_CURR_ZIP.Text = edtAPP_PB_CURR_ZIP.Text;
    }

    //Function To copy The Address From Step 2 To 3
    protected void copyPropAddress(object sender, EventArgs e)
    {
        edtAPP_PB_CURR_ADDRESS.Text = edtAPP_PROPERTY_ADDRESS.Text;
        edtAPP_PB_CURR_STATE.SelectedIndex = edtAPP_PROPERTY_STATE.SelectedIndex;
        edtAPP_PB_CURR_CITY.Text = edtAPP_PROPERTY_CURR_CITY.Text;
        edtAPP_PB_CURR_ZIP.Text = edtAPP_PROPERTY_ZIP.Text;
    }

    //Move Next Step
    protected void btnNextStep_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex++;
        if (edtAPP_PB_OWNERSHIP.SelectedIndex == 0)
        {
            edtAPP_REAL_ADDRESS.Text = edtAPP_PB_CURR_ADDRESS.Text;
            edtAPP_REAL_PROPERTY_STATE.SelectedIndex = edtAPP_PB_CURR_STATE.SelectedIndex;
            edtAPP_REAL_PROPERTY_CITY.Text = edtAPP_PB_CURR_CITY.Text;
            edtAPP_REAL_PROPERTY_ZIP.Text = edtAPP_PB_CURR_ZIP.Text;
        }

        
    }

    //Called By All Buttons Like Save And Continue, Submit or Update
    protected void btnSaveAndContinue_Click(object sender, EventArgs e)
    {
        SaveData(uid());
    }

    //Move Between Steps
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        //Parse sender and transform into a LinkButton
        LinkButton value = sender as LinkButton;

        //Parse the location to move
        int val = int.Parse(value.Text) - 1;

        //To move to step selected
        MultiView1.ActiveViewIndex = val;
        if (edtAPP_PB_OWNERSHIP.SelectedIndex == 0)
        {
            edtAPP_REAL_ADDRESS.Text = edtAPP_PB_CURR_ADDRESS.Text;
            edtAPP_REAL_PROPERTY_STATE.SelectedIndex = edtAPP_PB_CURR_STATE.SelectedIndex;
            edtAPP_REAL_PROPERTY_CITY.Text = edtAPP_PB_CURR_CITY.Text;
            edtAPP_REAL_PROPERTY_ZIP.Text = edtAPP_PB_CURR_ZIP.Text;
        }
    }

    //Verify If There Are More Than Value In The LO Dropdown
    protected void DropDownList1_DataBound(object sender, EventArgs e)
    {
        /********************************************************
        * verify if there are more than value in the LO Dropdown
        * if there is add a new option No, I am not.
        * if there are not put visible false the dropdown
        ********************************************************/
        if (drpMortgageSpecialist1.Items.Count > 0)
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

    //Evaluate If It's First Time Or A Previous Registration
    protected void Login_Click(object sender, EventArgs e)
    {
        //Get basic ids from Site ID and Lo ID
        Guid siteid = NewClientSites.UIF.Get_SITE_ID();
        Guid agentid = NewClientSites.UIF.GetConsultantId();

        //Variable to save errors
        string err;

        //Variable to set if the user is returning
        Guid userid = Guid.Empty;
        AdminClients.Controls.tbl t = new AdminClients.Controls.tbl();
        string s = string.Format("exec [dbo].[sp_USER_IDofAlead] '{0}', '{1}', '{2}' {3}",
            siteid, txtEmail.Text, txtPwd.Text, agentid.Equals(Guid.Empty) ? "" : string.Format(",'{0}'", agentid));
        ArrayList al = t.select(s, out err);
        if (err.Length > 0)
        {
            NewClientSites.UIF.SendErrorNotification(s + "....." + err);
            return;
        }

        //If user exist add its ID
        if (al != null && al.Count > 0)
        {
            userid = new Guid(AdminClients.Controls.tbl.getHashtableField(al[0], "USER_ID"));
        }
        if (!userid.Equals(Guid.Empty))
        {
            //If user exist set its ID
            u.Value = userid.ToString();

            //After set the user, we get values pre filled
            SetFields(userid);

            //To hide submit and show update button
            btnSubmit.Visible = false;
            btnUpdate.Visible = true;
        }
        else
        {
            //If the user doesn't exist hide update button and to show submit
            btnSubmit.Visible = true;
            btnUpdate.Visible = false;

            //To move next step
            MultiView1.ActiveViewIndex++;
        }

        //Clean message error
        lblError.Text = "";

        //Set borrower email in step 2
        this.edtBorrowerEmail.Text = txtEmail.Text;
    }

    //Get Values For The LO Dropdown
    protected void SqlDataSource1_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
    {
        //Set ID from Company
        Guid g = NewClientSites.UIF.Get_SITE_ID();

        //If it's null cancel set values
        if (g == null || g.Equals(Guid.Empty))
        {
            e.Cancel = true;
            return;
        }

        //If it's not null, to set this value as a parameter to get LOs
        e.Command.Parameters[0].Value = g.ToString();

        //Max time to get an answer
        e.Command.CommandTimeout = 300;
    }

    //Go To A Previous Step
    protected void btnBack_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex--;
        if (edtAPP_PB_OWNERSHIP.SelectedIndex == 0)
        {
            edtAPP_REAL_ADDRESS.Text = edtAPP_PB_CURR_ADDRESS.Text;
            edtAPP_REAL_PROPERTY_STATE.SelectedIndex = edtAPP_PB_CURR_STATE.SelectedIndex;
            edtAPP_REAL_PROPERTY_CITY.Text = edtAPP_PB_CURR_CITY.Text;
            edtAPP_REAL_PROPERTY_ZIP.Text = edtAPP_PB_CURR_ZIP.Text;
        }
    }

    // Recover Pass
    protected void Remember_Click(object sender, EventArgs e)
    {
        lblErrM.Text = "";
        lblErrM.Visible = false;

        string from, recipients, subject, body;
        from = "info@arginteractive.com";
        recipients = txtEmail.Text;
        subject = "Your password";

        AdminClients.Controls.tbl conn = new AdminClients.Controls.tbl();

        try
        {
            using (SqlDataReader reader = conn.ExecuteReader("SELECT TOP 1 txtPwd FROM tbluserdetails where txtEmail = @EMAIL and site_id = @SITE_ID ORDER BY lastchangedate DESC",
                    new System.Data.SqlClient.SqlParameter[] { 
                        new System.Data.SqlClient.SqlParameter("@SITE_ID", NewClientSites.UIF.Get_SITE_ID()),
                        new System.Data.SqlClient.SqlParameter("@EMAIL", txtEmail.Text)}))
            {
                if (reader.Read())
                {
                    try
                    {
                        body = "Thanks for using our services, your password is: " + reader["txtPwd"];
                        string url = link + "&p=" + (String.IsNullOrEmpty(Request.QueryString["p"]) ? "applynow.ascx" : Request.QueryString["p"]) + (String.IsNullOrEmpty(Request.QueryString["type"]) ? "" : "&type=" + Request.QueryString["type"]);
                        try
                        {
                            AdminClients.Controls.SmtpAPIWrapper cl = AdminClients.EmailEvents.Controls.SmtpHosts.SmtpClientCreaCRM();

                            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                            mail.From = new System.Net.Mail.MailAddress(from);
                            mail.To.Add(recipients);
                            mail.Subject = subject;
                            mail.Body = body;

                            cl.Send(mail);

                            Response.Redirect(url);
                        }
                        catch { }
                    }
                    catch (Exception ex)
                    {
                        lblErrM.Visible = true;
                        lblErrM.Text = "Sorry, please try again later.";
                    }
                }
                else
                {
                    lblErrM.Visible = true;
                    lblErrM.Text = "Sorry, your registration doesn't exit.";
                }
            }
        }
        catch (Exception exc)
        {
            lblErrM.Visible = true;
            lblErrM.Text = "Sorry, Unexpected error, please try again later.";
        }
    }
}