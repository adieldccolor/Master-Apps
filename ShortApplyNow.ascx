<%@ Control Language="C#" AutoEventWireup="true" CodeFile="./__apps/forms/ShortApplyNow.ascx.cs" Inherits="ShortApplyNow" %>

<!-- 
* Short Apply Now v2.0
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

<link rel="stylesheet" type="text/css" href="<%= path %>__apps/css/ShortApplyNow.css">

<!--[if lte IE 9]>
<div class="css-browser-wrapper ie">
<![endif]-->

<div class="shortApplicationForm">
    <asp:PlaceHolder runat="server" ID="formData">

 



        <div class="css-wrapper">

            <div class="js-actions-ie">
                Your browser is outdated, please consider to update it with a newer version or try another browser. Recommendations: 
                <ul>
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Internet Explorer 9+</li>
                </ul></div>

            <div class="mav-plug b col-md-12" id="tabs">
                <%--STEP 1--%>
                <div class="mav-content css-form-step active col-md-12" id="part1b">
                    <div class="mav-wrap">
                        <h2>Step 1: Personal Information</h2>
                        <div class="css-form-group" aria-required="true">
                            <span class="css-label">* First Name</span>
                            <asp:TextBox runat="server" ID="firstName" placeholder="* First Name" Font-Bold="true" class="form-control" aria-required="true"></asp:TextBox>
                        </div>
                        <div class="css-form-group" aria-required="true">
                            <span class="css-label">* Last Name</span>
                            <asp:TextBox runat="server" ID="lastName" placeholder="* Last Name" Font-Bold="true" class="form-control" aria-required="true"></asp:TextBox>
                        </div>
                        <div class="css-form-group" aria-required="true">
                            <span class="css-label">* Email</span>
                            <asp:TextBox runat="server" ID="email" placeholder="* Email" Font-Bold="true" class="form-control" aria-required="true"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Home Phone</span>
                            <asp:TextBox runat="server" ID="phone" placeholder="Home Phone" class="form-control"></asp:TextBox>
                        </div>
                        <span class="error">Please fill the mandatory fields of the form</span>
                    </div>
                    <div class="mav-controller js-actions">
                        <a href="javascript:;"><span class="css-button" data-direction="next" data-validate-part="#part1b">Next</span></a>
                    </div>
                </div>

                <%--STEP 2--%>
                <div class="mav-content css-form-step col-md-12" id="part2b">
                    <div class="mav-wrap">
                        <h2>Step 2: Loan Information</h2>
                        <div class="css-form-group">
                            <span class="css-label">Loan Purpose</span>
                            <asp:DropDownList ID="edtAPP_LOAN_PURPOSE" runat="server" class="LoanProgram" style="width: 100%">
                                <asp:ListItem Text="Select Loan Purpose" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Purchase" Value="Purchase"></asp:ListItem>
                                <asp:ListItem Text="Refinance" Value="Refinance"></asp:ListItem>
                                <asp:ListItem Text="Construction" Value="Construction"></asp:ListItem>
                                <asp:ListItem Text="Construction - Perm" Value="Construction - Perm"></asp:ListItem>
                                <asp:ListItem Text="Other" Value="Other"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div id="refinance_purpose_options" class="custom_hide css-form-group" style="">
                            <span class="css-label">Refinance Loan Purpose</span>
                            <asp:DropDownList ID="edtAPP_REF_LOAN_PURPOSE" runat="server" class="LoanProgram form-control" style="width: 100%">
                                <asp:ListItem Text="Cash-Out" Value="Cash-Out"></asp:ListItem>
                                <asp:ListItem Text="No Cash-Out" Value="No Cash-Out" Selected="True"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group custom_hide">
                            <span class="css-label">Other Loan Purpose</span>
                            <asp:TextBox ID="LoanPurposeOther" runat="server" placeholder="Other Loan Purpose" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Property Value $</span>
                            <asp:TextBox runat="server" ID="PropertyEstimatedValue" rel="dollars" placeholder="Property Value $" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Credit:</span>
                            <asp:RadioButton ID="excellent" runat="server" Text="Excellent" GroupName="Credit" Checked="True" />
                            <asp:RadioButton ID="good" runat="server" Text="Good" GroupName="Credit" />
                            <asp:RadioButton ID="fair" runat="server" Text="Fair" GroupName="Credit" />
                            <asp:RadioButton ID="NotSure" runat="server" Text="Not sure" GroupName="Credit" />
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Loan Program</span>
                            <asp:DropDownList ID="ddlLoanProgram" runat="server" class="LoanProgram form-control" style="width: 100%">
                                <asp:ListItem Text="Select Loan Program" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Unsure" Value="Unsure"></asp:ListItem>
                                <asp:ListItem Text="Conforming 30 year fixed" Value="Conforming 30 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 30 year fixed biweekly" Value="Conforming 30 year fixed biweekly"></asp:ListItem>
                                <asp:ListItem Text="Conforming 20 year fixed" Value="Conforming 20 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 15 year fixed" Value="Conforming 15 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 15 year fixed biweekly" Value="Conforming 15 year fixed biweekly"></asp:ListItem>
                                <asp:ListItem Text="Conforming 10/1 ARM" Value="Conforming 10/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 30/7 or 7/1 ARM" Value="Conforming 30/7 or 7/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 30/5 or 5/1 ARM" Value="Conforming 30/5 or 5/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 3/1 ARM" Value="Conforming 3/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming Adjustable" Value="Conforming Adjustable"></asp:ListItem>
                                <asp:ListItem Text="Conforming 40 year fixed" Value="Conforming 40 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 10 year fixed" Value="Conforming 10 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 25 year fixed" Value="Conforming 25 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 30 year fixed" Value="Jumbo 30 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 30 year fixed biweekly" Value="Jumbo 30 year fixed biweekly"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 20 year fixed" Value="Jumbo 20 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 15 year fixed" Value="Jumbo 15 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 15 year fixed biweekly" Value="Jumbo 15 year fixed biweekly"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 10/1 ARM" Value="Jumbo 10/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 7/1 ARM" Value="Jumbo 7/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 5/1 ARM" Value="Jumbo 5/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 3/1 ARM" Value="Jumbo 3/1 ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo Adjustable" Value="Jumbo Adjustable"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 40 year fixed" Value="Jumbo 40 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 10 year fixed" Value="Jumbo 10 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 25 year fixed" Value="Jumbo 25 year fixed"></asp:ListItem>
                                <asp:ListItem Text="Conforming 1 month COFI ARM" Value="Conforming 1 month COFI ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 3 month COFI ARM" Value="Conforming 3 month COFI ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 6 mo CD ARM" Value="Conforming 6 mo CD ARM"></asp:ListItem>
                                <asp:ListItem Text="Conforming 1 year tbill ARM" Value="Conforming 1 year tbill ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 1 month COFI ARM" Value="Jumbo 1 month COFI ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 3 month COFI ARM" Value="Jumbo 3 month COFI ARM"></asp:ListItem>
                                <asp:ListItem Text="Jumbo 1 year tbill ARM" Value="Jumbo 1 year tbill ARM"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Loan Ammount</span>
                            <asp:TextBox runat="server" rel="dollars" ID="LoanAmount" placeholder="Loan amount you are applying for:* $" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">or % Down Payment</span>
                            <asp:TextBox runat="server" rel="digits" ID="LoanDownPayment" placeholder="or % Down payment" class="form-control"></asp:TextBox>
                        </div>
                        <span class="error">Please fill the mandatory fields of the form</span>
                    </div>
                    <div class="mav-controller js-actions">
                        <a href="javascript:;"><span class="css-button" data-direction="back">Back</span></a>
                        <a href="javascript:;"><span class="css-button" data-direction="next" data-validate-part="#part2b">Next</span></a>
                    </div>
                </div>

                <%--STEP 3--%>
                <div class="mav-content css-form-step col-md-12" id="part3b">
                    <div class="mav-wrap">
                        <h2>Step 3: Property Information</h2>
                        <div class="css-form-group">
                            <span class="css-label">Street Address</span>
                            <asp:TextBox runat="server" ID="StreetAddress" placeholder="Street Address" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">City</span>
                            <asp:TextBox runat="server" ID="city" placeholder="City" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">State</span>
                            <asp:DropDownList ID="ddlstate" runat="server" style="width: 100%" class="LoanProgram form-control">
                                <asp:ListItem Text="Select State" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Alabama" Value="AL"></asp:ListItem>
                                <asp:ListItem Text="Alaska" Value="AK"></asp:ListItem>
                                <asp:ListItem Text="Arizona" Value="AZ"></asp:ListItem>
                                <asp:ListItem Text="Arkansas" Value="AR"></asp:ListItem>
                                <asp:ListItem Text="California" Value="CA"></asp:ListItem>
                                <asp:ListItem Text="Colorado" Value="CO"></asp:ListItem>
                                <asp:ListItem Text="Connecticut" Value="CT"></asp:ListItem>
                                <asp:ListItem Text="Delaware" Value="DE"></asp:ListItem>
                                <asp:ListItem Text="DC" Value="District of Columbia"></asp:ListItem>
                                <asp:ListItem Text="Florida" Value="FL"></asp:ListItem>
                                <asp:ListItem Text="Georgia" Value="GA"></asp:ListItem>
                                <asp:ListItem Text="Hawaii" Value="HI"></asp:ListItem>
                                <asp:ListItem Text="Idaho" Value="ID"></asp:ListItem>
                                <asp:ListItem Text="Illinois" Value="IL"></asp:ListItem>
                                <asp:ListItem Text="Indiana" Value="IN"></asp:ListItem>
                                <asp:ListItem Text="Iowa" Value="IA"></asp:ListItem>
                                <asp:ListItem Text="Kansas" Value="KS"></asp:ListItem>
                                <asp:ListItem Text="Kentucky" Value="KY"></asp:ListItem>
                                <asp:ListItem Text="Louisiana" Value="LA"></asp:ListItem>
                                <asp:ListItem Text="Maine" Value="ME"></asp:ListItem>
                                <asp:ListItem Text="Maryland" Value="MD"></asp:ListItem>
                                <asp:ListItem Text="Massachusetts" Value="MA"></asp:ListItem>
                                <asp:ListItem Text="Michigan" Value="MI"></asp:ListItem>
                                <asp:ListItem Text="Minnesota" Value="MN"></asp:ListItem>
                                <asp:ListItem Text="Mississippi" Value="MS"></asp:ListItem>
                                <asp:ListItem Text="Missouri" Value="MO"></asp:ListItem>
                                <asp:ListItem Text="Montana" Value="MT"></asp:ListItem>
                                <asp:ListItem Text="Nebraska" Value="NE"></asp:ListItem>
                                <asp:ListItem Text="Nevada" Value="NV"></asp:ListItem>
                                <asp:ListItem Text="New Hampshire" Value="NH"></asp:ListItem>
                                <asp:ListItem Text="New Jersey" Value="NJ"></asp:ListItem>
                                <asp:ListItem Text="New Mexico" Value="NM"></asp:ListItem>
                                <asp:ListItem Text="New York" Value="NY"></asp:ListItem>
                                <asp:ListItem Text="North Carolina" Value="NC"></asp:ListItem>
                                <asp:ListItem Text="North Dakota" Value="ND"></asp:ListItem>
                                <asp:ListItem Text="Ohio" Value="OH"></asp:ListItem>
                                <asp:ListItem Text="Oklahoma" Value="OK"></asp:ListItem>
                                <asp:ListItem Text="Oregon" Value="OR"></asp:ListItem>
                                <asp:ListItem Text="Pennsylvania" Value="PA"></asp:ListItem>
                                <asp:ListItem Text="Rhode Island" Value="RI"></asp:ListItem>
                                <asp:ListItem Text="South Carolina" Value="SC"></asp:ListItem>
                                <asp:ListItem Text="South Dakota" Value="SD"></asp:ListItem>
                                <asp:ListItem Text="Tennessee" Value="TN"></asp:ListItem>
                                <asp:ListItem Text="Texas" Value="TX"></asp:ListItem>
                                <asp:ListItem Text="Utah" Value="UT"></asp:ListItem>
                                <asp:ListItem Text="Vermont" Value="VT"></asp:ListItem>
                                <asp:ListItem Text="Virginia" Value="VA"></asp:ListItem>
                                <asp:ListItem Text="Washington" Value="WA"></asp:ListItem>
                                <asp:ListItem Text="West Virginia" Value="WV"></asp:ListItem>
                                <asp:ListItem Text="Wisconsin" Value="WI"></asp:ListItem>
                                <asp:ListItem Text="Wyoming" Value="WY"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Zip</span>
                            <asp:TextBox runat="server" rel="zip" ID="zip" placeholder="Zip" class="form-control"></asp:TextBox>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Property Type</span>
                            <asp:DropDownList ID="ddlPropertyType" style="width: 100%" runat="server" class="LoanProgram form-control">
                                <asp:ListItem Text="Select Property Type" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Single family" Value="Single family"></asp:ListItem>
                                <asp:ListItem Text="Condominium" Value="Condominium"></asp:ListItem>
                                <asp:ListItem Text="Townhouse" Value="Townhouse"></asp:ListItem>
                                <asp:ListItem Text="Cooperative" Value="Cooperative"></asp:ListItem>
                                <asp:ListItem Text="Duplex" Value="Duplex"></asp:ListItem>
                                <asp:ListItem Text="Triplex" Value="Triplex"></asp:ListItem>
                                <asp:ListItem Text="Fourplex" Value="Fourplex"></asp:ListItem>
                                <asp:ListItem Text="Planned Unit Development" Value="Planned Unit Development"></asp:ListItem>
                                <asp:ListItem Text="Office" Value="Office"></asp:ListItem>
                                <asp:ListItem Text="Warehouse" Value="Warehouse"></asp:ListItem>
                                <asp:ListItem Text="Apartment Bldg." Value="Apartment Bldg."></asp:ListItem>
                                <asp:ListItem Text="Industrial" Value="Industrial"></asp:ListItem>
                                <asp:ListItem Text="Retail" Value="Retail"></asp:ListItem>
                                <asp:ListItem Text="Restaurant" Value="Restaurant"></asp:ListItem>
                                <asp:ListItem Text="Other" Value="Other"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">Property Will Be</span>
                            <asp:DropDownList ID="ddlPropertyWillBe" style="width: 100%" runat="server" class="LoanProgram form-control">
                                <asp:ListItem Text="Select Property Use" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Primary Residence" Value="Primary Residence"></asp:ListItem>
                                <asp:ListItem Text="Secondary Residence" Value="Secondary Residence"></asp:ListItem>
                                <asp:ListItem Text="Investment (rental)" Value="Investment (rental)"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group">
                            <span class="css-label">City</span>
                            <asp:DropDownList ID="ddlHowdidyouhearaboutus" runat="server" style="width: 100%" class="LoanProgram form-control">
                                <asp:ListItem Text="How did you hear about us?" Value="" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="Email" Value="Email"></asp:ListItem>
                                <asp:ListItem Text="Facebook" Value="Facebook"></asp:ListItem>
                                <asp:ListItem Text="Google" Value="Google"></asp:ListItem>
                                <asp:ListItem Text="Yahoo" Value="Yahoo"></asp:ListItem>
                                <asp:ListItem Text="Newspaper" Value="Newspaper"></asp:ListItem>
                                <asp:ListItem Text="TV" Value="TV"></asp:ListItem>
                                <asp:ListItem Text="Radio" Value="Radio"></asp:ListItem>
                                <asp:ListItem Text="Yellow Pages" Value="Yellow Pages"></asp:ListItem>
                                <asp:ListItem Text="Realtor" Value="Realtor"></asp:ListItem>
                                <asp:ListItem Text="Mailer" Value="Mailer"></asp:ListItem>
                                <asp:ListItem Text="Other" Value="Other"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="css-form-group">
                          
                            <asp:Panel ID="pnlConsultant" runat="server">
                                <span class="css-label">Are you working with a mortgage advisor?</span>
                                <asp:HiddenField ID="hdfConsultant" Value="true" runat="server" />
                                
                                <asp:DropDownList ID="drpMortgageSpecialist1" style="width: 100%" runat="server" CssClass="LoanType form-control" data-required="true" DataSourceID="SqlDataSource1" DataTextField="FullName" DataValueField="Consultant_ID" OnDataBound="DropDownList1_DataBound">
                                </asp:DropDownList>
                            </asp:Panel>
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:propertyinfoConnectionString %>">
                            </asp:SqlDataSource>
                        </div>
                        <span class="error">Please fill the mandatory fields of the form</span>
                    </div>
                    <div class="mav-controller js-actions">
                        <a href="javascript:;"><span class="css-button" data-direction="back">Back</span></a>

                        <%--<input id="Submit1" type="submit" class="css-button" runat="server" value="Submit" onserverclick="submit_Click">--%>

                        <asp:LinkButton runat="server" OnClick="submit_Click" ID="LinkButton78" class="css-button css-submit-button ladda-button lock-submit" data-color="red" data-style="contract-overlay" style="z-index: 10;">
                            <span class="css-overlay"></span>
                            <span class="ladda-label">Submit</span>
                            <span class="ladda-spinner"></span>
                        </asp:LinkButton>
                    </div>
                </div>
                <br style="clear: both">
            </div>
            <br style="clear: both">
        
        <div class="css-clear clearfix">
       

        <%--Extra BUTTONS--%>
       
            <a href="docs/1003new.pdf" target="_blank" class="css-button">Download 1003 (pdf)</a>
            &nbsp;
            <a href="<%= link %>&p=FullApplyNow.ascx" class="css-button">Full Application</a>
        </div>
            </div>
    </asp:PlaceHolder>

    <asp:PlaceHolder runat="server" ID="thankYou" Visible="false">
        <%--THANK YOU--%>
 
        <script>
            $('.paginator').remove(); $('.sweet-alert').closest('.container').find('div').first().css({ minHeight: '120px' });
            $(".shortApplicationForm").addClass("thankyou-page");
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

    </asp:PlaceHolder>
</div>

<div class="addSpace">
</div>

<!--[if lte IE 8]>
</div>
<![endif]-->


<script type="text/javascript" src="<%= path %>__apps/js/ShortApplyNow.js"></script>