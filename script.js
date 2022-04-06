// import gsap from "gsap";

//https://freefrontend.com/

var kursorx = new kursor({
    type: 1,
		color: "#FFFFFF"
  });

AOS.init();

$(document).on("mouseover", ".jumbo-links-1", function() {
	$("#intro").removeClass("bg-black").addClass("bg-transparent");
	$("#jl-1").html("a Software Engineer 💻👨‍💻");
	$("#intro").append('<video id="bg-video-1" class="bg-video" autoplay loop muted ><source src="/assets/coding.mp4" type="video/mp4"></video>');
});

$(document).on("mouseleave", ".jumbo-links-1", function() {
	$("#intro").removeClass("bg-transparent").addClass("bg-black");
	$("#jl-1").html("a Software Engineer");
});

$(document).on("mouseover", ".jumbo-links-2", function() {
	$("#intro").removeClass("bg-black").addClass("bg-transparent");
	$("#jl-2").html("an Economist 📈💸");
	$("#intro").append('<video id="bg-video-2" class="bg-video" autoplay loop muted ><source src="/assets/money.mp4" type="video/mp4"></video>');
});

$(document).on("mouseleave", ".jumbo-links-2", function() {
	$("#intro").removeClass("bg-transparent").addClass("bg-black");
	$("#jl-2").html("an Economist");
});

$(document).on("mouseover", ".jumbo-links-3", function() {
	$("#intro").removeClass("bg-black").addClass("bg-transparent");
	$("#jl-3").html("a Writer ✍️📖");
	$("#intro").append('<video id="bg-video-2" class="bg-video" autoplay loop muted ><source src="/assets/writing-1.mp4" type="video/mp4"></video>');
});

$(document).on("mouseleave", ".jumbo-links-3", function() {
	$("#intro").removeClass("bg-transparent").addClass("bg-black");
	$("#jl-3").html("a Writer");
});