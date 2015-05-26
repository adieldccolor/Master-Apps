<%@ Control Language="C#" AutoEventWireup="true" CodeFile="./__apps/forms/FullApplyNow.ascx.cs" Inherits="FullApplyNow" %>

<!-- 
* Full Apply Now v2.0
* Copyright 2015. EllieMae Inc.
* FronEnd, Design: Adiel Hercules
* Backend: Juan Valle (Alvaro), Darwin Bermudez
    -->

<script runat="server">
    string Unsecure = NewClientSites.Global.getServerURL("UnsecureClientPost");
    string Secure = NewClientSites.Global.getServerURL("SecureClientPost");
</script>

<script runat="server">
    string path = NewClientSites.UIF.GetTempPath();
    string link = NewClientSites.UIF.GetLink("");
</script>

<script runat="server">
    string SendEmailAdress = NewClientSites.Global.SendEmailAddress;
    string SendEmailName = NewClientSites.Global.SendEmailName;
</script>

<link rel="stylesheet" href="<%= path %>__apps/css/FullApplyNow.css">
<link rel="stylesheet" href="<%= path %>__apps/css/FontAwesome.css">

<!--[if lte IE 8]>
<div class="css-browser-wrapper ie">
<![endif]-->

<asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
    <%--LOGIN--%>
    <asp:View ID="ViewEmailPass" runat="server">
        <link rel="stylesheet" href="<%= path %>__apps/css/FullApplyNow.LoginScreen.css">
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="welcomeScreen">

                    <div class="js-actions-ie">
                    Your browser is outdated, please consider to update it with a newer version or try another browser. Recommendations: 
                    <ul>
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Internet Explorer 9+</li>
                    </ul></div>

                    <div class="inputs">
                        <div class="space">
                            <div class="forminputs">
                                <% if ((Request.QueryString["returning"] ?? "").Length == 0)  { %>
                                    <% if ((Request.QueryString["recovery"] ?? "").Length == 0)  { %>
                                        <h2>Signup Today!</h2>
                                    <% }else{ %>
                                        <h2>Password Reminder</h2>
                                    <% } %>
                                <% }else{ %>
                                    <h2>Account Signin</h2>
                                <% } %>

                                
                                <div class="css-form-group" aria-required="true">
                                    <asp:TextBox ID="txtEmail" runat="server" CssClass="noPlaceholder email-valid" Placeholder="E-mail Address" data-required="true"></asp:TextBox>
                                </div>
                <% if ((Request.QueryString["recovery"] ?? "").Length == 0) 
                   { %>
                                
                                <div class="css-form-group">
                                    <asp:TextBox ID="txtPwd" runat="server" CssClass="pw noPlaceholder pw-to-confirm password_length_control" Placeholder="Password" data-required="true"></asp:TextBox>
                                </div>

                    <% if ((Request.QueryString["returning"] ?? "").Length == 0 || (Request.QueryString["recovery"] ?? "").Length != 0){ %>

                                <span class="css-label password-strength">STRENGTH | <span class="css-password-strength-bar" data-width="0"><span class="css-password-level"></span></span></span>

                                <div class="css-form-group">
                                    <asp:TextBox ID="txtPwdRetype" runat="server" CssClass="pw noPlaceholder pw-confirm" Placeholder="Confirm Password" data-required="true"></asp:TextBox>
                                 </div>
                    <% } %>

                            </div>
                           
                          
                            <asp:Panel ID="pnlConsultant" runat="server" CssClass="css-form-group">
                                <asp:HiddenField ID="hdfConsultant" Value="true" runat="server" />
                                <asp:Label ID="Label1" runat="server" Text="Are you currently working with a mortgage specialist?"></asp:Label>
                                <asp:DropDownList ID="drpMortgageSpecialist1" runat="server" data-required="true" style="width: 100%" DataSourceID="SqlDataSource1" DataTextField="FullName" DataValueField="Consultant_ID" OnDataBound="DropDownList1_DataBound">
                                </asp:DropDownList>
                            </asp:Panel>
                <% } %>
                <% else 
                   { %>
                        </div>
                        <asp:Label ID="lblErrM" runat="server" Text="" ForeColor="Red" Font-Bold="true" Visible="false"></asp:Label>

                        <%--<asp:Button ID="btnRemember" runat="server" Text="Remember" OnClick="Remember_Click" />--%>
                        <asp:LinkButton runat="server" OnClick="Remember_Click" UseSubmitBehavior="true" ID="btnRemember" class="simulate-button ladda-button lock-submit force-center" data-color="red" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Remind</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>
                <% } %>



                <% if ((Request.QueryString["returning"] ?? "").Length == 0 && (Request.QueryString["recovery"] ?? "").Length == 0)
                   { %>
                        <%--<asp:Button ID="Button19" runat="server" Text="Register" OnClick="Login_Click" UseSubmitBehavior="true" />--%>   
                        <asp:LinkButton runat="server" OnClick="Login_Click" UseSubmitBehavior="true" ID="Button19" class="simulate-button ladda-button lock-submit force-center" data-color="red" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Register</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>


                    </div>
                </div>
                <div class="reminder">
                    <div class="space">
                        <label>I already have an account</label>
                        <a href="<%= link %>&p=<%= (String.IsNullOrEmpty(Request.QueryString["p"]) ? "applynow.ascx" : Request.QueryString["p"])  + (String.IsNullOrEmpty(Request.QueryString["type"]) ? "" : "&type=" + Request.QueryString["type"]) %>&returning=true">
                            <button class="newaccount" type="button">Sign In</button>
                        </a>
                    </div>
                </div>
                <% } %>
                <% else
                   { %>
                    <% if ((Request.QueryString["recovery"] ?? "").Length == 0)
                       { %>
                <%--<asp:Button ID="ButtonS19" runat="server" Text="Sign In" OnClick="Login_Click" UseSubmitBehavior="true" />--%>
                <asp:LinkButton runat="server" OnClick="Login_Click" UseSubmitBehavior="true" ID="LinkButton78" class="simulate-button ladda-button lock-submit force-center" data-color="red" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Sign In</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                <a href="<%= link %>&p=<%= (String.IsNullOrEmpty(Request.QueryString["p"]) ? "applynow.ascx" : Request.QueryString["p"]) + (String.IsNullOrEmpty(Request.QueryString["type"]) ? "" : "&type=" + Request.QueryString["type"]) %>&recovery=true">
                    <button class="forgot" type="button">Forgot your password?</button>
                </a>
                    <% } %>
            </div>
        </div>
        <div class="reminder">
            <div class="space">
                <label>Don't have an account?</label>
                <a href="<%= link %>&p=<%= (String.IsNullOrEmpty(Request.QueryString["p"]) ? "applynow.ascx" : Request.QueryString["p"])  + (String.IsNullOrEmpty(Request.QueryString["type"]) ? "" : "&type=" + Request.QueryString["type"]) %>">
                    <button class="newaccount" type="button">Create an Account</button>
                </a>
            </div>
        </div>
                <% } %>
        </div>
        </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:propertyinfoConnectionString %>" SelectCommand="sp_Users_Select" SelectCommandType="StoredProcedure" OnSelecting="SqlDataSource1_Selecting">
            <SelectParameters>
                <asp:Parameter Name="SITE_ID" />
            </SelectParameters>
        </asp:SqlDataSource>
    </asp:View>

    <%--STEP 2--%>
    <asp:View ID="ViewGeneralLoanInfo" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="active">2</li>
                <li><asp:LinkButton ID="LinkButton12" runat="server" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton13" runat="server" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton14" runat="server" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton15" runat="server" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton16" runat="server" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton17" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton18" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton19" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton2" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <p>
                        Please provide us information about the subject property and the mortgage you are applying for. 
                        You'll need to indicate if you are applying with a Co-Borrower.
                    </p>
                    
                    <div class="css-form-group">
                        <asp:Label ID="lblAPP_LOAN_PURPOSE" runat="server" Font-Bold="true" Text="* Loan Purpose" CssClass="css-block"></asp:Label>
                        <asp:DropDownList ID="edtAPP_LOAN_PURPOSE" runat="server" ControlToValidate="applynowfull_DropDownList" CssClass="" data-required="true">
                        </asp:DropDownList>
                    </div>

                    <div class="css-form-group">
                        <div id="refinance_purpose_options" class="custom_hide" style="">
                    
                        <asp:Label ID="Label10" runat="server" Text="Refinance Loan Purpose" CssClass="css-block"></asp:Label>
                        <asp:DropDownList ID="edtAPP_REF_LOAN_PURPOSE" runat="server" CssClass="">
                            <asp:ListItem Text="Cash-Out" Value="Cash-Out" />
                            <asp:ListItem Text="No Cash-Out" Value="No Cash-Out" Selected="True" />
                        </asp:DropDownList>
                        </div>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="LoanPurposeOther" runat="server" CssClass="" Placeholder="Other Purpose Loan" />
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="edtHOME_VALUE" runat="server" CssClass="ammount" Placeholder="* Sales Price/Home value" rel="require" data-required="true" require-help="If this is a &lt;b&gt;Refi loan&lt;/b&gt;, enter the present value of the subject property.&lt;br /&gt;If this is a &lt;b&gt;purchase&lt;/b&gt;, then enter the purchase price of the subject property.&lt;br /&gt;Please enter the property sales price or home value. For example, enter &ldquo;300000&rdquo; and do not use a &ldquo;$&rdquo; or comma." ></asp:TextBox>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="edtLOAN_AMOUNT" runat="server" CssClass="ammount" Placeholder="* Loan Amount" rel="require" data-required="true" require-help="Please enter the <b>amount of money you want to borrow</b>. For example, enter &ldquo;200000&rdquo; and do not use a &ldquo;$&rdquo; or comma."></asp:TextBox>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:CheckBox ID="edtPROPERTY_NOT_FOUND" runat="server" class="require-validation" Text="I have not found a property yet" toggle-required=".edtAPP_PROPERTY_ADDRESS, .edtAPP_PROPERTY_STATE, .edtAPP_PROPERTY_ZIP" />
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="edtAPP_PROPERTY_ADDRESS" runat="server" CssClass="" Font-Bold="true" Placeholder="* Property Address" rel="require" data-required="true" require-help="The <b>street address</b> of the property for which you are obtaining the loan." data-identificator="edtAPP_PROPERTY_ADDRESS"></asp:TextBox>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="edtAPP_PROPERTY_CURR_CITY" runat="server" CssClass="" Font-Bold="true" Placeholder="* Property City" rel="require" data-required="true" data-identificator="edtAPP_PROPERTY_STATE"></asp:TextBox>
                   </div>
                    
                    <div class="css-form-group">
                        <asp:Label ID="lblAPP_PROPERTY_STATE" runat="server" Font-Bold="true" Text="* Property State" CssClass="css-block"></asp:Label>
                        <asp:DropDownList ID="edtAPP_PROPERTY_STATE" runat="server" CssClass="" data-required="true" data-identificator="edtAPP_PROPERTY_STATE">
                        </asp:DropDownList>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="edtAPP_PROPERTY_ZIP" runat="server" CssClass="zip-code" Placeholder="* Property Zip" data-required="true" data-identificator="edtAPP_PROPERTY_ZIP"></asp:TextBox>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="edtAPP_PROPERTY_COUNTY" runat="server" CssClass="" Placeholder="Property County"></asp:TextBox>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:Label ID="lblAPP_UNITS_NUM" runat="server" Font-Bold="true" Text="* Number of units" CssClass="css-block"></asp:Label>
                        <asp:DropDownList ID="edtAPP_UNITS_NUM" runat="server" CssClass="" rel="require" data-required="true" require-help="The number separate living spaces in the subject property. If you are obtaining this loan for a single family home, then the number of units is 1.">
                        </asp:DropDownList>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:Label ID="x" runat="server" Font-Bold="true" Text="* Property will be"></asp:Label>
                        <asp:RadioButton ID="propertyWillBeIsPrimary" runat="server" GroupName="propertywill" Text="Primary" Checked="true" />
                        <asp:RadioButton ID="propertyWillBeIsSecondary" runat="server" GroupName="propertywill" Text="Secondary" />
                        <asp:RadioButton ID="propertyWillBeIsInvestment" runat="server" GroupName="propertywill" Text="Investment" />
                    </div>
                    
                    <div class="css-form-group">
                        <asp:Label ID="lblLoanType" runat="server" Font-Bold="true" Text="* Loan Type" CssClass="css-block"></asp:Label>
                        <asp:DropDownList ID="DropDownLoanType" runat="server" CssClass="" data-required="true">
                            <asp:ListItem Text="Conventional" Value="Conventional" Selected="True" />
                            <asp:ListItem Text="FHA" Value="FHA" />
                            <asp:ListItem Text="VA" Value="VA" />
                            <asp:ListItem Text="USDA-RHS" Value="USDA-RHS" />
                            <asp:ListItem Text="Other" Value="Other" />
                        </asp:DropDownList>
                    </div>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="LoanTypeOther" runat="server" CssClass="" Font-Bold="true" Placeholder="* Other Loan Type" />
                    </div>

                    
                    <%--<asp:Button ID="btnSaveAndContinueLoan" runat="server" CssClass="sabe_and_complete_later" Text="Save and Complete Later" OnClick="btnSaveAndContinue_Click" />
                    <asp:Button ID="btnNextStep_Loan" runat="server" CssClass="applynowfull_Button next_step" Text="Next" OnClick="btnNextStep_Click" />--%>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="btnSaveAndContinueLoan" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="btnNextStep_Loan" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>
                </div>
            </div>
        </div>
    </asp:View>
    
    <%--STEP 3--%>
    <asp:View ID="ViewBorrowers" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton1" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">3</li>
                <li><asp:LinkButton ID="LinkButton20" runat="server" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton21" runat="server" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton22" runat="server" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton23" runat="server" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton24" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton25" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton26" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton3" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 23%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                    <h2>General Borrower Information</h2>
                 
                    Please provide us information about yourself.

                <div class="css-wrapper">
                    <div class="css-column-left">
                        <p class="css-title">Borrower</p>
                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_FIRST_NAME" runat="server" CssClass="" Placeholder="* First Name" TabIndex="1" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_LAST_NAME" runat="server" CssClass="" Placeholder="* Last Name" TabIndex="2" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_MIDDLE_INITIALS" runat="server" CssClass="" Placeholder="Middle Name" TabIndex="3"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_SOC_NO" runat="server" CssClass="nmls" placeholder="Social Security # (111-11-1111)" TabIndex="4" rel="require" require-help="Social Security#&lt;br&gt;Format: &lt;b&gt;111-11-1111&lt;/b&gt;."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_PB_MARITAL" runat="server" Font-Bold="true" Text="* Marital Status" CssClass="css-block"></asp:Label>
                            <asp:DropDownList ID="edtAPP_PB_MARITAL" runat="server" CssClass="" TabIndex="5" data-required="true">
                                <asp:ListItem Selected="True" Text="Please Select" Value="" />
                                <asp:ListItem Text="Married" Value="Married" />
                                <asp:ListItem Text="Separated" Value="Separated" />
                                <asp:ListItem Text="Unmarried" Value="Unmarried" />
                            </asp:DropDownList>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_DOB" runat="server" CssClass="" Placeholder="* Date of Birth (mm/dd/yyyy)" TabIndex="6" rel="date" value="" data-inputmask="'alias': 'date'" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_YEARS_IN_SCOOL" runat="server" Placeholder="Years In School" TabIndex="7"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_DEPENDANTS_NO" runat="server" CssClass="" Placeholder="No. of Dependents" TabIndex="8"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_DEPENDANTS_AGE" runat="server" CssClass="" Placeholder="Dependent Ages" TabIndex="9" require-help="Please enter the age of dependents  separated by  comma.  For example, if you have 3 children with ages 2, 5, 8,  then enter: 2, 5, 8  in this field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="txtPhone" runat="server" CssClass="" Placeholder="Home Phone" TabIndex="10"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="txtCellPhone" runat="server" CssClass="" Placeholder="Cell Phone" TabIndex="11"></asp:TextBox>
                         </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="WorkPhone" runat="server" CssClass="" Placeholder="Work Phone" TabIndex="12"></asp:TextBox>
                         </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtBorrowerEmail" runat="server" CssClass="email-valid" Placeholder="* Email address" TabIndex="13" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:LinkButton ID="LinkButton76" runat="server" OnClick="copyPropAddress">Same as property address</asp:LinkButton>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_CURR_ADDRESS" runat="server" CssClass="" Placeholder="* Current Address" TabIndex="14" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_CURR_CITY" runat="server" CssClass="" Placeholder="* Current City" TabIndex="15" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="Label2" runat="server" Font-Bold="true" Text="* Current State" CssClass="css-block"></asp:Label>
                            <asp:DropDownList ID="edtAPP_PB_CURR_STATE" runat="server" CssClass="" TabIndex="16" data-required="true">
                            </asp:DropDownList>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_CURR_ZIP" runat="server" CssClass="zip-code" Placeholder="* Current Zip" TabIndex="17" data-required="true" rel="require" require-help="* Zip Code <br>Example: 10001"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_HOW_LONG_YEARS" runat="server" CssClass="" Placeholder="Years at this Address" TabIndex="18" rel="require" require-help="Enter the number of years you have lived add this address. For example  enter 2, if you  have lived at the property for  2.5 years  and enter 6 in  the months field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_HOW_LONG_MONTHS" runat="server" CssClass="" Placeholder="Months at this Address" TabIndex="19" rel="require" require-help="Enter the number of months you have lived add this address. For example enter 6, if  you have lived  at the property  for 2.5 years  and enter 2 in  the years field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_PB_OWNERSHIP" runat="server" Font-Bold="true" Text="* Ownership" CssClass="css-block"></asp:Label>
                            <asp:DropDownList ID="edtAPP_PB_OWNERSHIP" runat="server" CssClass="" TabIndex="20" data-required="true">
                                <asp:ListItem Selected="True" Text="Own Home" Value="Own Home" />
                                <asp:ListItem Text="Rent" Value="Rent" />
                            </asp:DropDownList>
                            </div>
                    </div>
                    <div class="css-column-right">
                        <p class="css-title">Co-Borrower</p>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_FIRST_NAME" runat="server" CssClass="" Placeholder="First Name" TabIndex="21"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_LAST_NAME" runat="server" CssClass="" Placeholder="Last Name" TabIndex="22"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_MIDDLE_INITIALS" runat="server" CssClass="" Placeholder="Middle Name" TabIndex="23"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_SOC_NO" runat="server" CssClass="nmls" placeholder="Social Security # (111-11-1111)" TabIndex="24" rel="require" require-help="Social Security#&lt;br&gt;Format: &lt;b&gt;111-11-1111&lt;/b&gt;."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_CB_MARITAL" runat="server" CssClass="css-block" Text="Marital Status"></asp:Label>
                            <asp:DropDownList ID="edtAPP_CB_MARITAL" runat="server" CssClass="" TabIndex="25">
                                <asp:ListItem Selected="True" Text="Please Select" Value="" />
                                <asp:ListItem Text="Married" Value="Married" />
                                <asp:ListItem Text="Separated" Value="Separated" />
                                <asp:ListItem Text="Unmarried" Value="Unmarried" />
                            </asp:DropDownList>
                       </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_DOB" runat="server" CssClass="" Placeholder="Date of Birth (mm/dd/yyyy)" TabIndex="26" rel="date" value="" data-inputmask="'alias': 'date'"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_YEARS_IN_SCOOL" runat="server" CssClass="" Placeholder="Years In School" TabIndex="27"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_DEPENDANTS_NO" runat="server" CssClass="" Placeholder="No. of Dependents" TabIndex="28"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_DEPENDANTS_AGE" runat="server" CssClass="" Placeholder="Dependent Ages" TabIndex="29" rel="require" require-help="Please enter the age of dependents  separated by  comma.  For example, if you have 3 children with ages 2, 5, 8,  then enter: 2, 5, 8  in this field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="CoPhone" runat="server" CssClass="" Placeholder="Home Phone" TabIndex="30"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="CoCellPhone" runat="server" CssClass="" Placeholder="Cell Phone" TabIndex="31"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="CoWorkPhone" runat="server" CssClass="" Placeholder="Work Phone" TabIndex="32"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtCoBorrowerEmail" runat="server" class="email-valid" Placeholder="Email address" TabIndex="33"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:LinkButton ID="LinkButton10" runat="server" OnClick="copyBorrowAddress">Same as borrower address</asp:LinkButton>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_CURR_ADDRESS" runat="server" CssClass="" Placeholder="Current Address" TabIndex="34"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_CURR_CITY" runat="server" CssClass="" Placeholder="Current City" TabIndex="35"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="Label3" runat="server" CssClass="css-block" Text="Current State"></asp:Label>
                            <asp:DropDownList ID="edtAPP_CB_CURR_STATE" runat="server" CssClass="" TabIndex="36">
                            </asp:DropDownList>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_CURR_ZIP" runat="server" CssClass="zip-code" Placeholder="Current Zip" TabIndex="37" rel="require" require-help="* Zip Code <br>Example: 10001"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_HOW_LONG_YEARS" runat="server" CssClass="" Placeholder="Years at this Address" TabIndex="38" rel="require" require-help="Enter the number of years you have lived add this address. For example  enter 2, if you  have lived at the property for  2.5 years  and enter 6 in  the months field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_HOW_LONG_MONTHS" runat="server" CssClass="" Placeholder="Months at this Address" TabIndex="39" rel="require" require-help="Enter the number of months you have lived add this address. For example enter 6, if  you have lived  at the property  for 2.5 years  and enter 2 in  the years field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_CB_OWNERSHIP" runat="server" Font-Bold="true" Text="* Ownership" CssClass="css-block"></asp:Label>
                            <asp:DropDownList ID="edtAPP_CB_OWNERSHIP" runat="server" CssClass="" TabIndex="40"  data-required="true">
                                <asp:ListItem Selected="True" Text="Own Home" Value="Own Home" />
                                <asp:ListItem Text="Rent" Value="Rent" />
                            </asp:DropDownList>
                            </div>
                    </div>
                    <div class="clear">
                    </div>

                    <%--<asp:Button ID="Button18" runat="server" CssClass="back_step keepvalid" OnClick="btnBack_Click" TabIndex="41" Text="Back " />
                    <asp:Button ID="btnSaveAndContinueGenBorIn" runat="server" CssClass="sabe_and_complete_later" OnClick="btnSaveAndContinue_Click" TabIndex="42" Text="Save and Complete Later" Visible="true" />
                    <asp:Button ID="bNextStepGenBorIn" runat="server" CssClass="next_step" OnClick="btnNextStep_Click" TabIndex="43" Text="Next" />--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="Button18" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="btnSaveAndContinueGenBorIn" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="bNextStepGenBorIn" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 4--%>
    <asp:View ID="ViewEmpl" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton27" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton28" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">4</li>
                <li><asp:LinkButton ID="LinkButton29" runat="server" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton30" runat="server" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton31" runat="server" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton32" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton33" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton34" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton75" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 32%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <h2>Borrower Employment</h2>
                    <p>
                        Please provide us your current employment information.
                    </p>
                    
                    <div class="css-column-left">
                        <h2>Borrower</h2>
                        
                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_NAME" runat="server" CssClass="" Placeholder="* Employer Name" TabIndex="1" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_ADDRESS" runat="server" CssClass="" Placeholder="Employer Address" TabIndex="2"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_CITY" runat="server" CssClass="" Placeholder="Employer City" TabIndex="3"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_PB_EMP_STATE" runat="server" CssClass="css-block">Employer State</asp:Label>
                            <asp:DropDownList ID="edtAPP_PB_EMP_STATE" runat="server" CssClass="" TabIndex="4">
                            </asp:DropDownList>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_ZIP" runat="server" CssClass="mask-zip" Placeholder="Employer Zip" TabIndex="5"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_PHONE" runat="server" CssClass="mask-phone" Placeholder="Employer Phone" TabIndex="6"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_TITLE" runat="server" CssClass="" Placeholder="Title/Position" TabIndex="7"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:CheckBox ID="edtAPP_PB_EMP_SELF" runat="server" TabIndex="8" Text="Self-Employed" />
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_YEARS" runat="server" CssClass="" placeholder="* Years with current employer" TabIndex="9" data-required="true" rel="require" require-help="Enter the number of years you have worked at this company.&lt;br&gt;For example enter 2, if you have worked at the company &lt;br&gt;for 2.5 years and enter 6 in the month field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_PB_EMP_MONTHS" runat="server" CssClass="" placeholder="* Months" TabIndex="10" data-required="true" rel="require" require-help="Enter the number of months you have worked at this company.  For example enter 6, if you have worked at the company for 2.5 years and enter 2 in the years field."></asp:TextBox>
                        </div>
                    </div>
                    <div class="css-column-right">
                        <h2>Co-Borrower</h2>
                        
                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_NAME" runat="server" CssClass="" Placeholder="Employer Name" TabIndex="11"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_ADDRESS" runat="server" CssClass="" Placeholder="Employer Address" TabIndex="12"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_CITY" runat="server" CssClass="" Placeholder="Employer City" TabIndex="13"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:Label ID="lblAPP_CB_EMP_STATE" runat="server" CssClass="css-block">Employer State</asp:Label>
                            <asp:DropDownList ID="edtAPP_CB_EMP_STATE" runat="server" CssClass="" TabIndex="14">
                            </asp:DropDownList>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_ZIP" runat="server" CssClass="zip-code" Placeholder="Employer Zip" TabIndex="15"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_PHONE" runat="server" CssClass=" mask-phone" Placeholder="Employer Phone" TabIndex="16"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_TITLE" runat="server" CssClass="" Placeholder="Title/Position" TabIndex="17"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:CheckBox ID="edtAPP_CB_EMP_SELF" runat="server" Text="Self-Employed" TabIndex="18" />
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_YEARS" runat="server" CssClass=" mask-years" placeholder="Years with current employer" TabIndex="19" rel="require" require-help="Enter the number of years you have worked at this company.&lt;br&gt;For example enter 2, if you have worked at the company &lt;br&gt;for 2.5 years and enter 6 in the month field."></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_CB_EMP_MONTHS" runat="server" CssClass=" mask-years" placeholder="Months" TabIndex="20" rel="require" require-help="Enter the number of months you have worked at this company.  For example enter 6, if you have worked at the company for 2.5 years and enter 2 in the years field."></asp:TextBox>
                        </div>
                    </div>
                    <div class="clear">
                    </div>


                    <%--<asp:Button ID="Button17" runat="server" CssClass="back_step keepvalid" OnClick="btnBack_Click" TabIndex="21" Text="Back " />
                    <asp:Button ID="Button3" runat="server" CssClass="sabe_and_complete_later" OnClick="btnSaveAndContinue_Click" TabIndex="22" Text="Save and Complete Later" />
                    <asp:Button ID="Button4" runat="server" CssClass="next_step" OnClick="btnNextStep_Click" TabIndex="23" Text="Next" />--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton77" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton79" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton80" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>


                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 5--%>
    <asp:View ID="ViewMIncom" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton35" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton36" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton37" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">5</li>
                <li><asp:LinkButton ID="LinkButton38" runat="server" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton39" runat="server" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton40" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton41" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton42" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton4" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 40%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <h2>Monthly Income</h2>
                    <p>
                        Please provide us your current income information. Enter your total <b>monthly</b> income before taxes from your current
                        employment(s) and the <b>monthly</b> average amounts for any overtime, bonuses, or commissions you received in the previous
                        twelve months.
                    </p>
                    
                    <div class="css-column-left">
                        <p class="css-title">Borrower</p>
                       
                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_BASE" runat="server" TabIndex="1" CssClass="BorrowerBase" Placeholder="* Base Employment Income" data-required="true"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_OVERTIME" runat="server" TabIndex="2" CssClass="BorrowerBase" Placeholder="Overtime"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_BONUSES" runat="server" TabIndex="3" CssClass="BorrowerBase" Placeholder="Bonuses"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_COMMISSIONS" runat="server" TabIndex="4" CssClass="BorrowerBase" Placeholder="Commissions"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_DIVIDENTS" runat="server" TabIndex="5" CssClass="BorrowerBase" Placeholder="Dividends/Interest"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_RENTAL_INC" runat="server" TabIndex="6" CssClass="BorrowerBase" Placeholder="Net Rental Income"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_OTHER_INC" runat="server" TabIndex="7" CssClass="BorrowerBase" Placeholder="Other Income"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_TOTAL_INC" ReadOnly="true" TabIndex="8" CssClass="BorrowerTotal" Value="Total" runat="server"></asp:TextBox>
                        </div>
                    </div>
                    <div class="css-column-right">
                        <p class="css-title">Co-Borrower</p>
                        

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_BASE_CB" runat="server"  TabIndex="9" CssClass="CoBorrowerBase" Placeholder="Base Employment Income"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_OVERTIME_CB" runat="server" TabIndex="10" CssClass="CoBorrowerBase" Placeholder="Overtime"></asp:TextBox>
                        </div>


                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_BONUSES_CB" runat="server" TabIndex="11" CssClass="CoBorrowerBase" Placeholder="Bonuses"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_COMMISSIONS_CB" runat="server" TabIndex="12" CssClass="CoBorrowerBase" Placeholder="Commissions"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_DIVIDENTS_CB" runat="server" TabIndex="13" CssClass="CoBorrowerBase" Placeholder="Dividends/Interest"></asp:TextBox>
                        </div>


                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_RENTAL_INC_CB" runat="server" TabIndex="14" CssClass="CoBorrowerBase" Placeholder="Net Rental Income"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_OTHER_INC_CB" runat="server" TabIndex="15" CssClass="CoBorrowerBase" Placeholder="Other Income"></asp:TextBox>
                        </div>

                        <div class="css-form-group">
                            <asp:TextBox ID="edtAPP_INC_TOTAL_INC_CB" ReadOnly="true" TabIndex="16" CssClass="CoBorrowerTotal" Value="Total" runat="server"></asp:TextBox>
                        </div>
                    </div>
                    <div class="clear"></div>


                    <%--<asp:Button TabIndex="17" ID="Button16" runat="server" CssClass="back_step keepvalid" Text="Back " OnClick="btnBack_Click"></asp:Button>
                    <asp:Button TabIndex="18" ID="btnSaveAndContinue_ViewMIncom" runat="server" CssClass="sabe_and_complete_later" Text="Save and Complete Later" OnClick="btnSaveAndContinue_Click"></asp:Button>
                    <asp:Button TabIndex="19" CssClass="next_step" OnClick="btnNextStep_Click" ID="Button6" runat="server" Text="Next"></asp:Button>--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton81" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton82" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton91" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 6--%>
    <asp:View ID="ViewASSETS" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton43" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton44" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton45" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton46" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">6</li>
                <li><asp:LinkButton ID="LinkButton47" runat="server" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton48" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton49" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton50" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton5" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 48%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper" id="no-more-tables">
                    <h2>Assets</h2>

                    <table style="width: 100%; text-align: center;" border="0">
                        <tr class="td2">
                            <td colspan="5">Borrower Liquid Assets</td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Type Of Account</td>
                            <td>Institution Name(s)</td>
                            <td>Account Number</td>
                            <td>Total Balance</td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">
                                <asp:DropDownList runat="server" ID="AssetType1" CssClass="">
                                    <asp:ListItem Text="Select Value" Value="" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="Checking Account" Value="Checking Account"></asp:ListItem>
                                    <asp:ListItem Text="Savings Account" Value="Savings Account"></asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetInstitution1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetAccount1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetBalance1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">
                                <asp:DropDownList runat="server" ID="AssetType2" CssClass="">
                                    <asp:ListItem Text="Select Value" Value="" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="Checking Account" Value="Checking Account"></asp:ListItem>
                                    <asp:ListItem Text="Savings Account" Value="Savings Account"></asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetInstitution2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetAccount2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetBalance2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">
                                <asp:DropDownList runat="server" ID="AssetType3" CssClass="">
                                    <asp:ListItem Text="Select Value" Value="" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="Checking Account" Value="Checking Account"></asp:ListItem>
                                    <asp:ListItem Text="Savings Account" Value="Savings Account"></asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetInstitution3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetAccount3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetBalance3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">
                                <asp:DropDownList runat="server" ID="AssetType4" CssClass="">
                                    <asp:ListItem Text="Select Value" Value="" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="Checking Account" Value="Checking Account"></asp:ListItem>
                                    <asp:ListItem Text="Savings Account" Value="Savings Account"></asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetInstitution4" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetAccount4" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <asp:TextBox ID="AssetBalance4" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Cash Deposit Descr</td>
                            <td>
                                <asp:TextBox ID="CashDepositDescr1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Deposit Value</td>
                            <td>
                                <asp:TextBox ID="CashDepositVal1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Cash Deposit Descr</td>
                            <td>
                                <asp:TextBox ID="CashDepositDescr2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Deposit Value</td>
                            <td>
                                <asp:TextBox ID="CashDepositVal2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="3">Invested Interest in Retirement Fund</td>
                            <td colspan="2">
                                <asp:TextBox ID="VestedInterestInRF" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="3">Net Worth of Business Owned</td>
                            <td colspan="2">
                                <asp:TextBox ID="NetWorthOfBusinessOwned" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5"><b>Stocks and Bonds</b></td>
                        </tr>
                        <tr>
                            <td colspan="2">Company Name & Account #</td>
                            <td>
                                <asp:TextBox ID="StocksBondsCompNameAccount1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="StocksBondsVal1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">Company Name & Account #</td>
                            <td>
                                <asp:TextBox ID="StocksBondsCompNameAccount2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="StocksBondsVal2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">Company Name & Account #</td>
                            <td>
                                <asp:TextBox ID="StocksBondsCompNameAccount3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="StocksBondsVal3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="5">Life Insurance</td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Face Amount</td>
                            <td>
                                <asp:TextBox ID="LInsuranceFaceAmount" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>Market Value</td>
                            <td>
                                <asp:TextBox ID="LInsuranceMarketValue" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5"><b>Automobiles Owned</b></td>
                        </tr>
                        <tr>
                            <td colspan="2">Make and Year</td>
                            <td>
                                <asp:TextBox runat="server" ID="AutoMakeAndYear1" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AutoVal1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">Make and Year</td>
                            <td>
                                <asp:TextBox runat="server" ID="AutoMakeAndYear2" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AutoVal2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">Make and Year</td>
                            <td>
                                <asp:TextBox runat="server" ID="AutoMakeAndYear3" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AutoVal3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="5">Other Assets</td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Description</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherDescr1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherVal1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Description</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherDescr2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherVal2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Description</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherDescr3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherVal3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                        <tr class="td2">
                            <td colspan="2">Description</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherDescr4" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>Value</td>
                            <td>
                                <asp:TextBox ID="AssetsOtherVal4" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                        </tr>
                    </table>

                    <%--<asp:Button CssClass="back_step keepvalid" ID="Button5" runat="server" Text="Back " OnClick="btnBack_Click" />
                    <asp:Button CssClass="sabe_and_complete_later" Visible="true" ID="Button9" runat="server" Text="Save and Complete Later" OnClick="btnSaveAndContinue_Click" />
                    <asp:Button CssClass="next_step" ID="Button10" runat="server" Text="Next" OnClick="btnNextStep_Click" />--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton92" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton93" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton94" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 7--%>
    <asp:View ID="ViewLiabilities" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton51" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton52" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton53" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton54" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton55" runat="server" CssClass="keepvalid" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">7</li>
                <li><asp:LinkButton ID="LinkButton56" runat="server" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton57" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton58" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton6" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 57%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper" id="Div1">
                    <h2>Liabilities</h2>
                    
                    <table style="width: 100%" border="0">
                        <tr class="show-desktop hide-phone hide-tablet">
                            <td>Company Name</td>
                            <td>Type</td>
                            <td>Balance</td>
                            <td>Payment</td>
                            <td>Months Left</td>
                            <td>Paid Off</td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType1" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment1" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft1" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff1" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType2" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment2" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft2" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff2" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType3" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment3" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft3" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff3" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName4" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType4" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance4" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment4" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft4" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff4" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName5" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType5" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance5" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment5" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft5" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff5" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName6" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType6" runat="server">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance6" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment6" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft6" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff6" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Company Name</label>
                                <asp:TextBox ID="LiaCompanyName7" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Type</label>
                                <asp:DropDownList ID="LiaType7" runat="server" CssClass="">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Balance</label>
                                <asp:TextBox ID="LiaBalance7" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Payment</label>
                                <asp:TextBox ID="LiaPayment7" runat="server" CssClass="ammount"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Months Left</label>
                                <asp:TextBox ID="LiaMosLeft7" runat="server" CssClass=""></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Paid Off</label>
                                <asp:CheckBox ID="LiaPaidOff7" runat="server" CssClass="" Text="Yes" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: right">
                                <label class="hide-phone hide-tablet">Total &nbsp;&nbsp;</label></td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Total Balance</label>
                                <asp:TextBox ReadOnly="true" ID="total1" runat="server"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Total Payment</label>
                                <asp:TextBox ReadOnly="true" ID="total2" runat="server"></asp:TextBox>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Total Months Left</label>
                                <asp:TextBox ReadOnly="true" ID="total3" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                    </table>

                    <%--<asp:Button ID="Button20" runat="server" CssClass="back_step keepvalid" Text="Back " OnClick="btnBack_Click" />
                    <asp:Button UseSubmitBehavior="true" ID="btnSaveAndContinueLiabilities" runat="server" Text="Save and Complete Later" CssClass="sabe_and_complete_later" OnClick="btnSaveAndContinue_Click" />
                    <asp:Button ValidationGroup="loan" CssClass="next_step" class="btn-next btn-set-next" ID="bNextStepLoanLiabilities" runat="server" Text="Next" OnClick="btnNextStep_Click" />--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton95" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton96" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton97" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 8--%>
    <asp:View ID="MonthlyExpenses" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton59" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton60" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton61" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton62" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton63" runat="server" CssClass="keepvalid" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton64" runat="server" CssClass="keepvalid" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">8</li>
                <li><asp:LinkButton ID="LinkButton65" runat="server" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton66" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton7" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 65%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <h2>Current Monthly Housing Expenses</h2>
                    
                    <div class="css-form-group">
                        <asp:TextBox ID="MHERent" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly payment for rent on the borrower's primary residence."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHE1stMrtgP" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly first mortgage payment."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHEOthrMrtgP" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly mortgage payments, in addition to the first mortgage."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHEHazIns" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly hazard insurance premium."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHERETaxes" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly property tax payments."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHEMtgIns" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly mortgage insurance premium, if any."></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHEHOADues" runat="server" CssClass="CalcRent ammount" Placeholder="Monthly homeowner's association dues, if any"></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="MHEOther" runat="server" CssClass="ammount CalcRent" Placeholder="Other Current monthly housing expenses not documented above"></asp:TextBox>
                    </div>

                    <div class="css-form-group">
                        <asp:TextBox ID="totalcurrentlmonth" runat="server" CssClass="CalcRentTotal" value="Total" ReadOnly="True"></asp:TextBox>
                     </div>

                    <%--<asp:Button ID="Button7" runat="server" CssClass="back_step keepvalid" Text="Back" OnClick="btnBack_Click" />
                    <asp:Button Visible="true" ID="Button8" runat="server" CssClass="sabe_and_complete_later" Text="Save and Complete Later" OnClick="btnSaveAndContinue_Click" ValidationGroup="MonExp" />
                    <asp:Button CssClass="next_step" ID="Button15" runat="server" Text="Next" OnClick="btnNextStep_Click" ValidationGroup="MonExp" />--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton98" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton99" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ValidationGroup="MonExp" ID="LinkButton108" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>
                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 9--%>
    <asp:View ID="ViewRealEstate" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton67" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton68" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton69" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton70" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton71" runat="server" CssClass="keepvalid" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton72" runat="server" CssClass="keepvalid" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton73" runat="server" CssClass="keepvalid" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">9</li>
                <li><asp:LinkButton ID="LinkButton74" runat="server" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li><asp:LinkButton ID="LinkButton8" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 73%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <h2>Real Estate</h2>
                    <p>
                        Please provide information about the real estate you currently own. If you indicated that you own your current residence,
                        we've pre-filled it for you.
                    </p>
                    
                    <div id="tabber" class="simpleTabs">
                        <ul class="simpleTabsNavigation" rel="tabs">
                            <li class="current"><a href="#">Property 1</a></li>
                            <li><a href="#">Property 2</a></li>
                            <li><a href="#">Property 3</a></li>
                            <span class="clearfix"></span>
                        </ul>
                        <div id="tabber_div_0" class="simpleTabsContent">
                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_ADDRESS" runat="server" CssClass="" Placeholder="Property Address Number"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_CITY" runat="server" CssClass="" Placeholder="Property City"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_STATE" runat="server" CssClass="css-block" Text="Property State"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_STATE" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_ZIP" runat="server" CssClass="zip-code" Placeholder="Property Zip"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_STATUS" runat="server" CssClass="css-block" Text="Property Status"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_STATUS" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_TYPE" runat="server" CssClass="css-block" Text="Property Type"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_TYPE" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MARKET_VALUE" runat="server" CssClass="ammount" Placeholder="Present Market Value"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORTGAGE" runat="server" CssClass="ammount" Placeholder="Mortgage / Lien Amounts"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORT_PAY" runat="server" CssClass="ammount" Placeholder="Mortgage Payments (P&amp;I)"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MONTH_PAY" runat="server" CssClass="ammount" Placeholder="Monthly Insurance/ Taxes/Misc"></asp:TextBox>
                            </div>
                        </div>
                        <div id="tabber_div_1" class="simpleTabsContent nocurrentTab">
                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_ADDRESS2" runat="server" CssClass="" Placeholder="Property Address Number"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_CITY2" runat="server" CssClass="" Placeholder="Property City"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_STATE2" runat="server" CssClass="css-block" Text="Property State"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_STATE2" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_ZIP2" runat="server" CssClass="zip-code" Placeholder="Property Zip"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_STATUS2" runat="server" CssClass="css-block" Text="Property Status"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_STATUS2" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_TYPE2" runat="server" CssClass="css-block" Text="Property Type"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_TYPE2" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MARKET_VALUE2" runat="server" CssClass="ammount" Placeholder="Present Market Value"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORTGAGE2" runat="server" CssClass="ammount" Placeholder="Mortgage / Lien Amounts"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORT_PAY2" runat="server" CssClass="ammount" Placeholder="Mortgage Payments(P&amp;I)"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MONTH_PAY2" runat="server" CssClass="ammount" Placeholder="Monthly Insurance/ Taxes/Misc"></asp:TextBox>
                            </div>
                        </div>
                        <div id="tabber_div_2" class="simpleTabsContent nocurrentTab">
                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_ADDRESS3" runat="server" CssClass="" Placeholder="Property Address Number"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_CITY3" runat="server" CssClass="" Placeholder="Property City"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_STATE3" runat="server" CssClass="css-block" Text="Property State"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_STATE3" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_PROPERTY_ZIP3" runat="server" CssClass="zip-code" Placeholder="Property Zip"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_STATUS3" runat="server" CssClass="css-block" Text="Property Status"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_STATUS3" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:Label ID="lblAPP_REAL_PROPERTY_TYPE3" runat="server" CssClass="css-block" Text="Property Type"></asp:Label>
                                <asp:DropDownList ID="edtAPP_REAL_PROPERTY_TYPE3" runat="server" CssClass="">
                                </asp:DropDownList>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MARKET_VALUE3" runat="server" CssClass="ammount" Placeholder="Present Market Value"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORTGAGE3" runat="server" CssClass="ammount" Placeholder="Mortgage / Lien Amounts"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MORT_PAY3" runat="server" CssClass="ammount" Placeholder="Mortgage Payments(P&amp;I)"></asp:TextBox>
                            </div>

                            <div class="css-form-group">
                                <asp:TextBox ID="edtAPP_REAL_MONTH_PAY3" runat="server" CssClass="ammount" Placeholder="Monthly Insurance/ Taxes/Misc"></asp:TextBox>
                            </div>
                        </div>
                        <br />

                        <%--<asp:Button ID="Button2" runat="server" CssClass="back_step keepvalid" OnClick="btnBack_Click" Text="Back " />
                        <asp:Button ID="Button11" runat="server" CssClass="sabe_and_complete_later" OnClick="btnSaveAndContinue_Click" Text="Save and Complete Later" />
                        <asp:Button ID="Button12" runat="server" CssClass="next_step" OnClick="btnNextStep_Click" Text="Next" />--%>

                        <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton109" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton110" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton111" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    </div>
                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 10--%>
    <asp:View ID="ViewStandardDeclarations" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton100" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton101" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton102" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton103" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton104" runat="server" CssClass="keepvalid" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton105" runat="server" CssClass="keepvalid" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton106" runat="server" CssClass="keepvalid" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton107" runat="server" CssClass="keepvalid" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">10</li>
                <li><asp:LinkButton ID="LinkButton9" runat="server" Text="11" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 82%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <h2>Standard Declarations</h2>
                <p>
                    Federal laws and regulations require that we ask you to indicate, 
                    "Yes" or "No" to the following Standard Declarations.
                </p>
                
                <div class="css-wrapper" id="Div2">
                    <table border="0">
                        <tr class="hide-phone hide-tablet">
                            <td></td>
                            <td>
                                <b>Borrower</b>
                            </td>
                            <td>
                                <b>Co-Borrower</b>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_A" runat="server" CssClass="" Text="Are there any outstanding judgments against you?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_A" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationA" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_B" runat="server" CssClass="" Text="Have you been declared bankrupt within the past 7 years?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_B" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationB" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_C" runat="server" CssClass="" Text="Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_C" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationC" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_D" runat="server" CssClass="" Text="Are you a party to a lawsuit?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_D" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationD" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_E" runat="server" CssClass="" Text="Have you directly or indirectly been obligated on any loan which resulted in foreclosure, transfer of title in lieu of foreclosure, or judgment?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_E" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationE" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_F" runat="server" CssClass="" Text="Are you presently delinquent or in default on any Federal debt or any other loan, mortgage, financial obligation, bond, or loan guarantee?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_F" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationF" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_G" runat="server" CssClass="" Text="Are you obligated to pay alimony, child support, or separate maintenance?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_G" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationG" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_H" runat="server" CssClass="" Text="Is any part of the down payment borrowed?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_H" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationH" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_I" runat="server" CssClass="" Text="Are you a co-maker or endorser on a note?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_I" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationI" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_J" runat="server" CssClass="" Text="Are you a U.S. citizen?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_J" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationJ" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_K" runat="server" CssClass="" Text="Are you a permanent resident alien?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_K" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationK" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_L" runat="server" CssClass="" Text="Do you intend to occupy the property as your primary residence?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_L" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationL" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_M" runat="server" CssClass="" Text="Have you had an ownership interest in a property in the last three years?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:RadioButtonList ID="edtAPP_Q_M" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:RadioButtonList ID="edtCoDeclarationM" runat="server" CssClass="" RepeatDirection="Horizontal">
                                    <asp:ListItem Value="True">Yes</asp:ListItem>
                                    <asp:ListItem Value="False">No</asp:ListItem>
                                </asp:RadioButtonList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblAPP_Q_1" runat="server" CssClass="" Text="What type of property did you own - principal residence, second home, or investment property?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:DropDownList ID="edtAPP_Q_1" runat="server" CssClass="">
                                    <asp:ListItem Selected="True" Value="">Please Select</asp:ListItem>
                                    <asp:ListItem Value="Investment Property">Investment Property</asp:ListItem>
                                    <asp:ListItem Value="Primary Residence">Primary Residence</asp:ListItem>
                                    <asp:ListItem Value="Secondary Residence">Secondary Residence</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:DropDownList ID="edtCoDeclaration1" runat="server" CssClass="">
                                    <asp:ListItem Selected="True" Value="">Please Select</asp:ListItem>
                                    <asp:ListItem Value="Investment Property">Investment Property</asp:ListItem>
                                    <asp:ListItem Value="Primary Residence">Primary Residence</asp:ListItem>
                                    <asp:ListItem Value="Secondary Residence">Secondary Residence</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr class="td2 td3">
                            <td>
                                <asp:Label ID="lblAPP_Q_2" runat="server" CssClass="" Text="How registered the title of ownership of the house - his only name, jointly with your spouse, or jointly with another person?"></asp:Label>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Borrower</label>
                                <asp:DropDownList ID="edtAPP_Q_2" runat="server" CssClass="">
                                    <asp:ListItem Selected="true" Value="">Please Select</asp:ListItem>
                                    <asp:ListItem Value="Joint With Other Then Spouse">Joint With Other Then Spouse</asp:ListItem>
                                    <asp:ListItem Value="Joint With Spouse">Joint With Spouse</asp:ListItem>
                                    <asp:ListItem Value="Sole (Individual)">Sole (Individual)</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="hide-desktop show-phone show-tablet">Co-Borrower</label>
                                <asp:DropDownList ID="edtCoDeclaration2" runat="server" CssClass="">
                                    <asp:ListItem Selected="true" Value="">Please Select</asp:ListItem>
                                    <asp:ListItem Value="Joint With Other Then Spouse">Joint With Other Then Spouse</asp:ListItem>
                                    <asp:ListItem Value="Joint With Spouse">Joint With Spouse</asp:ListItem>
                                    <asp:ListItem Value="Sole (Individual)">Sole (Individual)</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>
                    </table>
                    <br>

                    <%--<asp:Button ID="Button1" runat="server" CssClass="back_step keepvalid" Text="Back " OnClick="btnBack_Click" />
                    <asp:Button Visible="true" ID="Button13" runat="server" CssClass="sabe_and_complete_later" Text="Save and Complete Later" OnClick="btnSaveAndContinue_Click" />
                    <asp:Button CssClass="next_step" ID="Button14" runat="server" Text="Next" OnClick="btnNextStep_Click"></asp:Button>--%>

                    <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="LinkButton112" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="LinkButton113" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Save and Complete Later</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnNextStep_Click" ID="LinkButton114" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Next</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                </div>
            </div>
        </div>
    </asp:View>

    <%--STEP 11--%>
    <asp:View ID="ViewGovernmentMonitoring" runat="server">
        <ul class="paginator">
            <div class="container">
                <li class="nohover passed">1</li>
                <li class="passed"><asp:LinkButton ID="LinkButton83" runat="server" CssClass="keepvalid" Text="2" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton84" runat="server" CssClass="keepvalid" Text="3" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton85" runat="server" CssClass="keepvalid" Text="4" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton86" runat="server" CssClass="keepvalid" Text="5" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton87" runat="server" CssClass="keepvalid" Text="6" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton88" runat="server" CssClass="keepvalid" Text="7" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton89" runat="server" CssClass="keepvalid" Text="8" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton90" runat="server" CssClass="keepvalid" Text="9" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="passed"><asp:LinkButton ID="LinkButton11" runat="server" CssClass="keepvalid" Text="10" OnClick="LinkButton1_Click"></asp:LinkButton></li>
                <li class="active">11</li>
                <li class="nohover">12</li>
                <span class="clear"></span>
                <div class="progressbg">
                    <div class="progress" style="width: 90%"></div>
                </div>
                <span class="clear"></span>
            </div>
        </ul>
        <div class="css-wrapp-app">
            <div class="fullApplicationForm">
                <div class="css-wrapper">
                    <h2>Government Monitoring</h2>
                    <p>
                        The following information is requested by the Federal Government for certain types of loans related to a dwelling, in order
                        to monitor the Lender's compliance with equal credit opportunity, fair housing and home mortgage disclosure laws. You are
                        not required to furnish this information, but are encouraged to do so. The law provides that a lender may neither discriminate
                        on the basis of this information, nor on whether you choose to furnish it. However, if you choose not to furnish it, under
                        Federal regulations this Lender is required to note race and sex on the basis of visual observation or surname. If you do
                        not wish to furnish the above information, please check the box below. (Lender must review the above material to assure
                        that the disclosures satisfy all requirements to which the Lender is subject under applicable state law for the particular
                        type of loan applied for.)
                    </p>
                    
                    <div class="css-wrapper">
                        <div class="css-column-left">
                            <p class="css-title">Borrower</p>
                            <br />
                            <asp:Label ID="Label4" runat="server" Text="Ethnicity" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtEthnicity" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="Hispanic or Latino">Hispanic or Latino</asp:ListItem>
                                <asp:ListItem Value="Not Hispanic or Latino">Not Hispanic or Latino</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                            <br />
                            <asp:Label ID="Label5" runat="server" Text="Race/National Origin" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtRace" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="American Indian or Alaska Native">American Indian or Alaska Native</asp:ListItem>
                                <asp:ListItem Value="Asian">Asian</asp:ListItem>
                                <asp:ListItem Value="Black or African American">Black or African American</asp:ListItem>
                                <asp:ListItem Value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</asp:ListItem>
                                <asp:ListItem Value="White">White</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                            <br />
                            <asp:Label ID="Label8" runat="server" Text="Sex" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtSex" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="Female">Female</asp:ListItem>
                                <asp:ListItem Value="Male">Male</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                        </div>
                        <div class="css-column-right">
                            <p class="css-title">Co-Borrower</p>
                            <br />
                            <asp:Label ID="Label6" runat="server" Text="Ethnicity" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtCoEthnicity" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="Hispanic or Latino">Hispanic or Latino</asp:ListItem>
                                <asp:ListItem Value="Not Hispanic or Latino">Not Hispanic or Latino</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                            <br />
                            <asp:Label ID="Label7" runat="server" Text="Race/National Origin" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtCoRace" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="American Indian or Alaska Native">American Indian or Alaska Native</asp:ListItem>
                                <asp:ListItem Value="Asian">Asian</asp:ListItem>
                                <asp:ListItem Value="Black or African American">Black or African American</asp:ListItem>
                                <asp:ListItem Value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</asp:ListItem>
                                <asp:ListItem Value="White">White</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                            <br />
                            <asp:Label ID="Label9" runat="server" Text="Sex" CssClass=""></asp:Label>
                            <asp:RadioButtonList ID="edtCoSex" runat="server" CssClass="">
                                <asp:ListItem Value="No wish">I do not wish to furnish this information</asp:ListItem>
                                <asp:ListItem Value="Female">Female</asp:ListItem>
                                <asp:ListItem Value="Male">Male</asp:ListItem>
                                <asp:ListItem Selected="True" Value="">Not applicable</asp:ListItem>
                            </asp:RadioButtonList>
                        </div>
                        <div class="clearfix">
                        </div>
                        <div id="cAutorization">
                            <p>
                                * Credit Check Authorization
                                <br />
                                During your mortgage loan application process, this institution performs a Credit Check that requires us to obtain and confirm information regarding your personal and financial background. 
                                This Credit Check includes, but is not limited to, your marital status, number of dependents, current and past employers, current deposit accounts, 
                                current and past consumer credit accounts, and your mortgage and/or rental history.
                            </p>
                        </div>
                        <div class="css-form-group">
                            <asp:CheckBox ID="chkCreditCheckAuthorization" runat="server" Text="I AUTHORIZE this Credit Check" data-required="true" />
                        </div>
                        <br />


                        <%--<asp:Button ID="btnBack" runat="server" CssClass="back_step keepvalid" OnClick="btnBack_Click" Text="Back" />
                        <asp:Button ID="btnUpdate" runat="server" CssClass="sabe_and_complete_later" OnClick="btnSaveAndContinue_Click" Text="Update" />
                        <asp:Button ID="btnSubmit" runat="server" CssClass="send_info" OnClick="btnSaveAndContinue_Click" Text="Submit" />--%>

                        <asp:LinkButton runat="server" OnClick="btnBack_Click" ID="btnBack" class="simulate-button simulate-button-step ladda-button lock-submit keepvalid" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Back</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="btnUpdate" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Update</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    <asp:LinkButton runat="server" OnClick="btnSaveAndContinue_Click" ID="btnSubmit" class="simulate-button simulate-button-step ladda-button lock-submit" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Submit</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>

                    </div>
                </div>
            </div>
        </div>
    </asp:View>

    <!-- TANK YOU -->
    <asp:View ID="View12" runat="server">
    
        <script>
            $('.paginator').remove(); $('.sweet-alert').closest('.container').find('div').first().css({ minHeight: '120px' });
        </script>

        <div class="sweet-overlay" style="display: block; opacity: 1"></div>

        <!-- SweetAlert box -->
        <div class="sweet-alert sweet-alert showSweetAlert visible" style="display: block">
            <div class="icon success animate">
                <span class="line tip animateSuccessTip"></span>
                <span class="line long animateSuccessLong"></span>
                <div class="placeholder"></div>
                <div class="fix"></div>
            </div>
            <h2>Good Job
                <asp:Label ID="Message" runat="server"></asp:Label>!</h2>
          
            <% if (NewClientSites.UIF.CurrentLO.HasLo){ %>
            <p>Your information has been sent to:</p>

            <div class="css-lo-card">
                <div class="css-lo-picture"><img src="<%= NewClientSites.UIF.CurrentLO.PhotoUrl.Substring(6,63) %>"></div>
                <div class="css-lo-name"><%= NewClientSites.UIF.CurrentLO.FullName %></div>
                <div class="css-lo-title"><%= NewClientSites.UIF.CurrentLO.Title %></div>
            </div>
            <% }else{ %>
            <p>Your information has been sent!</p>
            <% } %>


            <button class="css-confirm" type="button" onclick="window.location.href = '<%= link %>';">Continue</button>
        </div>
               
    </asp:View>
