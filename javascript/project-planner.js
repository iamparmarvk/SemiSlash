$("document").ready(function(){
	$("#WebsiteDevelopmentList").hide();
	$('#DeigitalMarketinList').hide();
	$("#DesignList").hide();
	$("#TechnologyList").hide();
	$("#WebsiteDevelopmentItemIc").addClass('fa fa-plus');
	$("#DeigitalMarketinItemIc").addClass('fa fa-plus');
	$("#DesignItemIc").addClass('fa fa-plus');
	$("#TechnologyItemIc").addClass('fa fa-plus');

	$("#WebsiteDevelopmentItem").css("cursor", "pointer");

	$("#WebsiteDevelopmentItem").click(function(){
		$("#WebsiteDevelopmentList").show();
		$('#DeigitalMarketinList').hide(400);
		$("#DesignList").hide(400);
		$("#TechnologyList").hide(400);

		$("#WebsiteDevelopmentItemIc").removeClass('fa fa-plus');
		$("#WebsiteDevelopmentItemIc").addClass('fa fa-minus');

		$("#DeigitalMarketinItemIc").removeClass('fa fa-minus');
		$("#DeigitalMarketinItemIc").addClass('fa fa-plus');

		$("#DesignItemIc").removeClass('fa fa-minus');
		$("#DesignItemIc").addClass('fa fa-plus');

		$("#TechnologyItemIc").removeClass('fa fa-minus');
		$("#TechnologyItemIc").addClass('fa fa-plus');
	});
	$("#DeigitalMarketinItem").click(function(){
		$("#WebsiteDevelopmentList").hide(400);
		$('#DeigitalMarketinList').show(400);
		$("#DesignList").hide(400);
		$("#TechnologyList").hide(400);

		$("#WebsiteDevelopmentItemIc").removeClass('fa fa-minus');
		$("#WebsiteDevelopmentItemIc").addClass('fa fa-plus');

		$("#DeigitalMarketinItemIc").removeClass('fa fa-plus');
		$("#DeigitalMarketinItemIc").addClass('fa fa-minus');

		$("#DesignItemIc").removeClass('fa fa-minus');
		$("#DesignItemIc").addClass('fa fa-plus');

		$("#TechnologyItemIc").removeClass('fa fa-minus');
		$("#TechnologyItemIc").addClass('fa fa-plus');
	});

	$("#DesignItem").click(function(){
		$("#WebsiteDevelopmentList").hide(400);
		$('#DeigitalMarketinList').hide(400);
		$("#DesignList").show(400);
		$("#TechnologyList").hide(400);

		$("#WebsiteDevelopmentItemIc").removeClass('fa fa-minus');
		$("#WebsiteDevelopmentItemIc").addClass('fa fa-plus');

		$("#DeigitalMarketinItemIc").removeClass('fa fa-minus');
		$("#DeigitalMarketinItemIc").addClass('fa fa-plus');

		$("#DesignItemIc").removeClass('fa fa-plus');
		$("#DesignItemIc").addClass('fa fa-minus');

		$("#TechnologyItemIc").removeClass('fa fa-minus');
		$("#TechnologyItemIc").addClass('fa fa-plus');
	});
	$("#TechnologyItem").click(function(){
		$("#WebsiteDevelopmentList").hide(400);
		$('#DeigitalMarketinList').hide(400);
		$("#DesignList").hide(400);
		$("#TechnologyList").show(400);

		$("#WebsiteDevelopmentItemIc").removeClass('fa fa-minus');
		$("#WebsiteDevelopmentItemIc").addClass('fa fa-plus');

		$("#DeigitalMarketinItemIc").removeClass('fa fa-minus');
		$("#DeigitalMarketinItemIc").addClass('fa fa-plus');

		$("#DesignItemIc").removeClass('fa fa-minus');
		$("#DesignItemIc").addClass('fa fa-plus');

		$("#TechnologyItemIc").removeClass('fa fa-plus');
		$("#TechnologyItemIc").addClass('fa fa-minus');
	});
});