$(document).ready(function(){

	jQuery('#loading').fadeOut(2000);

	/*This is effect is for Hiding everything*/
	$("#DigitalMarketingP").show();
	$("#DigitalMarketingImage").show(500);
	$("#WebsiteDevelopmentP").hide();
	$("#DesignP").hide();
	$("#TechnologyP").hide();
	$("#WebsiteDevelopmentImage").hide();
	$("#DesignImage").hide();
	$("#TechnologyImage").hide();
	$("#DigitalMarketingIc").addClass("fa fa-angle-up");
	$("#DesignIc").addClass("fa fa-angle-down");
	$("#WebsiteDevelopmentIc").addClass("fa fa-angle-down");
	$("#TechnologyIc").addClass("fa fa-angle-down");

	/* This is for Digital Marketing*/

	$("#DigitalMarketing").click(function(){
		$("#DesignIc").removeClass("fa fa-angle-down");
		$("#DesignIc").addClass("fa fa-angle-down");
		$("#DigitalMarketingIc").removeClass("fa fa-angle-down");
		$("#DigitalMarketingIc").addClass("fa fa-angle-up");
		$("#WebsiteDevelopmentIc").removeClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").addClass("fa fa-angle-down");
		$("#TechnologyIc").removeClass("fa fa-angle-down");
		$("#TechnologyIc").addClass("fa fa-angle-down");

		$("#WebsiteDevelopmentP").hide(500);
		$("#WebsiteDevelopmentImage").hide(500);
		$("#DigitalMarketingP").show(500);
		$("#DesignP").hide(500);
		$("#TechnologyP").hide(500);
		$("#DigitalMarketingImage").show(500);
		$("#DesignImage").hide(500);
		$("#TechnologyImage").hide(500);
	});

	/* This Effect is for Website Development*/
	$("#WebsiteDevelopment").click(function(){

		$("#DesignIc").removeClass("fa fa-angle-down");
		$("#DesignIc").addClass("fa fa-angle-down");
		$("#DigitalMarketingIc").removeClass("fa fa-angle-down");
		$("#DigitalMarketingIc").addClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").removeClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").addClass("fa fa-angle-up");
		$("#TechnologyIc").removeClass("fa fa-angle-down");
		$("#TechnologyIc").addClass("fa fa-angle-down");

		$("#WebsiteDevelopmentP").show(500);
		$("#WebsiteDevelopmentImage").show(500);
		$("#DigitalMarketingP").hide(500);
		$("#DesignP").hide(500);


		$("#TechnologyP").hide(500);
		$("#DigitalMarketingImage").hide(500);
		$("#DesignImage").hide(500);
		$("#TechnologyImage").hide(500);
	});

	/*This Effect is for Design*/
	$("#Design").click(function(){
		$("#DesignIc").removeClass("fa fa-angle-down");
		$("#DesignIc").addClass("fa fa-angle-up");
		$("#DigitalMarketingIc").removeClass("fa fa-angle-down");
		$("#DigitalMarketingIc").addClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").removeClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").addClass("fa fa-angle-down");
		$("#TechnologyIc").removeClass("fa fa-angle-down");
		$("#TechnologyIc").addClass("fa fa-angle-down");

		$("#WebsiteDevelopmentP").hide(500);
		$("#WebsiteDevelopmentImage").hide(500);
		$("#DigitalMarketingP").hide(500);
		$("#DesignP").show(500);
		$("#TechnologyP").hide(500);
		$("#DigitalMarketingImage").hide(500);
		$("#DesignImage").show(500);
		$("#TechnologyImage").hide(500);
	});

	/*This is for Technology*/
	$("#Technology").click(function(){
		$("#DesignIc").removeClass("fa fa-angle-down");
		$("#DesignIc").addClass("fa fa-angle-down");
		$("#DigitalMarketingIc").removeClass("fa fa-angle-down");
		$("#DigitalMarketingIc").addClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").removeClass("fa fa-angle-down");
		$("#WebsiteDevelopmentIc").addClass("fa fa-angle-down");
		$("#TechnologyIc").removeClass("fa fa-angle-down");
		$("#TechnologyIc").addClass("fa fa-angle-up");

		$("#WebsiteDevelopmentP").hide(500);
		$("#WebsiteDevelopmentImage").hide(500);
		$("#DigitalMarketingP").hide(500);
		$("#DesignP").hide(500);
		$("#TechnologyP").show(500);
		$("#DigitalMarketingImage").hide(500);
		$("#DesignImage").hide(500);
		$("#TechnologyImage").show(500);			
	});

	$(".card").hover(function(){
		$(this).css("transition", "0.5s ease-in-out");
		$(this).css("box-shadow","2px 2px 20px -6px rgba(22,20,20,0.87)");
		$(this).css("border-radius","20px 0px 20px 0px");
		$(this).css("transform", "scale(0.990)");
	}, function(){
		$(this).css("box-shadow","none");
		$(this).css("transform", "scale(1)");
		$(this).css("border-radius","0px");
	});

	
});