</asp:MultiView>

<asp:Label ID="lblError" runat="server" Text="" Font-Bold="True" ForeColor="Red"></asp:Label>

<%--HIDEN FIELDS--%>
<asp:Panel ID="extraControls" runat="server" Visible="False">
    <!--Step 2-->
    <asp:TextBox ID="propertyWillGrossRnt" runat="server" CssClass=""></asp:TextBox>
    <asp:TextBox ID="edtAPP_YEAR_BUILT" runat="server" CssClass="" Text="Year Home Was Built"></asp:TextBox>
    <br />
    <asp:Label ID="lblAPP_PROPERTY_TYPE" runat="server" CssClass="" Text="Property Type"></asp:Label>
    <asp:DropDownList ID="edtAPP_PROPERTY_TYPE" runat="server" CssClass="">
        <asp:ListItem Text="Commercial - Non-Residential" Value="Commercial - Non-Residential" />
        <asp:ListItem Text="Condominium" Value="Condominium" />
        <asp:ListItem Text="Co-Operative" Value="Co-Operative" />
        <asp:ListItem Text="Farm" Value="Farm" />
        <asp:ListItem Text="Home - Business Combined" Value="Home - Business Combined" />
        <asp:ListItem Text="Land" Value="Land" />
        <asp:ListItem Text="Manufactured/Mobile Home" Value="Manufactured/Mobile Home" />
        <asp:ListItem Text="Mixed Use - Residential" Value="Mixed Use - Residential" />
        <asp:ListItem Text="Multifamily (More than 4 units)" Value="Multifamily (More than 4 units)" />
        <asp:ListItem Text="Single Family" Value="Single Family" Selected="True" />
        <asp:ListItem Text="Townhouse" Value="Townhouse" />
        <asp:ListItem Text="Two-to-Four-Unit Property" Value="Two-to-Four-Unit Property" />
    </asp:DropDownList>
    <br />
    <asp:Label ID="lblAPP_OCCUPANCY_TYPE" runat="server" Font-Bold="true" Text="* Occupancy Type"></asp:Label>
    <asp:DropDownList ID="edtAPP_OCCUPANCY_TYPE" runat="server" CssClass="">
        <asp:ListItem Text="Primary Residence" Value="Primary Residence" Selected="True" />
        <asp:ListItem Text="Secondary Residence" Value="Secondary Residence" />
        <asp:ListItem Text="Investment Property" Value="Investment Property" />
    </asp:DropDownList>
    <br />
    Occup Rate:
    <asp:TextBox ID="propertyWillBeOccupRate" runat="server" CssClass=""></asp:TextBox>
    %

    <!--Step 4-->
    <asp:DropDownList ID="DropDownPreferredLanguage" runat="server" CssClass="">
        <asp:ListItem Text="English" Value="English" Selected="True" />
        <asp:ListItem Text="Spanish" Value="Spanish" />
    </asp:DropDownList>

    <!--Step 5-->
    <asp:DropDownList ID="edtAPP_INC_ADD_SOURCE2" runat="server" CssClass="applynowfull_DropDownList" TabIndex="9">
    </asp:DropDownList>
    <br />
    <asp:TextBox ID="edtAPP_INC_ADD_VALUE2" runat="server" CssClass="" TabIndex="10"></asp:TextBox>

    <!--Step 8-->
    <asp:TextBox ID="MHEOthrMrtgPprop" Width="97%" runat="server" CssClass=""></asp:TextBox>
    <asp:TextBox ID="MHEHazInsProp" Width="97%" runat="server" CssClass=""></asp:TextBox>
    <asp:TextBox ID="MHERETaxesProp" Width="97%" runat="server" CssClass=""></asp:TextBox>
    <asp:TextBox ID="MHEMtgInsProp" Width="97%" runat="server" CssClass=""></asp:TextBox>
    <asp:TextBox ID="MHEHOADuesProp" Width="97%" runat="server" CssClass=""></asp:TextBox>
</asp:Panel>

<asp:HiddenField ID="u" runat="server" />

<!--[if lte IE 8]>
</div>
<![endif]-->

<div class="css-theatre"></div>

<%--NOTIFICATION--%>
<div class="css-notifications">
    <div class="css-message">
        <span class="form-css-notification-icon">!</span>
        <h1>Something is wrong.</h1>
        Please make sure you filled all required fields.<br>

    </div>
</div>


<script type="text/javascript" src="<%= path %>__apps/js/FullApplyNow.js"></script>