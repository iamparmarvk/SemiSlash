$(document).ready(function(){



	/*Case Study JS*/
	$("#all").css("background-color","#EEEEEE");

	$("#all").click(function(){
		$(".WebsiteDevelopmentCol").show(500);
		$(".SocialMediaCol").show(500);
		$(".WebDesignCol").show(500);
		$(".CampaignManagementCol").show(500);
		$(".SocialMediaCol").show(500);
		$("#all").css("background-color","#EEEEEE");
		$(".CampaignManagement").css("background-color","white");
		$(".SocialMedia").css("background-color","white");
		$(".WebDesign").css("background-color","white");
		$(".WebsiteDevelopment").css("background-color","white");
	});
	$(".CampaignManagement").click(function(){
		$(".WebsiteDevelopmentCol").show(500);
		$(".SocialMediaCol").hide(500);
		$(".WebDesignCol").hide(500);
		$(".CampaignManagementCol").hide(500);
		$(".SocialMediaCol").hide(500);

		$("#all").css("background-color","white");
		$(".CampaignManagement").css("background-color","#EEEEEE");
		$(".SocialMedia").css("background-color","white");
		$(".WebDesign").css("background-color","white");
		$(".WebsiteDevelopment").css("background-color","white");
	});
	$(".SocialMedia").click(function(){
		$(".WebsiteDevelopmentCol").hide(500);
		$(".SocialMediaCol").hide(500);
		$(".WebDesignCol").hide(500);
		$(".CampaignManagementCol").hide(500);
		$(".SocialMediaCol").show(500);
		$("#all").css("background-color","white");
		$(".CampaignManagement").css("background-color","white");
		$(".SocialMedia").css("background-color","#EEEEEE");
		$(".WebDesign").css("background-color","white");
		$(".WebsiteDevelopment").css("background-color","white");
	});
	$(".WebDesign").click(function(){
		$(".WebsiteDevelopmentCol").hide(500);
		$(".SocialMediaCol").hide(500);
		$(".WebDesignCol").show(500);
		$(".CampaignManagementCol").hide(500);
		$(".SocialMediaCol").hide(500);
		$("#all").css("background-color","white");
		$(".CampaignManagement").css("background-color","white");
		$(".SocialMedia").css("background-color","white");
		$(".WebDesign").css("background-color","#EEEEEE");
		$(".WebsiteDevelopment").css("background-color","white");
	});
	$(".WebsiteDevelopment").click(function(){
		$(".WebsiteDevelopmentCol").show(500);
		$(".SocialMediaCol").hide(500);
		$(".WebDesignCol").hide(500);
		$(".CampaignManagementCol").hide(500);
		$(".SocialMediaCol").hide(500);
		$("#all").css("background-color","white");
		$(".CampaignManagement").css("background-color","white");
		$(".SocialMedia").css("background-color","white");
		$(".WebDesign").css("background-color","white");
		$(".WebsiteDevelopment").css("background-color","#EEEEEE");
	});
});