function Update() {

	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.type == "soli") {
			Game.bomb_bag_img= "./images/explosive505050.png";
			Game.letter_img= "./images/letter505050.png";
			Game.boomerang_img= "./images/boomerang505050.png";
			Game.hookshot_img= "./images/hookshot505050.png";
			Game.bow_img= "./images/bow505050.png";
			Game.goron_bracelet_img= "./images/strength1505050.png";
			Game.lens_img = "./images/lens505050.png";
			Game.golden_gauntlets_img = "./images/strength3505050.png";
			Game.hammer_img= "./images/ham505050.png";
			Game.iron_boots_img= "./images/ironboots505050.png";
			Game.silver_scale_img=  "./images/silverscale505050.png"
			Game.golden_scale_img= "./images/goldenscale505050.png";
			Game.longshot_img= "./images/longshot505050.png";
			Game.silver_gauntlets_img= "./images/strength2505050.png";
			Game.mirror_shield_img= "./images/mirrorshield505050.png";
			Game.dins_fire_img= "./images/dinsfirenew505050.png";
			Game.magic_meter_img= "./images/magic505050.png";
			Game.hover_boots_img= "./images/hovers505050.png";
			Game.light_arrows_img= "./images/lightarrow505050.png";
			Game.fire_arrows_img= "./images/firearrows505050.png";
			Game.farores_wind_img = "./images/farores505050.png";
			Game.bottle_img = "./images/bottle505050.png";
			Game.slingshot_img = "./images/slingshot505050.png";
			Game.lullaby_img = "./images/lullaby505050.png";
			Game.eponas_img = "./images/eponas505050.png";
			Game.sarias_img = "./images/sarias505050.png";
			Game.suns_img = "./images/suns505050.png";
			Game.sot_img = "./images/sot505050.png";
			Game.sos_img = "./images/sos505050.png";
			Game.minuet_img = "./images/minuet505050.png";
			Game.bolero_img = "./images/bolero505050.png";
			Game.serenade_img = "./images/serenade505050.png";
			Game.requiem_img = "./images/requiem505050.png";
			Game.nocturne_img = "./images/nocturne505050.png";
			Game.prelude_img = "./images/prelude505050.png";
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
			document.getElementById("gan_req2").src= Game.light_arrows_img;
			document.getElementById("gan_req1").src= Game.magic_meter_img;
			document.getElementById("gan_req3").src= Game.bow_img;
			document.getElementById("lullabyimg").src=Game.lullaby_img;
			document.getElementById("eponasimg").src=Game.eponas_img;
			document.getElementById("sariasimg").src=Game.sarias_img;
			document.getElementById("sunsimg").src=Game.suns_img;
			document.getElementById("sotimg").src=Game.sot_img;
			document.getElementById("sosimg").src=Game.sos_img;
			document.getElementById("minuetimg").src=Game.minuet_img;
			document.getElementById("boleroimg").src=Game.bolero_img;
			document.getElementById("serenadeimg").src=Game.serenade_img;
			document.getElementById("requiemimg").src=Game.requiem_img;
			document.getElementById("nocturneimg").src=Game.nocturne_img;
			document.getElementById("preludeimg").src=Game.prelude_img;
			document.getElementById("faroresimg").src= Game.farores_wind_img;
			document.getElementById("firearrowsimg").src= Game.fire_arrows_img;
			document.getElementById("lensimg").src= Game.lens_img;
			document.getElementById("silverscaleimg").src= Game.silver_scale_img;
			document.getElementById("bottleimg").src= Game.bottle_img;
			document.getElementById("slingshotimg").src= Game.slingshot_img;
			document.getElementById("goldengauntletsimg").src= Game.golden_gauntlets_img;

			var all = document.getElementsByClassName('songpics');
			for (var i = 0; i < all.length; i++) {
			all[i].style.width="26px";
			all[i].style.height="26px";
			all[i].style.marginLeft="8px";
			all[i].style.marginBottom="2px";
			all[i].style.marginTop="5px";
			}
			document.getElementById("iWantToRemoveThisButton").innerHTML="Appease Viewers";
		}
		else if (Person.type == "normie") {
			Game.bomb_bag_img= "./normal/bombbag.png";
			Game.letter_img= "./normal/letter.png";
			Game.boomerang_img= "./normal/boomerang.png";
			Game.hookshot_img= "./normal/hookshot.png";
			Game.bow_img= "./normal/bow.png";
			Game.goron_bracelet_img= "./normal/strength1.png";
			Game.lens_img = "./normal/lens.png";
			Game.golden_gauntlets_img = "./normal/strength3.png";
			Game.hammer_img= "./normal/hammer.png";
			Game.iron_boots_img= "./normal/ironboots.png";
			Game.silver_scale_img=  "./normal/silverscale.png"
			Game.golden_scale_img= "./normal/goldenscale.png";
			Game.longshot_img= "./normal/longshot.png";
			Game.silver_gauntlets_img= "./normal/strength2.png";
			Game.mirror_shield_img= "./normal/mirrorshield.png";
			Game.dins_fire_img= "./normal/dinsfire.png";
			Game.magic_meter_img= "./normal/magic.png";
			Game.hover_boots_img= "./normal/hoverboots.png";
			Game.light_arrows_img= "./normal/lightarrows.png";
			Game.fire_arrows_img= "./normal/firearrows.png";
			Game.farores_wind_img = "./normal/farores.png";
			Game.bottle_img = "./normal/bottle.png";
			Game.golden_gauntlets_img = "./normal/strength3.png";
			Game.lens_img = "./normal/lens.png";
			Game.slingshot_img = "./normal/slingshot.png";
			Game.lullaby_img = "./normal/lullaby.png";
			Game.eponas_img = "./normal/eponas.png";
			Game.sarias_img = "./normal/sarias.png";
			Game.suns_img = "./normal/suns.png";
			Game.sot_img = "./normal/sot.png";
			Game.sos_img = "./normal/sos.png";
			Game.minuet_img = "./normal/minuet.png";
			Game.bolero_img = "./normal/bolero.png";
			Game.serenade_img = "./normal/serenade.png";
			Game.requiem_img = "./normal/requiem.png";
			Game.nocturne_img = "./normal/nocturne.png";
			Game.prelude_img = "./normal/prelude.png";
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
			document.getElementById("gan_req2").src= Game.light_arrows_img;
			document.getElementById("gan_req1").src= Game.magic_meter_img;
			document.getElementById("gan_req3").src= Game.bow_img;
			document.getElementById("lullabyimg").src=Game.lullaby_img;
			document.getElementById("eponasimg").src=Game.eponas_img;
			document.getElementById("sariasimg").src=Game.sarias_img;
			document.getElementById("sunsimg").src=Game.suns_img;
			document.getElementById("sotimg").src=Game.sot_img;
			document.getElementById("sosimg").src=Game.sos_img;
			document.getElementById("minuetimg").src=Game.minuet_img;
			document.getElementById("boleroimg").src=Game.bolero_img;
			document.getElementById("serenadeimg").src=Game.serenade_img;
			document.getElementById("requiemimg").src=Game.requiem_img;
			document.getElementById("nocturneimg").src=Game.nocturne_img;
			document.getElementById("preludeimg").src=Game.prelude_img;
			document.getElementById("faroresimg").src= Game.farores_wind_img;
			document.getElementById("firearrowsimg").src= Game.fire_arrows_img;
			document.getElementById("lensimg").src= Game.lens_img;
			document.getElementById("silverscaleimg").src= Game.silver_scale_img;
			document.getElementById("bottleimg").src= Game.bottle_img;
			document.getElementById("slingshotimg").src= Game.slingshot_img;
			document.getElementById("goldengauntletsimg").src= Game.golden_gauntlets_img;
			var all = document.getElementsByClassName('songpics');
			for (var i = 0; i < all.length; i++) {
			all[i].style.width="26px";
			all[i].style.height="26px";
			all[i].style.marginLeft="8px";
			all[i].style.marginBottom="2px";
			all[i].style.marginTop="5px";
			}
			document.getElementById("iWantToRemoveThisButton").innerHTML="tagnia";
		}
		else if (Person.type = "tagnia") {
			Game.bomb_bag_img= "https://i.imgur.com/TjVjKRn.png";
			Game.letter_img= "https://i.imgur.com/RAP8wMy.png";
			Game.boomerang_img= "https://i.imgur.com/kdy5BRJ.png";
			Game.hookshot_img= "https://i.imgur.com/wZLWSuW.png";
			Game.bow_img= "https://i.imgur.com/gtzNOGr.png";
			Game.goron_bracelet_img= "https://i.imgur.com/KkYqAOL.png";
			Game.hammer_img= "https://i.imgur.com/xYItW1t.png";
			Game.iron_boots_img= "https://i.imgur.com/m3cAI1P.png";
			Game.silver_scale_img= "https://i.imgur.com/s1YGBfp.png";
			Game.golden_scale_img= "https://i.imgur.com/3vEpKLx.png";
			Game.longshot_img= "https://i.imgur.com/3WbyXbi.png";
			Game.silver_gauntlets_img= "https://i.imgur.com/K6198X3.png";
			Game.mirror_shield_img= "https://i.imgur.com/RbIuZyE.png";
			Game.dins_fire_img= "https://i.imgur.com/QlwigGB.png";
			Game.magic_meter_img= "https://i.imgur.com/XRsHr3v.png";
			Game.hover_boots_img= "https://i.imgur.com/INd88ZQ.png";
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
			document.getElementById("gan_req2").src="https://i.imgur.com/1TgxgFJ.png";
			document.getElementById("gan_req1").src=Game.magic_meter_img;
			document.getElementById("gan_req3").src=Game.bow_img;
			document.getElementById("lullabyimg").src="https://i.imgur.com/OXWzSgW.png";
			document.getElementById("eponasimg").src="https://i.imgur.com/ERy6k4d.png";
			document.getElementById("sariasimg").src="https://i.imgur.com/r7zkrIQ.png";
			document.getElementById("sunsimg").src="https://i.imgur.com/cgrvqxW.png";
			document.getElementById("sotimg").src="https://i.imgur.com/cz9mQKV.png";
			document.getElementById("sosimg").src="https://i.imgur.com/CxUPmOZ.png";
			document.getElementById("minuetimg").src="https://i.imgur.com/i67LLTT.png";
			document.getElementById("boleroimg").src="https://i.imgur.com/nmiHshX.png";
			document.getElementById("serenadeimg").src="https://i.imgur.com/xSz72al.png";
			document.getElementById("requiemimg").src="https://i.imgur.com/iThvSVN.png";
			document.getElementById("nocturneimg").src="https://i.imgur.com/VQzHM86.png";
			document.getElementById("preludeimg").src="https://i.imgur.com/awQDIDe.png";
			document.getElementById("faroresimg").src="https://i.imgur.com/D20ZL4Q.png";
			document.getElementById("bottleimg").src="https://i.imgur.com/qvbNLJ5.png";
			document.getElementById("firearrowsimg").src="https://i.imgur.com/bToAQj0.png";
			document.getElementById("silverscaleimg").src="https://i.imgur.com/s1YGBfp.png";
			var all = document.getElementsByClassName('songpics');
			for (var i = 0; i < all.length; i++) {
			all[i].style.width="40px";
			all[i].style.height="40px";
			all[i].style.marginLeft="0px";
			all[i].style.marginBottom="0px";
			all[i].style.marginTop="0px";
			}
			document.getElementById("iWantToRemoveThisButton").innerHTML="soli";
		}
		Game.themeChange = false;
		document.getElementById("checks_remaining").style.color="lightblue";
		document.getElementById("logically_accessible").style.color="chartreuse";
		var all = document.getElementsByClassName('logic_check_text');
		for (var i = 0; i < all.length; i++) {
		all[i].style.color = 'chartreuse';
		}
		if(document.getElementById('text_kok_eme') != null) {document.getElementById('text_kok_eme').style.color = 'lightgreen';}
		if(document.getElementById('text_gor_rub') != null) {document.getElementById('text_gor_rub').style.color = '#ff4d4d';}
		if(document.getElementById('text_zor_sap') != null) {document.getElementById('text_zor_sap').style.color = 'lightblue';}
		if(document.getElementById('text_for_med') != null) {document.getElementById('text_for_med').style.color = 'lightgreen';}
		if(document.getElementById('text_fir_med') != null) {document.getElementById('text_fir_med').style.color = '#ff4d4d';}
		if(document.getElementById('text_wat_med') != null) {document.getElementById('text_wat_med').style.color = 'lightblue';}
		if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#660000';}
		document.body.style.backgroundColor = "#505050";
	}
	if(Game.theme == "light" && Game.themeChange) {
		Game.bomb_bag_img= "https://i.imgur.com/TszSBld.png";
		Game.letter_img= "https://i.imgur.com/WAY6Qpc.png";
		Game.boomerang_img= "https://i.imgur.com/jH5MR3n.png";
		Game.hookshot_img= "https://i.imgur.com/HHCTVla.png";
		Game.bow_img= "https://i.imgur.com/muCeqKm.png";
		Game.goron_bracelet_img= "https://i.imgur.com/y0ob3bv.png";
		Game.hammer_img= "https://i.imgur.com/w3sKOvf.png";
		Game.iron_boots_img= "https://i.imgur.com/qqczH2p.png";
		Game.golden_scale_img= "https://i.imgur.com/HVbSHKl.png";
		Game.longshot_img= "https://i.imgur.com/Ps6X4TE.png";
		Game.silver_gauntlets_img= "https://i.imgur.com/WFBtJD9.png";
		Game.mirror_shield_img= "https://i.imgur.com/5hVMn18.png";
		Game.dins_fire_img= "https://i.imgur.com/zcRc5ZI.png";
		Game.magic_meter_img= "https://i.imgur.com/uAyOlX8.png";
		Game.hover_boots_img= "https://i.imgur.com/DSzo0JN.png";
		if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
		document.getElementById("gan_req2").src="https://i.imgur.com/NsuqX43.png";
		document.getElementById("gan_req1").src="https://i.imgur.com/uAyOlX8.png";
		document.getElementById("gan_req3").src="https://i.imgur.com/muCeqKm.png";
		document.getElementById("lullabyimg").src="https://i.imgur.com/YR9myZe.png";
		document.getElementById("eponasimg").src="https://i.imgur.com/w3nXfAG.png";
		document.getElementById("sariasimg").src="https://i.imgur.com/fv5lW8e.png";
		document.getElementById("sunsimg").src="https://i.imgur.com/dcKwhmK.png";
		document.getElementById("sotimg").src="https://i.imgur.com/RbWhLBu.png";
		document.getElementById("sosimg").src="https://i.imgur.com/95t5vSg.png";
		document.getElementById("minuetimg").src="https://i.imgur.com/LJeEBv1.png";
		document.getElementById("boleroimg").src="https://i.imgur.com/lgiLXiB.png";
		document.getElementById("serenadeimg").src="https://i.imgur.com/cLZzDJg.png";
		document.getElementById("requiemimg").src="https://i.imgur.com/n38tJMR.png";
		document.getElementById("nocturneimg").src="https://i.imgur.com/n7G7lp9.png";
		document.getElementById("preludeimg").src="https://i.imgur.com/UYT3RVO.png";
		document.getElementById("faroresimg").src="https://i.imgur.com/m1jPMOS.png";
		document.getElementById("bottleimg").src="https://i.imgur.com/EU8ScXb.png";
		document.getElementById("firearrowsimg").src="https://i.imgur.com/qvfA9cA.png";
		document.getElementById("silverscaleimg").src="https://i.imgur.com/CG4IIo0.png";
		Game.themeChange = false;
		document.getElementById("logically_accessible").style.color="darkgreen";
		document.getElementById("checks_remaining").style.color="blue";
		var all = document.getElementsByClassName('logic_check_text');
		for (var i = 0; i < all.length; i++) {
		all[i].style.color = 'darkgreen';
		}
		if(document.getElementById('text_kok_eme') != null) {document.getElementById('text_kok_eme').style.color = 'green';}
		if(document.getElementById('text_gor_rub') != null) {document.getElementById('text_gor_rub').style.color = 'red';}
		if(document.getElementById('text_zor_sap') != null) {document.getElementById('text_zor_sap').style.color = 'blue';}
		if(document.getElementById('text_for_med') != null) {document.getElementById('text_for_med').style.color = 'green';}
		if(document.getElementById('text_fir_med') != null) {document.getElementById('text_fir_med').style.color = 'red';}
		if(document.getElementById('text_wat_med') != null) {document.getElementById('text_wat_med').style.color = 'blue';}
		if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#990000';}
		document.body.style.backgroundColor = "white";
	}

	if(Known.kokiri_sword == true) {Logic.kokiri_sword = Location_Logic[Location.kokiri_sword];}

	if(Known.farores_wind == true) {Logic.farores_wind = Location_Logic[Location.farores_wind];} else{Logic.farores_wind = false;}

	if(Known.slingshot1 == true) {Logic.slingshot1 = Location_Logic[Location.slingshot1];}
	if(Known.slingshot2 == true) {Logic.slingshot2 = Location_Logic[Location.slingshot2];}
	if(Known.slingshot3 == true) {Logic.slingshot3 = Location_Logic[Location.slingshot3];}
	Logic.slingshot = Logic.slingshot1 || Logic.slingshot2 || Logic.slingshot3;

	if(Known.boomerang == true) {Logic.boomerang = Location_Logic[Location.boomerang];} else{Logic.boomerang = false;}

	if(Known.rutos_letter == true) {Logic.rutos_letter = Location_Logic[Location.rutos_letter];} else{Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {Logic.bottle1 = Location_Logic[Location.bottle1];}
	if(Known.bottle2 == true) {Logic.bottle2 = Location_Logic[Location.bottle2];}
	if(Known.bottle3 == true) {Logic.bottle3 = Location_Logic[Location.bottle3];}
	Logic.bottle = (Logic.rutos_letter && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale)) || Logic.bottle1 || Logic.bottle2 || Logic.bottle3;

	if(Known.scale1 == true) {Logic.scale1 = Location_Logic[Location.scale1]; }
	if(Known.scale2 == true) {Logic.scale2 = Location_Logic[Location.scale2]; }
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	Logic.silver_scale = Logic.scale1 || Logic.scale2;
	Logic.golden_scale = Logic.scale1 && Logic.scale2;

	if(Known.bomb_bag1 == true) {Logic.bomb_bag1 = Location_Logic[Location.bomb_bag1];}
	if(Known.bomb_bag2 == true) {Logic.bomb_bag2 = Location_Logic[Location.bomb_bag2];}
	if(Known.bomb_bag3 == true) {Logic.bomb_bag3 = Location_Logic[Location.bomb_bag3];}
	Logic.bomb_bag = Logic.bomb_bag1 || Logic.bomb_bag2 || Logic.bomb_bag3;

	if(Known.hammer == true) {Logic.hammer = Location_Logic[Location.hammer];} else{Logic.hammer= false;}

	if(Known.bow1 == true) {Logic.bow1 = Location_Logic[Location.bow1];}
	if(Known.bow2 == true) {Logic.bow2 = Location_Logic[Location.bow2];}
	if(Known.bow3 == true) {Logic.bow3 = Location_Logic[Location.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;

	if(Known.hookshot1 == true) {Logic.hookshot1 = Location_Logic[Location.hookshot1];}
	if(Known.hookshot2 == true) {Logic.hookshot2 = Location_Logic[Location.hookshot2];}
	Logic.hookshot = Logic.hookshot1 || Logic.hookshot2;
	Logic.longshot = Logic.hookshot1 && Logic.hookshot2;

	if(Known.strength1 == true) {Logic.strength1 = Location_Logic[Location.strength1];}
	if(Known.strength2 == true) {Logic.strength2 = Location_Logic[Location.strength2];}
	if(Known.strength3 == true) {Logic.strength3 = Location_Logic[Location.strength3];}
	Logic.goron_bracelet = Logic.strength1 || Logic.strength2 || Logic.strength3;
	Logic.silver_gauntlets = (Logic.strength1 && Logic.strength2) || (Logic.strength1 && Logic.strength3) || (Logic.strength2 && Logic.strength3)
	Logic.golden_gauntlets = Logic.strength1 && Logic.strength2 && Logic.strength3;

	if(Known.mirror_shield == true) {Logic.mirror_shield = Location_Logic[Location.mirror_shield];} else{Logic.mirror_shield = false;}

	if(Known.big_poe == true) {Logic.big_poe = Location_Logic[Location.big1];} else{Logic.big_poe= false;}

	if(Known.iron_boots == true) {Logic.iron_boots = Location_Logic[Location.iron_boots];} else{Logic.iron_boots = false;}
	if(Known.hover_boots == true) {Logic.hover_boots = Location_Logic[Location.hover_boots];} else{Logic.hover_boots = false;}

	if(Known.magic1 == true) {Logic.magic1 = Location_Logic[Location.magic1];}
	if(Known.magic2 == true) {Logic.magic2 = Location_Logic[Location.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;

	if(Known.dins_fire == true) {Logic.dins_fire = Location_Logic[Location.dins_fire];} else{Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {Logic.fire_arrows = Location_Logic[Location.fire_arrows];} else{Logic.fire_arrows = false;}

	if(Known.wallet1 == true) {Logic.wallet1 = Location_Logic[Location.wallet1];}
	if(Known.wallet2 == true) {Logic.wallet2 = Location_Logic[Location.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;

	if(Known.goron_tunic == true) {Logic.goron_tunic = Location_Logic[Location.goron_tunic];} else{Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {Logic.zora_tunic = Location_Logic[Location.zora_tunic];} else{Logic.zora_tunic = false;}
	if(Known.lens_of_truth == true) {Logic.lens_of_truth = Location_Logic[Location.lens_of_truth];} else{Logic.lens_of_truth = false;}
	if(Known.stone_of_agony == true) {Logic.stone_of_agony = Location_Logic[Location.stone_of_agony];} else{Logic.stone_of_agony = false;}
	if(Known.prescription == true) {Logic.prescription = Location_Logic[Location.prescription];} else{Logic.prescription = false;}
	if(Known.claim_check == true) {Logic.claim_check = Location_Logic[Location.claim_check];} else{Logic.claim_check = false;}

	if(Known.light_arrows == true) {Logic.light_arrows = Location_Logic[Location.light_arrows];}

	if(Known.lullaby == true) {Logic.lullaby = Location_Logic[Location.lullaby]; }
	if(Known.eponas == true) {Logic.eponas = Location_Logic[Location.eponas]; }
	if(Known.sarias == true) {Logic.sarias = Location_Logic[Location.sarias]; }
	if(Known.suns_song == true) {Logic.suns_song = Location_Logic[Location.suns_song]; }
	if(Known.song_of_time == true) {Logic.song_of_time = Location_Logic[Location.song_of_time]; }
	if(Known.song_of_storms == true) {Logic.song_of_storms = Location_Logic[Location.song_of_storms]; }
	if(Known.minuet == true) {Logic.minuet = Location_Logic[Location.minuet]; }
	if(Known.bolero == true) {Logic.bolero = Location_Logic[Location.bolero]; }
	if(Known.serenade == true) {Logic.serenade = Location_Logic[Location.serenade]; }
	if(Known.requiem == true) {Logic.requiem = Location_Logic[Location.requiem]; }
	if(Known.nocturne == true) {Logic.nocturne = Location_Logic[Location.nocturne]; }
	if(Known.prelude == true) {Logic.prelude = Location_Logic[Location.prelude]; }

	Logic.forest_boss_key = Logic.forced_forest_boss_key;
	Logic.fire_boss_key = Logic.forced_fire_boss_key;
	Logic.water_boss_key = Logic.forced_water_boss_key;
	Logic.spirit_boss_key = Logic.forced_spirit_boss_key;
	Logic.shadow_boss_key = Logic.forced_shadow_boss_key;
	if(Game.forest_boss_key == true) {Logic.forest_boss_key = Location_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {Logic.fire_boss_key = Location_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {Logic.water_boss_key = Location_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {Logic.spirit_boss_key = Location_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {Logic.shadow_boss_key = Location_Logic[Location.shadow_boss_key]; }

	if(Logic.forest_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.forest14;}
	if(Logic.forest_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.fire6;}
	if(Logic.forest_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.water11;}
	if(Logic.forest_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; Logic.forest_medallion = true;}

	if(Logic.fire_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.forest14;}
	if(Logic.fire_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.fire6;}
	if(Logic.fire_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.water11;}
	if(Logic.fire_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; Logic.fire_medallion = true;}

	if(Logic.water_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.forest14;}
	if(Logic.water_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.fire6;}
	if(Logic.water_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.water11;}
	if(Logic.water_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.spirit20;}
	if(Logic.water_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; Logic.water_medallion = true;}

	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.deku_queen_gohma; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.dodongos_king_dodongo; if(document.getElementById("text_dod").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo;} if(document.getElementById("text_dod").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.jabu_barinade; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.jabu_barinade;}}
		if(Logic[str] == "forest") {if (document.getElementById("forest14") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.forest14; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Location_Logic.forest14;}}
		if(Logic[str] == "fire") {if (document.getElementById("fire6") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.fire6; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.fire6;}}
		if(Logic[str] == "water") {if (document.getElementById("water11") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.water11; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.water11;}}
		if(Logic[str] == "spirit") {if (document.getElementById("spirit20") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.spirit20; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.spirit20;}}
		if(Logic[str] == "shadow") {if (document.getElementById("shadow18") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.shadow18; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; Logic[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
	}

	if(Logic.emerald == "deku") {Logic.kokiri_emerald = Location_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {Logic.kokiri_emerald = Location_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {Logic.kokiri_emerald = Location_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {Logic.kokiri_emerald = Location_Logic.forest14;}
	if(Logic.emerald == "fire") {Logic.kokiri_emerald = Location_Logic.fire6;}
	if(Logic.emerald == "water") {Logic.kokiri_emerald = Location_Logic.water11;}
	if(Logic.emerald == "spirit") {Logic.kokiri_emerald = Location_Logic.spirit20;}
	if(Logic.emerald == "shadow") {Logic.kokiri_emerald = Location_Logic.shadow18;}
	if(Logic.emerald == "pocket") {Logic.kokiri_emerald = true;}

	if(Logic.ruby == "deku") {Logic.goron_ruby = Location_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {Logic.goron_ruby = Location_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {Logic.goron_ruby = Location_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {Logic.goron_ruby = Location_Logic.forest14;}
	if(Logic.ruby == "fire") {Logic.goron_ruby = Location_Logic.fire6;}
	if(Logic.ruby == "water") {Logic.goron_ruby = Location_Logic.water11;}
	if(Logic.ruby == "spirit") {Logic.goron_ruby = Location_Logic.spirit20;}
	if(Logic.ruby == "shadow") {Logic.goron_ruby = Location_Logic.shadow18;}
	if(Logic.ruby == "pocket") {Logic.goron_ruby = true;}

	if(Logic.sapphire == "deku") {Logic.zora_sapphire = Location_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {Logic.zora_sapphire = Location_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {Logic.zora_sapphire = Location_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {Logic.zora_sapphire = Location_Logic.forest14;}
	if(Logic.sapphire == "fire") {Logic.zora_sapphire = Location_Logic.fire6;}
	if(Logic.sapphire == "water") {Logic.zora_sapphire = Location_Logic.water11;}
	if(Logic.sapphire == "spirit") {Logic.zora_sapphire = Location_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {Logic.zora_sapphire = Location_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {Logic.zora_sapphire = true;}


	if(Logic.emerald == "unknown") {Logic.kokiri_emerald = false;}
	if(Logic.ruby == "unknown") {Logic.goron_ruby = false;}
	if(Logic.sapphire == "unknown") {Logic.zora_sapphire = false;}
	if(Logic.forest_medallion_location == "unknown") {Logic.forest_medallion = false;}
	if(Logic.fire_medallion_location == "unknown") {Logic.fire_medallion = false;}
	if(Logic.water_medallion_location == "unknown") {Logic.water_medallion = false;}
	var i;
for (i = 1; i <= 4; i++) {
	str = "forceLogic" + i;
	if(document.getElementById(str).value == "bom") {Logic.bomb_bag = true;}
	if(document.getElementById(str).value == "far") {Logic.farores_wind = true;}
	if(document.getElementById(str).value == "sli") {Logic.slingshot = true;}
	if(document.getElementById(str).value == "boo") {Logic.boomerang = true;}
	if(document.getElementById(str).value == "sca") {if(!Logic.silver_scale) {Logic.silver_scale = true;} else if(!Logic.golden_scale){Logic.golden_scale = true;}}
	if(document.getElementById(str).value == "rut") {Logic.rutos_letter = true;}
	if(document.getElementById(str).value == "bot") {Logic.bottle = true;}
	if(document.getElementById(str).value == "big") {Logic.big_poe = true;}
	if(document.getElementById(str).value == "ham") {Logic.hammer = true;}
	if(document.getElementById(str).value == "bow") {Logic.bow = true;}
	if(document.getElementById(str).value == "hoo") {if(!Logic.hookshot) {Logic.hookshot = true;} else if(!Logic.longshot){Logic.longshot = true;}}
	if(document.getElementById(str).value == "gor") {Logic.goron_tunic= true;}
	if(document.getElementById(str).value == "zor") {Logic.zora_tunic= true;}
	if(document.getElementById(str).value == "str") {if(!Logic.goron_bracelet) {Logic.goron_bracelet = true;} else if(!Logic.silver_gauntlets){Logic.silver_gauntlets = true;} else if(!Logic.golden_gauntlets){Logic.golden_gauntlets = true;}}
	if(document.getElementById(str).value == "iro") {Logic.iron_boots = true;}
	if(document.getElementById(str).value == "hov") {Logic.hover_boots = true;}
	if(document.getElementById(str).value == "wal") {if(!Logic.adults_wallet) {Logic.adults_wallet = true;} else if(!Logic.giants_wallet){Logic.giants_wallet = true;}}
	if(document.getElementById(str).value == "mag") {Logic.magic = true;}
	if(document.getElementById(str).value == "din") {Logic.dins_fire = true;}
	if(document.getElementById(str).value == "fir") {Logic.fire_arrows = true;}
	if(document.getElementById(str).value == "len") {Logic.lens_of_truth = true;}
	if(document.getElementById(str).value == "pre") {Logic.prescription = true;}
	if(document.getElementById(str).value == "cla") {Logic.claim_check = true;}
	if(document.getElementById(str).value == "1me") {Logic.forest_medallion = true;}
	if(document.getElementById(str).value == "3me") {Logic.forest_medallion = true; Logic.fire_medallion = true; Logic.water_medallion = true;}
	if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = true; Logic.goron_ruby = true; Logic.zora_sapphire = true;}
	if(document.getElementById(str).value == "lul") {Logic.lullaby = true;}
	if(document.getElementById(str).value == "epo") {Logic.eponas = true;}
	if(document.getElementById(str).value == "sar") {Logic.sarias = true;}
	if(document.getElementById(str).value == "sun") {Logic.suns_song = true;}
	if(document.getElementById(str).value == "sot") {Logic.song_of_time = true;}
	if(document.getElementById(str).value == "sos") {Logic.song_of_storms = true;}
	if(document.getElementById(str).value == "min") {Logic.minuet = true;}
	if(document.getElementById(str).value == "bol") {Logic.bolero = true;}
	if(document.getElementById(str).value == "noc") {Logic.nocturne = true;}
	if(document.getElementById(str).value == "req") {Logic.requiem = true;}
}
for (i = 1; i <= 4; i++) {
	str = "forceOutOfLogic" + i;
	if(document.getElementById(str).value == "bom") {Logic.bomb_bag = false;}
	if(document.getElementById(str).value == "far") {Logic.farores_wind = false;}
	if(document.getElementById(str).value == "sli") {Logic.slingshot = false;}
	if(document.getElementById(str).value == "boo") {Logic.boomerang = false;}
	if(document.getElementById(str).value == "sca") {if(Logic.golden_scale) {Logic.golden_scale = false;} else if(Logic.silver_scale){Logic.silver_scale = false;}}
	if(document.getElementById(str).value == "rut") {Logic.rutos_letter = false;}
	if(document.getElementById(str).value == "bot") {Logic.bottle = false;}
	if(document.getElementById(str).value == "big") {Logic.big_poe = false;}
	if(document.getElementById(str).value == "ham") {Logic.hammer = false;}
	if(document.getElementById(str).value == "bow") {Logic.bow = false;}
	if(document.getElementById(str).value == "hoo") {if(Logic.longshot) {Logic.longshot = false;} else if(Logic.hookshot){Logic.hookshot = false;}}
	if(document.getElementById(str).value == "gor") {Logic.goron_tunic= false;}
	if(document.getElementById(str).value == "zor") {Logic.zora_tunic= false;}
	if(document.getElementById(str).value == "str") {if(Logic.golden_gauntlets) {Logic.golden_gauntlets = false;} else if(Logic.silver_gauntlets){Logic.silver_gauntlets = false;} else if(Logic.goron_bracelet){Logic.goron_bracelet = false;}}
	if(document.getElementById(str).value == "iro") {Logic.iron_boots = false;}
	if(document.getElementById(str).value == "hov") {Logic.hover_boots = false;}
	if(document.getElementById(str).value == "wal") {if(Logic.giants_wallet) {Logic.giants_wallet = false;} else if(Logic.adults_wallet){Logic.adults_wallet = false;}}
	if(document.getElementById(str).value == "mag") {Logic.magic = false;}
	if(document.getElementById(str).value == "din") {Logic.dins_fire = false;}
	if(document.getElementById(str).value == "fir") {Logic.fire_arrows = false;}
	if(document.getElementById(str).value == "len") {Logic.lens_of_truth = false;}
	if(document.getElementById(str).value == "pre") {Logic.prescription = false;}
	if(document.getElementById(str).value == "cla") {Logic.claim_check = false;}
	if(document.getElementById(str).value == "1me") {Logic.forest_medallion = false;}
	if(document.getElementById(str).value == "3me") {Logic.forest_medallion = false; Logic.fire_medallion = false; Logic.water_medallion = false;}
	if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = false; Logic.goron_ruby = false; Logic.zora_sapphire = false;}
	if(document.getElementById(str).value == "lul") {Logic.lullaby = false;}
	if(document.getElementById(str).value == "epo") {Logic.eponas = false;}
	if(document.getElementById(str).value == "sar") {Logic.sarias = false;}
	if(document.getElementById(str).value == "sun") {Logic.suns_song = false;}
	if(document.getElementById(str).value == "sot") {Logic.song_of_time = false;}
	if(document.getElementById(str).value == "sos") {Logic.song_of_storms = false;}
	if(document.getElementById(str).value == "min") {Logic.minuet = false;}
	if(document.getElementById(str).value == "bol") {Logic.bolero = false;}
	if(document.getElementById(str).value == "noc") {Logic.nocturne = false;}
	if(document.getElementById(str).value == "req") {Logic.requiem = false;}
}

	for(var i = 0; i <= 36; i++){
		str = checkSummary[i] + "_location";

		if (checkSummary[i] == "trade" && (Logic.prescription || Logic.claim_check)) {var exception = true;} else {var exception = false;}

		if (Logic[checkSummary[i]] || exception) {document.getElementById(str).className = "logic_check_text2";}
		else {document.getElementById(str).className = "ool_check_text2";}
	}

	Logic.can_enter_jabu = Logic.rutos_letter && ((Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale) && (Logic.boomerang || Logic.bomb_bag || Logic.slingshot);
	Logic.child_can_enter_river = Logic.bomb_bag || Logic.silver_scale;
	Logic.fortress_access = Logic.eponas || Logic.longshot;
	Logic.can_save_carpenters = Logic.fortress_access && ((Logic.bow || Logic.hookshot || Logic.hover_boots) || true) /*fast carpenter fix**/;
	Logic.can_cross_quicksand = Logic.fortress_access && (Logic.longshot || Logic.hover_boots);
	Logic.can_enter_colossus = (Logic.can_cross_quicksand && (Logic.brackets || Logic.can_see)) || Logic.requiem;
	Logic.can_use_fire = (Logic.dins_fire || (Logic.bow && Logic.fire_arrows)) && Logic.magic;
	Logic.can_use_dins = Logic.dins_fire && Logic.magic;
	Logic.can_use_farores = Logic.farores_wind && Logic.magic;
	Logic.can_see = Logic.lens_of_truth && Logic.magic;
	Logic.can_blast_or_smash = Logic.bomb_bag || Logic.hammer;
	Logic.can_enter_dodongos = Logic.can_blast_or_smash || Logic.goron_bracelet;
	Logic.dodongos_climb = Logic.can_enter_dodongos && (Logic.bomb_bag || Logic.goron_bracelet || Logic.can_use_dins);
	Logic.can_enter_shadow = Logic.nocturne && Logic.can_use_dins && (Logic.hover_boots || Logic.hookshot) ;//&& Logic.can_see;
	Logic.can_cross_shadow_gap= Logic.can_enter_shadow && Logic.hover_boots;
	Logic.can_bomb_shadow_wall = Logic.can_cross_shadow_gap && Logic.bomb_bag;
	Logic.can_pass_shadow_hookshot_door = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Logic.can_ride_shadow_boat = Logic.can_pass_shadow_hookshot_door && Logic.lullaby;
	Logic.can_beat_shadow_boss = Logic.can_ride_shadow_boat && (Logic.bow || Logic.longshot);
	Logic.can_stop_link_the_goron = Logic.bomb_bag || Logic.bow || Logic.goron_bracelet;
	Logic.ice_access = Logic.rutos_letter && Logic.lullaby && Logic.child_can_enter_river;
	Logic.reverse_crater = (Logic.hover_boots || Logic.hookshot || Logic.child_can_enter_river) && Logic.bolero;
	Logic.can_enter_fire_temple = (Logic.crater_by_city && (Logic.hookshot || Logic.hover_boots)) || Logic.bolero
	Logic.crater_by_city = Logic.bow || Logic.bomb_bag || Logic.goron_bracelet || Logic.reverse_crater ||(Logic.hammer && Logic.hover_boots) || (Logic.longshot && Logic.goron_tunic && Logic.hammer);
	Logic.crater_top = Logic.crater_by_city || Logic.hammer;
	Logic.can_enter_adult_spirit = Logic.can_enter_colossus && Logic.silver_gauntlets;
	Logic.can_enter_ganons = Logic.goron_ruby && Logic.kokiri_emerald && Logic.zora_sapphire;
	Logic.can_climb_fire_temple = Logic.can_enter_fire_temple && Logic.fire_keys >=3 && Logic.can_wear_goron_tunic && Logic.goron_bracelet && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Logic.can_enter_water = Logic.hookshot && Logic.iron_boots;
	Logic.middle_water = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Logic.projectile_both = Logic.bomb_bag || ((Logic.slingshot || Logic.boomerang) && (Logic.bow || Logic.hookshot));
	Logic.projectile_child = Logic.bomb_bag || Logic.slingshot || Logic.boomerang;
	Logic.projectile_adult = Logic.bomb_bag || Logic.bow || Logic.hookshot;
	Logic.can_wear_goron_tunic = Logic.goron_tunic || (Logic.adults_wallet && (Logic.bomb_bag || Logic.goron_bracelet || Logic.bow));
	Logic.can_wear_zora_tunic = Logic.zora_tunic || (Logic.giants_wallet && (Logic.lullaby && Logic.bottle));

	Game.can_enter_jabu = Game.rutos_letter && (Game.bomb_bag1 || Game.has_chus || Game.scale1)
	Game.child_can_enter_river = Game.bomb_bag1 || Game.has_chus || Game.scale1;
	Game.fortress_access = Game.eponas || Game.hookshot2 || Game.requiem;
	Game.can_save_carpenters = Game.fortress_access && ((Game.bow1 || Game.hookshot1 || Game.hover_boots) || true) /*fast carpenter fix**/;
	Game.can_cross_quicksand = Game.fortress_access;
	Game.can_enter_colossus = (Game.can_cross_quicksand) || Game.requiem;
	Game.can_use_fire = (Game.dins_fire || (Game.bow1 && Game.fire_arrows)) && Game.magic1;
	Game.can_use_dins = Game.dins_fire && Game.magic1;
	Game.can_use_farores = Game.farores_wind && Game.magic1;
	Game.can_see = Game.lens_of_truth && Game.magic1;
	Game.can_blast_or_smash = Game.bomb_bag1 || Game.hammer || Game.has_chus;
	Game.can_enter_dodongos = Game.can_blast_or_smash || Game.strength1 || ((Game.bottle1 || Game.can_enter_jabu) && Game.giants_wallet);
	Game.dodongos_climb	= Game.can_enter_dodongos && (Game.bomb_bag1 || Game.has_chus || Game.strength1 || Game.can_use_dins);
	Game.can_enter_shadow= Game.nocturne && Game.can_use_fire && (Game.hover_boots || Game.hookshot1) ;//&& Game.can_see;
	Game.can_cross_shadow_gap= Game.can_enter_shadow && Game.hover_boots;
	Game.can_bomb_shadow_wall = Game.can_cross_shadow_gap && (Game.bomb_bag1 || Game.has_chus);
	Game.can_pass_shadow_hookshot_door = Game.can_bomb_shadow_wall && Game.hookshot1;
	Game.can_ride_shadow_boat = Game.can_pass_shadow_hookshot_door && Game.lullaby;
	Game.can_beat_shadow_boss = Game.can_ride_shadow_boat && (Game.bow1 || Game.hookshot2);
	Game.can_stop_link_the_goron = Game.bomb_bag1 || Game.bow1 || Game.strength1 || Game.has_chus;
	Game.ice_access = Game.rutos_letter && Game.lullaby && Game.child_can_enter_river;
	Game.reverse_crater = (Game.hover_boots || Game.hookshot1 || Game.child_can_enter_river) && Game.bolero;
	Game.can_enter_fire_temple = (Game.crater_by_city && (Game.hookshot1 || Game.hover_boots)) || Game.bolero;
	Game.crater_by_city = Game.bow1 || Game.bomb_bag1 || Game.strength1 || Game.reverse_crater || (Game.hammer && Game.hover_boots) || (Game.goron_tunic && Game.hookshot2 && Game.hammer);
	Game.crater_top = Game.crater_by_city || Game.hammer;
	Game.can_enter_adult_spirit = Game.can_enter_colossus && Game.strength2;
	Game.can_enter_ganons = Game.forest_medallion && Game.fire_medallion && Game.water_medallion && Game.gen1 && Game.gen2 && Game.gen3;
	Game.can_climb_fire_temple = Game.can_enter_fire_temple && Game.current_fire_keys >=3 && (Game.bow1 || Game.hookshot1 || Game.bomb_bag1);
	Game.can_enter_water = (Game.hookshot1 && Game.iron_boots) || (Game.hookshot2 && Game.golden_scale);
	Game.middle_water = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Game.projectile_both = Game.bomb_bag1 || Game.has_chus || ((Game.slingshot1 || Game.boomerang) && (Game.bow1 || Game.hookshot1));
	Game.projectile_child = Game.bomb_bag1 || Game.has_chus || Game.slingshot1 || Game.boomerang;
	Game.projectile_adult = Game.bomb_bag1 || Game.has_chus || Game.bow1 || Game.hookshot1;
	Game.can_wear_goron_tunic = true;
	Game.can_wear_zora_tunic = true;
	Game.can_climb_gtg_hole = Game.hookshot1 || Game.hover_boots || Game.bomb_bag1;
	Game.giants_wallet = Game.wallet1 && Game.wallet2;

	Logic.current_forest_keys = Logic.forced_forest_keys;
	for (i = 1; i <= 14; i++) {
		str = "forest" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_forest_keys +=1;}
	}
	Logic.current_fire_keys = Logic.forced_fire_keys;
	for (i = 1; i <= 15; i++) {
		str = "fire" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_fire_keys +=1;}
	}

	Logic.current_water_keys = Logic.forced_water_keys;
	for (i = 1; i <= 11; i++) {
		str = "water" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_water_keys +=1;}
	}

	Logic.current_spirit_keys = Logic.forced_spirit_keys;
	for (i = 1; i <= 20; i++) {
		str = "spirit" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_spirit_keys +=1;}
	}

	Logic.current_shadow_keys = Logic.forced_shadow_keys;
	for (i = 1; i <= 18; i++) {
		str = "shadow" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_shadow_keys +=1;}
	}

	Logic.current_ganons_keys = Logic.forced_ganons_keys;
	for (i = 1; i <= 16; i++) {
		str = "ganons" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_ganons_keys +=1;}
	}

	Logic.current_gtg_keys = Logic.forced_gtg_keys;
	for (i = 1; i <= 22; i++) {
		str = "gtg" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_gtg_keys +=1;}
	}

	Logic.current_well_keys = Logic.forced_well_keys;
	for (i = 1; i <= 14; i++) {
		str = "well" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_well_keys +=1;}
	}

	if (Logic.current_forest_keys < 5) {
		var for_keys = [[1,2,3,4,5], [6,8], [7], [9,10,11]]
		var done = false;
		for (i = 0; i < for_keys.length; i++) {
			for (j = 0; j < for_keys[i].length; j++) {
				str = "forest" + for_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
					Logic.min_forest_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_forest_keys = 5;}
	}
	Logic.forest_keys = Math.max(Logic.min_forest_keys,Logic.current_forest_keys);
	if (!Logic.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || typeof(Check[str]) == "undefined")) {
				bk = false;
				break;
			}
		}
		Logic.forest_boss_key = bk;
	}

	if (Logic.current_fire_keys < 8 && ((Logic.can_wear_goron_tunic && Logic.hammer && Logic.hover_boots) || (Check["fire6"] != "small_key" && typeof(Check["fire6"]) != "undefined"))) {
		var fir_keys = [[1,2,3], [4,5],[], [7,8],[9], [10,11,12], [13,14,15]]
		var done = false;
		for (i = 0; i < fir_keys.length; i++) {
			for (j = 0; j < fir_keys[i].length; j++) {
				str = "fire" + fir_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" || (Check[str] == "boss_key" && (Check["fire6"] == "small_key" || typeof(Check["fire6"]) == "undefined")))) {
					Logic.min_fire_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_fire_keys = 8;}
	}
	Logic.fire_keys = Math.max(Logic.min_fire_keys,Logic.current_fire_keys);
	if (!Logic.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || typeof(Check[str]) == "undefined")) {
				bk = false;
				break;
			}
		}
		Logic.fire_boss_key = bk;
	}

	if (Logic.current_water_keys < 6 && (Logic.longshot && Logic.iron_boots || (Check["water11"] != "small_key" && typeof(Check["water11"]) != "undefined"))) {
		var wat_keys = [[1,2,3,4,5,6,9]]
		var done = false;
		for (i = 0; i < wat_keys.length; i++) {
			for (j = 0; j < wat_keys[i].length; j++) {
				str = "water" + wat_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined"|| (Check[str] == "boss_key" && (Check["water11"] == "small_key" || typeof(Check["water11"]) == "undefined")))) {
					Logic.min_water_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_water_keys = 6;}
	}
	Logic.water_keys = Math.max(Logic.min_water_keys,Logic.current_water_keys);
	if (!Logic.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || typeof(Check[str]) == "undefined")) {
				bk = false;
				break;
			}
		}
		Logic.water_boss_key = bk;
	}

	if (Logic.current_spirit_keys < 5) {
		var spi_keys = [[1,2,8,9], [3,4,5,6], [], [7,10,11,12,13],[14,15,16,17],[18,19]]
		var done = false;
		for (i = 0; i < spi_keys.length; i++) {
			for (j = 0; j < spi_keys[i].length; j++) {
				str = "spirit" + spi_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
					Logic.min_spirit_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_spirit_keys = 5;}
	}
	Logic.spirit_keys = Math.max(Logic.min_spirit_keys,Logic.current_spirit_keys);
	if (!Logic.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || typeof(Check[str]) == "undefined")) {
				bk = false;
				break;
			}
		}
		Logic.spirit_boss_key = bk;
	}

	if (Logic.current_shadow_keys < 5) {
		var sha_keys = [[1,2,3,4], [5,6,7,8,9], [10,11],[12,13,14],[15,16,17]]
		var done = false;
		for (i = 0; i < sha_keys.length; i++) {
			for (j = 0; j < sha_keys[i].length; j++) {
				str = "shadow" + sha_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
					Logic.min_shadow_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_shadow_keys = 5;}
	}
	Logic.shadow_keys = Math.max(Logic.min_shadow_keys,Logic.current_shadow_keys);
	if (!Logic.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || typeof(Check[str]) == "undefined")) {
				bk = false;
				break;
			}
		}
		Logic.shadow_boss_key = bk;
	}

	if (Logic.current_ganons_keys < 2) {
		Logic.min_ganons_keys = 2;
		var done = false;
		for (i = 1; i <= 16; i++) {
			if (i == 8) {continue;}
			str = "ganons" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
				Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);

	if (Logic.current_gtg_keys < 9) {
		var ger_keys = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22], [],[],[17],[18],[],[19],[20]]
		var done = false;
		for (i = 0; i < ger_keys.length; i++) {
			for (j = 0; j < ger_keys[i].length; j++) {
				str = "gtg" + ger_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
					Logic.min_gtg_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_gtg_keys = 9;}
	}
	Logic.gtg_keys = Math.max(Logic.min_gtg_keys,Logic.current_gtg_keys);
	if (Logic.current_well_keys < 3) {
		Logic.min_well_keys = 3;
		for (i = 1; i <= 14; i++) {
			if (i == 12 || i == 13) {continue;}
			str = "well" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || typeof(Check[str]) == "undefined" )) {
				Logic.min_well_keys = 0;
				break;
			}
		}
	}
	Logic.well_keys = Math.max(Logic.min_well_keys,Logic.current_well_keys);

	const keys = Object.keys(Location_Logic)
	var temp = 0;
	var d = new Date();
	var tempTime = Math.floor((d.getTime() - initialTime)/1000);
	var tempHours = Math.floor(tempTime / 3600);
	var tempMinutes = Math.floor((tempTime % 3600) / 60);
	var tempSeconds = Math.floor((tempTime % 3600) % 60);
	for (const key of keys) {
	if (temp == 256) {break; }
	temp +=1;
	if(document.getElementById(key) == null && checkedYet[temp-1] == false) {checkedYet[temp - 1] = true; textBlock += "" + tempHours + "h " + tempMinutes + "m " + tempSeconds + "s " + Names[temp-1] + "\n"};
	if(document.getElementById(key) == null) {continue;}
	hinted = false;
	if (isUpperCase(document.getElementById(key).value) && document.getElementById(key).value.length == 3) {
		hinted = true;
		document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
	}
	if (temp <= 244) {

	if (document.getElementById(key).value == "far" && !Game.farores_wind) {Check[document.getElementById(key).id] = "farores_wind"; Location.farores_wind = document.getElementById(key).id; document.getElementById("farores_wind_location").innerHTML = "Farores -> " + Names[temp-1]; Known.farores_wind = true; if (!hinted) {Game.farores_wind = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "sli" && !Game.slingshot1) {Check[document.getElementById(key).id] = "slingshot"; Location.slingshot1 = document.getElementById(key).id; document.getElementById("slingshot1_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot1 = true; if (!hinted) {Game.slingshot1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Game.slingshot2) {Check[document.getElementById(key).id] = "slingshot"; Location.slingshot2 = document.getElementById(key).id; document.getElementById("slingshot2_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot2 = true; if (!hinted) {Game.slingshot2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Game.slingshot3) {Check[document.getElementById(key).id] = "slingshot";Location.slingshot3 = document.getElementById(key).id; document.getElementById("slingshot3_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot3 = true; if (!hinted) {Game.slingshot3 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "boo" && !Game.boomerang) {Check[document.getElementById(key).id] = "boomerang"; Location.boomerang = document.getElementById(key).id; document.getElementById("boomerang_location").innerHTML = "Boomerang -> " + Names[temp-1]; Known.boomerang = true; if (!hinted) {Game.boomerang = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "sca" && !Game.scale1) {Check[document.getElementById(key).id] = "scale"; Location.scale1 = document.getElementById(key).id; document.getElementById("scale1_location").innerHTML = "Scale -> " + Names[temp-1]; Known.scale1 = true; if (!hinted) {Game.scale1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sca" && !Game.scale2) {Check[document.getElementById(key).id] = "scale";Location.scale2 = document.getElementById(key).id; document.getElementById("scale2_location").innerHTML = "Scale -> " + Names[temp-1]; Known.scale2 = true; if (!hinted) {Game.scale2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "rut" && !Game.rutos_letter) {Check[document.getElementById(key).id] = "rutos_letter"; Location.rutos_letter = document.getElementById(key).id; document.getElementById("rutos_letter_location").innerHTML = "Letter -> " + Names[temp-1]; Known.rutos_letter = true; if (!hinted) {Game.rutos_letter = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "bot" && !Game.bottle1) {Check[document.getElementById(key).id] = "bottle"; Location.bottle1 = document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle1 = true; if (!hinted) {Game.bottle1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Game.bottle2) {Check[document.getElementById(key).id] = "bottle"; Location.bottle2 = document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle2 = true; if (!hinted) {Game.bottle2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Game.bottle3) {Check[document.getElementById(key).id] = "bottle"; Location.bottle3 = document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle3 = true; if (!hinted) {Game.bottle3 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "big" && !Game.bottle1) {Check[document.getElementById(key).id] = "big_poe";Location.bottle1 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted) {Game.bottle1 = true; Game.big_poe = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Game.bottle2) {Check[document.getElementById(key).id] = "big_poe"; Location.bottle2 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted) {Game.bottle2 = true; Game.big_poe = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Game.bottle3) {Check[document.getElementById(key).id] = "big_poe";Location.bottle3 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted) {Game.bottle3 = true; Game.big_poe = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}

	if (document.getElementById(key).value == "bom" && !Game.bomb_bag1) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag1 = document.getElementById(key).id; document.getElementById("bomb_bag1_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag1 = true; if (!hinted) {Game.bomb_bag1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bom" && !Game.bomb_bag2) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag2 = document.getElementById(key).id; document.getElementById("bomb_bag2_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag2 = true; if (!hinted) {Game.bomb_bag2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bom" && !Game.bomb_bag3) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag3 = document.getElementById(key).id; document.getElementById("bomb_bag3_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag3 = true; if (!hinted) {Game.bomb_bag3 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "ham" && !Game.hammer) {Check[document.getElementById(key).id] = "hammer"; Location.hammer = document.getElementById(key).id; document.getElementById("hammer_location").innerHTML = "Hammer -> " + Names[temp-1]; Known.hammer = true; if (!hinted) {Game.hammer = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "bow" && !Game.bow1) {Check[document.getElementById(key).id] = "bow"; Location.bow1 = document.getElementById(key).id; document.getElementById("bow1_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow1 = true; if (!hinted) {Game.bow1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Game.bow2) {Check[document.getElementById(key).id] = "bow"; Location.bow2 = document.getElementById(key).id; document.getElementById("bow2_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow2 = true; if (!hinted) {Game.bow2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Game.bow3) {Check[document.getElementById(key).id] = "bow";Location.bow3 = document.getElementById(key).id; document.getElementById("bow3_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow3 = true; if (!hinted) {Game.bow3 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "hoo" && !Game.hookshot1) {Check[document.getElementById(key).id] = "hookshot";Location.hookshot1 = document.getElementById(key).id; document.getElementById("hookshot1_location").innerHTML = "Hookshot -> " + Names[temp-1]; Known.hookshot1 = true; if (!hinted) {Game.hookshot1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "hoo" && !Game.hookshot2) {Check[document.getElementById(key).id] = "hookshot";Location.hookshot2 = document.getElementById(key).id; document.getElementById("hookshot2_location").innerHTML = "Hookshot -> " + Names[temp-1]; Known.hookshot2 = true; if (!hinted) {Game.hookshot2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "str" && !Game.strength1) {Check[document.getElementById(key).id] = "strength"; Location.strength1 = document.getElementById(key).id; document.getElementById("strength1_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength1 = true; if (!hinted) {Game.strength1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Game.strength2) {Check[document.getElementById(key).id] = "strength"; Location.strength2 = document.getElementById(key).id; document.getElementById("strength2_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength2 = true; if (!hinted) {Game.strength2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Game.strength3) {Check[document.getElementById(key).id] = "strength";Location.strength3 = document.getElementById(key).id; document.getElementById("strength3_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength3 = true; if (!hinted) {Game.strength3 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "mir" && !Game.mirror_shield) {Check[document.getElementById(key).id] = "mirror_shield"; Location.mirror_shield = document.getElementById(key).id; document.getElementById("mirror_shield_location").innerHTML = "Mirror Shield -> " + Names[temp-1]; Known.mirror_shield = true; if (!hinted) {Game.mirror_shield = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "mag" && !Game.magic1) {Check[document.getElementById(key).id] = "magic"; Location.magic1 = document.getElementById(key).id; document.getElementById("magic1_location").innerHTML = "Magic -> " + Names[temp-1]; Known.magic1 = true; if (!hinted) {Game.magic1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "mag" && !Game.magic2) {Check[document.getElementById(key).id] = "magic"; Location.magic2 = document.getElementById(key).id; document.getElementById("magic2_location").innerHTML = "Magic -> " + Names[temp-1]; Known.magic2 = true; if (!hinted) {Game.magic2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "iro" && !Game.iron_boots) {Check[document.getElementById(key).id] = "iron_boots";Location.iron_boots = document.getElementById(key).id; document.getElementById("iron_boots_location").innerHTML = "Iron Boots -> " + Names[temp-1]; Known.iron_boots = true; if (!hinted) {Game.iron_boots = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "hov" && !Game.hover_boots) {Check[document.getElementById(key).id] = "hover_boots";Location.hover_boots = document.getElementById(key).id; document.getElementById("hover_boots_location").innerHTML = "Hover Boots -> " + Names[temp-1]; Known.hover_boots = true; if (!hinted) {Game.hover_boots = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "wal" && !Game.wallet1) {Check[document.getElementById(key).id] = "wallet";Location.wallet1 = document.getElementById(key).id; document.getElementById("wallet1_location").innerHTML = "Wallet -> " + Names[temp-1]; Known.wallet1 = true; if (!hinted) {Game.wallet1 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "wal" && !Game.wallet2) {Check[document.getElementById(key).id] = "wallet";Location.wallet2 = document.getElementById(key).id; document.getElementById("wallet2_location").innerHTML = "Wallet -> " + Names[temp-1]; Known.wallet2 = true; if (!hinted) {Game.wallet2 = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "gor" && !Game.goron_tunic) {Check[document.getElementById(key).id] = "goron_tunic";Location.goron_tunic = document.getElementById(key).id; document.getElementById("goron_tunic_location").innerHTML = "Goron Tunic -> " + Names[temp-1]; Known.goron_tunic = true; if (!hinted) {Game.goron_tunic = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "zor" && !Game.zora_tunic) {Check[document.getElementById(key).id] = "zora_tunic";Location.zora_tunic = document.getElementById(key).id; document.getElementById("zora_tunic_location").innerHTML = "Zora Tunic -> " + Names[temp-1]; Known.zora_tunic = true; if (!hinted) {Game.zora_tunic = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "din" && !Game.dins_fire) {Check[document.getElementById(key).id] = "dins_fire";Location.dins_fire = document.getElementById(key).id; document.getElementById("dins_fire_location").innerHTML = "Dins Fire -> " + Names[temp-1]; Known.dins_fire = true; if (!hinted) {Game.dins_fire = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "fir" && !Game.fire_arrows) {Check[document.getElementById(key).id] = "fire_arrows"; Location.fire_arrows = document.getElementById(key).id; document.getElementById("fire_arrows_location").innerHTML = "Fire Arrows -> " + Names[temp-1]; Known.fire_arrows = true; if (!hinted) {Game.fire_arrows = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "len" && !Game.lens_of_truth) {Check[document.getElementById(key).id] = "lens_of_truth";Location.lens_of_truth = document.getElementById(key).id; document.getElementById("lens_of_truth_location").innerHTML = "Lens -> " + Names[temp-1]; Known.lens_of_truth = true; if (!hinted) {Game.lens_of_truth = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "sto" && !Game.stone_of_agony) {Location.stone_of_agony = document.getElementById(key).id; Known.stone_of_agony = true; if (!hinted) {Game.stone_of_agony = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if ((document.getElementById(key).value == "pre" || document.getElementById(key).value == "eye" || document.getElementById(key).value == "dro") && (!Game.prescription || !Game.claim_check)) {Check[document.getElementById(key).id] = "prescription";Location.prescription = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Prescription -> " + Names[temp-1]; Known.prescription = true; if (!hinted) {Game.prescription = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "cla" && (!Game.prescription || !Game.claim_check)) {Check[document.getElementById(key).id] = "claim_check";Location.claim_check = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Claim -> " + Names[temp-1]; Known.claim_check = true; if (!hinted) {Game.claim_check = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	if (document.getElementById(key).value == "lig" && !Game.light_arrows) {Check[document.getElementById(key).id] = "light_arrows"; Location.light_arrows = document.getElementById(key).id; document.getElementById("light_arrows_location").innerHTML = "Light Arrows -> " + Names[temp-1]; Known.light_arrows = true; if (!hinted) {Game.light_arrows = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}

	}
	else {
	if (document.getElementById(key).value == "lul" && !Game.lullaby) {Check[document.getElementById(key).id] = "lullaby";Location.lullaby = document.getElementById(key).id; Known.lullaby = true; if (!hinted) {Game.lullaby = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Lullaby"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "epo" && !Game.eponas) {Check[document.getElementById(key).id] = "eponas";Location.eponas = document.getElementById(key).id; Known.eponas = true; if (!hinted) {Game.eponas = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Epona's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sar" && !Game.sarias) {Check[document.getElementById(key).id] = "sarias";Location.sarias = document.getElementById(key).id; Known.sarias = true; if (!hinted) {Game.sarias = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Saria's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sun" && !Game.suns_song) {Check[document.getElementById(key).id] = "suns";Location.suns_song = document.getElementById(key).id; Known.suns_song = true; if (!hinted) {Game.suns_song = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Sun's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sot" && !Game.song_of_time) {Check[document.getElementById(key).id] = "sot";Location.song_of_time = document.getElementById(key).id; Known.song_of_time = true; if (!hinted) {Game.song_of_time = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Time"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sos" && !Game.song_of_storms) {Check[document.getElementById(key).id] = "sos"; Location.song_of_storms = document.getElementById(key).id; Known.song_of_storms = true; if (!hinted) {Game.song_of_storms = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Storms"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "min" && !Game.minuet) {Check[document.getElementById(key).id] = "minuet"; Location.minuet = document.getElementById(key).id; Known.minuet = true; if (!hinted) {Game.minuet = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Minuet"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "bol" && !Game.bolero) {Check[document.getElementById(key).id] = "bolero";Location.bolero = document.getElementById(key).id; Known.bolero = true; if (!hinted) {Game.bolero = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Bolero"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "ser" && !Game.serenade) {Check[document.getElementById(key).id] = "serenade";Location.serenade = document.getElementById(key).id; Known.serenade = true; if (!hinted) {Game.serenade = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Serenade"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "req" && !Game.requiem) {Check[document.getElementById(key).id] = "requiem";Location.requiem = document.getElementById(key).id; Known.requiem = true; if (!hinted) {Game.requiem = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Requiem"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "noc" && !Game.nocturne) {Check[document.getElementById(key).id] = "nocturne";Location.nocturne = document.getElementById(key).id; Known.nocturne = true; if (!hinted) {Game.nocturne = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Nocturne"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "pre" && !Game.prelude) {Check[document.getElementById(key).id] = "prelude";Location.prelude = document.getElementById(key).id; Known.prelude = true; if (!hinted) {Game.prelude = true;} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Prelude"; junkBS(document.getElementById(key)); continue;}
	}
}

for( var i = 1; i <= 34; i++) {
Area[i] = "normal";
}

for (var i = 1; i <= 5; i++) {
	var str = document.getElementById("woth_input" + i).value;
	str = str.replace("2","");
	if (str == "kok" || str == "kf" || str == "koki" || str == "kfc") {Area[1] = "woth";}
	if (str == "llr" || str == "ranch" || str == "lon" || str == "ran") {Area[2] = "woth";}
	if (str == "fie" || str == "hf" || str == "field") {Area[3] = "woth";}
	if (str == "gv" || str == "val" || str == "valley") {Area[4] = "woth";}
	if (str == "hyl" || str == "hylia" || str == "lh") {Area[5] = "woth";}
	if (str == "mkt" || str == "market" || str == "mar") {Area[6] = "woth";}
	if (str == "hyr c" || str == "hcast" || str == "hc") {Area[7] = "woth";}
	if (str == "ogc" || str == "out g" || str == "gfairy" || str == "og" || str == "out") {Area[8] = "woth";}
	if (str == "tot" || str == "temple" || str == "time") {Area[9] = "woth";}
	if (str == "fountain" || str == "fount" || str == "fou" || str == "zf") {Area[10] = "woth";}
	if (str == "ice" || str == "ic" || str == "cavern") {Area[11] = "woth";}
	if (str == "deku" || str == "dek" || str == "dt") {Area[12] = "woth";}
	if (str == "lw" || str == "lost" || str == "woods") {Area[13] = "woth";}
	if (str == "sfm" || str == "mea" || str == "mead") {Area[14] = "woth";}
	if (str == "gor" || str == "gc" || str == "goron") {Area[15] = "woth";}
	if (str == "dod" || str == "dodo" || str == "dc") {Area[16] = "woth";}
	if (str == "tra" || str == "trail" || str == "dmt") {Area[17] = "woth";}
	if (str == "cra" || str == "crater" || str == "dmc") {Area[18] = "woth";}
	if (str == "kak" || str == "kaki" || str == "kv") {Area[19] = "woth";}
	if (str == "gra" || str == "grave" || str == "gy") {Area[20] = "woth";}
	if (str == "riv" || str == "river" || str == "zr") {Area[21] = "woth";}
	if (str == "dom" || str == "domain" || str == "zd") {Area[22] = "woth";}
	if (str == "col" || str == "colo" || str == "colossus" || str == "co") {Area[23] = "woth";}
	if (str == "was" || str == "waste" || str == "wl" || str == "hw") {Area[24] = "woth";}
	if (str == "fort" || str == "fortress" || str == "gf") {Area[25] = "woth";}
	if (str == "jab" || str == "jabu" || str == "jjb" || str == "jj") {Area[26] = "woth";}
	if (str == "for" || str == "forest" || str == "fot" || str == "fo") {Area[27] = "woth";}
	if (str == "fir" || str == "fire" || str == "fit" || str == "fi") {Area[28] = "woth";}
	if (str == "wat" || str == "wata" || str == "water" || str == "wa") {Area[29] = "woth";}
	if (str == "spi" || str == "spirit" || str == "sprt" || str == "sp") {Area[30] = "woth";}
	if (str == "sha" || str == "shadow" || str == "shad" || str == "sh") {Area[31] = "woth";}
	if (str == "gan" || str == "gan c" || str == "ganons" || str == "ganon" || str == "ga") {Area[32] = "woth";}
	if (str == "gtg" || str == "tg" || str == "gt") {Area[33] = "woth";}
	if (str == "well" || str == "botw" || str == "wel") {Area[34] = "woth";}
	if (i <= 3) {
		var str2 = document.getElementById("barren_input" + i).value;
		if (str2 == "kok" || str2 == "kf" || str2 == "koki" || str2 == "kfc") {Area[1] = "barren";}
		if (str2 == "llr" || str2 == "ranch" || str2 == "lon" || str2 == "ran") {Area[2] = "barren";}
		if (str2 == "fie" || str2 == "hf" || str2 == "field") {Area[3] = "barren";}
		if (str2 == "gv" || str2 == "val" || str2 == "valley") {Area[4] = "barren";}
		if (str2 == "hyl" || str2 == "hylia" || str2 == "lh") {Area[5] = "barren";}
		if (str2 == "mkt" || str2 == "market" || str2 == "mar") {Area[6] = "barren";}
		if (str2 == "hyr c" || str2 == "hcast" || str2 == "hc") {Area[7] = "barren";}
		if (str2 == "ogc" || str2 == "out g" || str2 == "gfairy" || str2 == "og" || str2 == "out") {Area[8] = "barren";}
		if (str2 == "tot" || str2 == "temple" || str2 == "time") {Area[9] = "barren";}
		if (str2 == "fountain" || str2 == "fount" || str2 == "fou" || str2 == "zf") {Area[10] = "barren";}
		if (str2 == "ice" || str2 == "ic" || str2 == "cavern") {Area[11] = "barren";}
		if (str2 == "deku" || str2 == "dek" || str2 == "dt") {Area[12] = "barren";}
		if (str2 == "lw" || str2 == "lost" || str2 == "woods") {Area[13] = "barren";}
		if (str2 == "sfm" || str2 == "mea" || str2 == "mead") {Area[14] = "barren";}
		if (str2 == "gor" || str2 == "gc" || str2 == "goron") {Area[15] = "barren";}
		if (str2 == "dod" || str2 == "dodo" || str2 == "dc") {Area[16] = "barren";}
		if (str2 == "tra" || str2 == "trail" || str2 == "dmt") {Area[17] = "barren";}
		if (str2 == "cra" || str2 == "crater" || str2 == "dmc") {Area[18] = "barren";}
		if (str2 == "kak" || str2 == "kaki" || str2 == "kv") {Area[19] = "barren";}
		if (str2 == "gra" || str2 == "grave" || str2 == "gy") {Area[20] = "barren";}
		if (str2 == "riv" || str2 == "river" || str2 == "zr") {Area[21] = "barren";}
		if (str2 == "dom" || str2 == "domain" || str2 == "zd") {Area[22] = "barren";}
		if (str2 == "col" || str2 == "colo" || str2 == "colossus" || str2 == "co") {Area[23] = "barren";}
		if (str2 == "was" || str2 == "waste" || str2 == "wl" || str2 == "hw") {Area[24] = "barren";}
		if (str2 == "fort" || str2 == "fortress" || str2 == "gf") {Area[25] = "barren";}
		if (str2 == "jab" || str2 == "jabu" || str2 == "jjb" || str2 == "jj") {Area[26] = "barren";}
		if (str2 == "for" || str2 == "forest" || str2 == "fot" || str2 == "fo") {Area[27] = "barren";}
		if (str2 == "fir" || str2 == "fire" || str2 == "fit" || str2 == "fi") {Area[28] = "barren";}
		if (str2 == "wat" || str2 == "wata" || str2 == "water" || str2 == "wa") {Area[29] = "barren";}
		if (str2 == "spi" || str2 == "spirit" || str2 == "sprt" || str2 == "sp") {Area[30] = "barren";}
		if (str2 == "sha" || str2 == "shadow" || str2 == "shad" || str2 == "sh") {Area[31] = "barren";}
		if (str2 == "gan" || str2 == "gan c" || str2 == "ganons" || str2 == "ganon" || str2 == "ga") {Area[32] = "barren";}
		if (str2 == "gtg" || str2 == "tg" || str2 == "gt") {Area[33] = "barren";}
		if (str2 == "well" || str2 == "botw" || str2 == "wel") {Area[34] = "barren";}
	}
}

for(var i = 0; i < checkSummary.length; i++) {
		if (i <= 36 ){
			str = checkSummary[i] + "_location";
			if (checkSummary[i] == "trade") {
				if (!Logic.prescription && !Logic.claim_check) {document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic.prescription || Logic.claim_check) { document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
			else {
				if (!Logic[checkSummary[i]]) { document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic[checkSummary[i]]) {document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
		}
		else {
			str = checkSummary[i];
		}
		if (Game[checkSummary[i]] || i > 36) {
			if (document.getElementById(str).innerHTML.includes("Kokiri:") && Area[1] == "woth") {
				document.getElementById(str).style.color = "00ff88";
			}
			else if ((document.getElementById(str).innerHTML.includes("Ranch:") || document.getElementById(str).innerHTML.includes("Malon"))  && Area[2] == "woth") {
				document.getElementById(str).style.color = "aaaa00";
			}
			else if ((document.getElementById(str).innerHTML.includes("Field:") || document.getElementById(str).innerHTML.includes("OoT")) && Area[3] == "woth") {
				document.getElementById(str).style.color = "ffff00";
			}
			else if (document.getElementById(str).innerHTML.includes("Valley:") && Area[4] == "woth") {
				document.getElementById(str).style.color = "ffaa00";
			}
			else if (document.getElementById(str).innerHTML.includes("Hylia:") && Area[5] == "woth") {
				document.getElementById(str).style.color = "00aaff";
			}
			else if (document.getElementById(str).innerHTML.includes("Market:") && Area[6] == "woth") {
				document.getElementById(str).style.color = "aaaaaa";
			}
			else if ((document.getElementById(str).innerHTML.includes("Hyrule Castle:") || document.getElementById(str).innerHTML.includes("Zelda")) && Area[7] == "woth") {
				document.getElementById(str).style.color = "84FFFF";
			}
			else if (document.getElementById(str).innerHTML.includes("Outside G's:") && Area[8] == "woth") {
				document.getElementById(str).style.color = "FE0404";
			}
			else if ((document.getElementById(str).innerHTML.includes("Temple of Time:") || document.getElementById(str).innerHTML.includes("1Med")) && Area[9] == "woth") {
				document.getElementById(str).style.color = "ffffff";
			}
			else if (document.getElementById(str).innerHTML.includes("Fountain:") && Area[10] == "woth") {
				document.getElementById(str).style.color = "70ffff";
			}
			else if ((document.getElementById(str).innerHTML.includes("Ice:") || document.getElementById(str).innerHTML.includes("Ice")) && Area[11] == "woth") {
				document.getElementById(str).style.color = "aaffff";
			}
			else if (document.getElementById(str).innerHTML.includes("Deku:") && Area[12] == "woth") {
				document.getElementById(str).style.color = "996000";
			}
			else if (document.getElementById(str).innerHTML.includes("Lost Woods:") && Area[13] == "woth") {
				document.getElementById(str).style.color = "009000";
			}
			else if ((document.getElementById(str).innerHTML.includes("SFM:") || document.getElementById(str).innerHTML.includes("Meadow") || document.getElementById(str).innerHTML.includes("Saria")) && Area[14] == "woth") {
				document.getElementById(str).style.color = "80ff80";
			}
			else if (document.getElementById(str).innerHTML.includes("Goron City:") && Area[15] == "woth") {
				document.getElementById(str).style.color = "ffcc00";
			}
			else if (document.getElementById(str).innerHTML.includes("Dodongos:") && Area[16] == "woth") {
				document.getElementById(str).style.color = "B35705";
			}
			else if (document.getElementById(str).innerHTML.includes("Trail:") && Area[17] == "woth") {
				document.getElementById(str).style.color = "573E02";
			}
			else if ((document.getElementById(str).innerHTML.includes("Crater:") || document.getElementById(str).innerHTML.includes("Crater")) && Area[18] == "woth") {
				document.getElementById(str).style.color = "ff5050";
			}
			else if ((document.getElementById(str).innerHTML.includes("Kakariko:") || document.getElementById(str).innerHTML.includes("Windmill") || document.getElementById(str).innerHTML.includes("3Med")) && Area[19] == "woth") {
				document.getElementById(str).style.color = "678C8A";
			}
			else if ((document.getElementById(str).innerHTML.includes("Graveyard:") || document.getElementById(str).innerHTML.includes("Grave")) && Area[20] == "woth") {
				document.getElementById(str).style.color = "8f8493";
			}
			else if (document.getElementById(str).innerHTML.includes("River:") && Area[21] == "woth") {
				document.getElementById(str).style.color = "5DB8FE";
			}
			else if (document.getElementById(str).innerHTML.includes("Domain:") && Area[22] == "woth") {
				document.getElementById(str).style.color = "00ffff";
			}
			else if ((document.getElementById(str).innerHTML.includes("Colossus:") || document.getElementById(str).innerHTML.includes("Colossus")) && Area[23] == "woth") {
				document.getElementById(str).style.color = "cccc90";
			}
			else if (document.getElementById(str).innerHTML.includes("Wasteland:") && Area[24] == "woth") {
				document.getElementById(str).style.color = "cccc30";
			}
			else if (document.getElementById(str).innerHTML.includes("Fortress:") && Area[25] == "woth") {
				document.getElementById(str).style.color = "ffff90";
			}
			else if (document.getElementById(str).innerHTML.includes("Jabu:") && Area[26] == "woth") {
				document.getElementById(str).style.color = "ff0080";
			}
			else if (document.getElementById(str).innerHTML.includes("Forest:") && Area[27] == "woth") {
				document.getElementById(str).style.color = "5FAF36";
			}
			else if (document.getElementById(str).innerHTML.includes("Fire:") && Area[28] == "woth") {
				document.getElementById(str).style.color = "ff0000";
			}
			else if (document.getElementById(str).innerHTML.includes("Water:") && Area[29] == "woth") {
				document.getElementById(str).style.color = "00cccc";
			}
			else if (document.getElementById(str).innerHTML.includes("Spirit:") && Area[30] == "woth") {
				document.getElementById(str).style.color = "ffff50";
			}
			else if (document.getElementById(str).innerHTML.includes("Shadow:") && Area[31] == "woth") {
				document.getElementById(str).style.color = "c900c9";
			}
			else if (document.getElementById(str).innerHTML.includes("Ganon's:") && Area[32] == "woth") {
				document.getElementById(str).style.color = "990000";
			}
			else if (document.getElementById(str).innerHTML.includes("GTG:") && Area[33] == "woth") {
				document.getElementById(str).style.color = "ffcc60";
			}
			else if (document.getElementById(str).innerHTML.includes("Well:") && Area[34] == "woth") {
				document.getElementById(str).style.color = "ff00ff";
			}
			else if (document.getElementById(str).innerHTML.includes("Kokiri:") && Area[1] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Ranch:") || document.getElementById(str).innerHTML.includes("Malon")) && Area[2] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Field:") || document.getElementById(str).innerHTML.includes("OoT")) && Area[3] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Valley:") && Area[4] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Hylia:") && Area[5] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Market:") && Area[6] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Hyrule Castle:") || document.getElementById(str).innerHTML.includes("Zelda")) && Area[7] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Outside G's:") && Area[8] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Temple of Time:") || document.getElementById(str).innerHTML.includes("1Med")) && Area[9] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Fountain:") && Area[10] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Ice:") || document.getElementById(str).innerHTML.includes("Ice")) && Area[11] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Deku:") && Area[12] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Lost Woods:") && Area[13] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("SFM:") || document.getElementById(str).innerHTML.includes("Saria") || document.getElementById(str).innerHTML.includes("Meadow")) && Area[14] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Goron City:") && Area[15] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Dodongos:") && Area[16] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Trail:") && Area[17] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Crater:") || document.getElementById(str).innerHTML.includes("Crater")) && Area[18] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Kakariko:") || document.getElementById(str).innerHTML.includes("Windmill") || document.getElementById(str).innerHTML.includes("3Med")) && Area[19] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Graveyard:") || document.getElementById(str).innerHTML.includes("Grave")) && Area[20] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("River:") && Area[21] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Domain:") && Area[22] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if ((document.getElementById(str).innerHTML.includes("Colossus:") || document.getElementById(str).innerHTML.includes("Colossus")) && Area[23] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Wasteland:") && Area[24] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Fortress:") && Area[25] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Jabu:") && Area[26] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Forest:") && Area[27] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Fire:") && Area[28] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Water:") && Area[29] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Spirit:") && Area[30] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Shadow:") && Area[31] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Ganon's:") && Area[32] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("GTG:") && Area[33] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (document.getElementById(str).innerHTML.includes("Well:") && Area[34] == "barren") {
				document.getElementById(str).style.color = "ff8080";
			}
			else if (i <= 36) {
				if (Logic[checkSummary[i]]) {
					document.getElementById(str).style.color = "chartreuse";
				}
				else {
					document.getElementById(str).style.color = "black";
				}
			}
		}
}
for (var i = 1; i <= 34; i++) {

	if (Area[i] == "barren") {AreaAge[i] += 1;}
	else {AreaAge[i] = 0;}

	if (AreaAge[i] == 10) {
		hinted = true;
		if (i == 1) {
			if(document.getElementById("text_" + Locations[0]) != null) {document.getElementById("text_" + Locations[0]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[1]) != null) {document.getElementById("text_" + Locations[1]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[2]) != null) {document.getElementById("text_" + Locations[2]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[3]) != null) {document.getElementById("text_" + Locations[3]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[4]) != null) {document.getElementById("text_" + Locations[4]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[5]) != null) {document.getElementById("text_" + Locations[5]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 2) {
			if(document.getElementById("text_" + Locations[6]) != null) {document.getElementById("text_" + Locations[6]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[7]) != null) {document.getElementById("text_" + Locations[7]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 3) {
			if(document.getElementById("text_" + Locations[8]) != null) {document.getElementById("text_" + Locations[8]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[9]) != null) {document.getElementById("text_" + Locations[9]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[10]) != null) {document.getElementById("text_" + Locations[10]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[11]) != null) {document.getElementById("text_" + Locations[11]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[12]) != null) {document.getElementById("text_" + Locations[12]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 4) {
			if(document.getElementById("text_" + Locations[13]) != null) {document.getElementById("text_" + Locations[13]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[14]) != null) {document.getElementById("text_" + Locations[14]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[15]) != null) {document.getElementById("text_" + Locations[15]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 5) {
			if(document.getElementById("text_" + Locations[16]) != null) {document.getElementById("text_" + Locations[16]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[17]) != null) {document.getElementById("text_" + Locations[17]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[18]) != null) {document.getElementById("text_" + Locations[18]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[19]) != null) {document.getElementById("text_" + Locations[19]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[20]) != null) {document.getElementById("text_" + Locations[20]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[21]) != null) {document.getElementById("text_" + Locations[21]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 6) {
			if(document.getElementById("text_" + Locations[22]) != null) {document.getElementById("text_" + Locations[22]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[23]) != null) {document.getElementById("text_" + Locations[23]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[24]) != null) {document.getElementById("text_" + Locations[24]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[25]) != null) {document.getElementById("text_" + Locations[25]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[26]) != null) {document.getElementById("text_" + Locations[26]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[27]) != null) {document.getElementById("text_" + Locations[27]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 7) {
			if(document.getElementById("text_" + Locations[28]) != null) {document.getElementById("text_" + Locations[28]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 8) {
			if(document.getElementById("text_" + Locations[29]) != null) {document.getElementById("text_" + Locations[29]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 9) {
			if(document.getElementById("text_" + Locations[30]) != null) {document.getElementById("text_" + Locations[30]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 10) {
			if(document.getElementById("text_" + Locations[31]) != null) {document.getElementById("text_" + Locations[31]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[32]) != null) {document.getElementById("text_" + Locations[32]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[33]) != null) {document.getElementById("text_" + Locations[33]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 11) {
			if(document.getElementById("text_" + Locations[34]) != null) {document.getElementById("text_" + Locations[34]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[35]) != null) {document.getElementById("text_" + Locations[35]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[36]) != null) {document.getElementById("text_" + Locations[36]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[37]) != null) {document.getElementById("text_" + Locations[37]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 12) {
			if(document.getElementById("text_" + Locations[38]) != null) {document.getElementById("text_" + Locations[38]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[39]) != null) {document.getElementById("text_" + Locations[39]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[40]) != null) {document.getElementById("text_" + Locations[40]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[41]) != null) {document.getElementById("text_" + Locations[41]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[42]) != null) {document.getElementById("text_" + Locations[42]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[43]) != null) {document.getElementById("text_" + Locations[43]).dispatchEvent(new Event('mousedown'));}
			Game.deku_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 13) {
			if(document.getElementById("text_" + Locations[45]) != null) {document.getElementById("text_" + Locations[45]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[46]) != null) {document.getElementById("text_" + Locations[46]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[47]) != null) {document.getElementById("text_" + Locations[47]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[48]) != null) {document.getElementById("text_" + Locations[48]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[49]) != null) {document.getElementById("text_" + Locations[49]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[50]) != null) {document.getElementById("text_" + Locations[50]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[51]) != null) {document.getElementById("text_" + Locations[51]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 14) {
			if(document.getElementById("text_" + Locations[52]) != null) {document.getElementById("text_" + Locations[52]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 15) {
			if(document.getElementById("text_" + Locations[53]) != null) {document.getElementById("text_" + Locations[53]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[54]) != null) {document.getElementById("text_" + Locations[54]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[55]) != null) {document.getElementById("text_" + Locations[55]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[56]) != null) {document.getElementById("text_" + Locations[56]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[57]) != null) {document.getElementById("text_" + Locations[57]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[58]) != null) {document.getElementById("text_" + Locations[58]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[59]) != null) {document.getElementById("text_" + Locations[59]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 16) {
			if(document.getElementById("text_" + Locations[60]) != null) {document.getElementById("text_" + Locations[60]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[61]) != null) {document.getElementById("text_" + Locations[61]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[62]) != null) {document.getElementById("text_" + Locations[62]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[63]) != null) {document.getElementById("text_" + Locations[63]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[64]) != null) {document.getElementById("text_" + Locations[64]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[65]) != null) {document.getElementById("text_" + Locations[65]).dispatchEvent(new Event('mousedown'));}
			Game.dodongos_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 17) {
			if(document.getElementById("text_" + Locations[67]) != null) {document.getElementById("text_" + Locations[67]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[68]) != null) {document.getElementById("text_" + Locations[68]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[69]) != null) {document.getElementById("text_" + Locations[69]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[70]) != null) {document.getElementById("text_" + Locations[70]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[71]) != null) {document.getElementById("text_" + Locations[71]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 18) {
			if(document.getElementById("text_" + Locations[72]) != null) {document.getElementById("text_" + Locations[72]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[73]) != null) {document.getElementById("text_" + Locations[73]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[74]) != null) {document.getElementById("text_" + Locations[74]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[75]) != null) {document.getElementById("text_" + Locations[75]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 19) {
			if(document.getElementById("text_" + Locations[76]) != null) {document.getElementById("text_" + Locations[76]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[77]) != null) {document.getElementById("text_" + Locations[77]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[78]) != null) {document.getElementById("text_" + Locations[78]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[79]) != null) {document.getElementById("text_" + Locations[79]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[80]) != null) {document.getElementById("text_" + Locations[80]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[81]) != null) {document.getElementById("text_" + Locations[81]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[82]) != null) {document.getElementById("text_" + Locations[82]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[83]) != null) {document.getElementById("text_" + Locations[83]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[84]) != null) {document.getElementById("text_" + Locations[84]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[85]) != null) {document.getElementById("text_" + Locations[85]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[86]) != null) {document.getElementById("text_" + Locations[86]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[87]) != null) {document.getElementById("text_" + Locations[87]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[88]) != null) {document.getElementById("text_" + Locations[88]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 20) {
			if(document.getElementById("text_" + Locations[89]) != null) {document.getElementById("text_" + Locations[89]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[90]) != null) {document.getElementById("text_" + Locations[90]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[91]) != null) {document.getElementById("text_" + Locations[91]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[92]) != null) {document.getElementById("text_" + Locations[92]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[93]) != null) {document.getElementById("text_" + Locations[93]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[94]) != null) {document.getElementById("text_" + Locations[94]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[95]) != null) {document.getElementById("text_" + Locations[95]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 21) {
			if(document.getElementById("text_" + Locations[96]) != null) {document.getElementById("text_" + Locations[96]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[97]) != null) {document.getElementById("text_" + Locations[97]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[98]) != null) {document.getElementById("text_" + Locations[98]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[99]) != null) {document.getElementById("text_" + Locations[99]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[100]) != null) {document.getElementById("text_" + Locations[100]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 22) {
			if(document.getElementById("text_" + Locations[101]) != null) {document.getElementById("text_" + Locations[101]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[102]) != null) {document.getElementById("text_" + Locations[102]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[103]) != null) {document.getElementById("text_" + Locations[103]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 23) {
			if(document.getElementById("text_" + Locations[104]) != null) {document.getElementById("text_" + Locations[104]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[105]) != null) {document.getElementById("text_" + Locations[105]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 24) {
			if(document.getElementById("text_" + Locations[106]) != null) {document.getElementById("text_" + Locations[106]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 25) {
			if(document.getElementById("text_" + Locations[107]) != null) {document.getElementById("text_" + Locations[107]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[108]) != null) {document.getElementById("text_" + Locations[108]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[109]) != null) {document.getElementById("text_" + Locations[109]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 26) {
			if(document.getElementById("text_" + Locations[110]) != null) {document.getElementById("text_" + Locations[110]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[111]) != null) {document.getElementById("text_" + Locations[111]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[112]) != null) {document.getElementById("text_" + Locations[112]).dispatchEvent(new Event('mousedown'));}
			Game.jabu_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 27) {
			Game.checks_remaining -= Game.forest_checks_remaining;
			Game.forest_checks_remaining = 0;
		}
		if (i == 28) {
			Game.checks_remaining -= Game.fire_checks_remaining;
			Game.fire_checks_remaining = 0;
		}
		if (i == 29) {
			Game.checks_remaining -= Game.water_checks_remaining;
			Game.water_checks_remaining = 0;
		}
		if (i == 30) {
			Game.checks_remaining -= Game.spirit_checks_remaining;
			Game.spirit_checks_remaining = 0;
		}
		if (i == 31) {
			Game.checks_remaining -= Game.shadow_checks_remaining;
			Game.shadow_checks_remaining = 0;
		}
		if (i == 32) {
			document.getElementById("ganons").click();
		}
		if (i == 33) {
			Game.checks_remaining -= Game.gtg_checks_remaining;
			Game.gtg_checks_remaining = 0;
		}
		if (i == 34) {
			Game.checks_remaining -= Game.well_checks_remaining;
			Game.well_checks_remaining = 0;
		}
		hinted = false;
	}
}

if (Game.magic1 && Game.light_arrows && Game.bow1 && Game.ganons_checks_remaining > 0) {
	document.getElementById("ganons").click();
}

if (document.getElementById("markStones") != null) {
	var tempstring = document.getElementById("markStones").value;
if(tempstring.length == 6) 	{
	var str = tempstring;
	var first = str.substring(0,2);
	var second = str.substring(2,4);
	var third = str.substring(4,6);
	var parent = document.getElementById("info_column");
	var child = document.getElementById("markStones");


	if (first == "de") {Logic.emerald = "deku"; }
	else if (first == "do") {Logic.emerald = "dodongos"; }
	else if (first == "ja") {Logic.emerald = "jabu"; }
	else if (first == "fo") {Logic.emerald = "forest"; }
	else if (first == "fi") {Logic.emerald = "fire"; }
	else if (first == "wa") {Logic.emerald = "water"; }
	else if (first == "sp") {Logic.emerald = "spirit"; }
	else if (first == "sh") {Logic.emerald = "shadow"; }
	else if (first == "fr" || first == "kk") {Logic.emerald = "pocket"; }

	if (second == "de") {Logic.ruby = "deku"; }
	else if (second == "do") {Logic.ruby = "dodongos"; }
	else if (second == "ja") {Logic.ruby = "jabu"; }
	else if (second == "fo") {Logic.ruby = "forest"; }
	else if (second == "fi") {Logic.ruby = "fire"; }
	else if (second == "wa") {Logic.ruby = "water"; }
	else if (second == "sp") {Logic.ruby = "spirit"; }
	else if (second == "sh") {Logic.ruby = "shadow"; }
	else if (second == "fr" || second == "kk") {Logic.ruby = "pocket"; }

	if (third == "de") {Logic.sapphire = "deku"; }
	else if (third == "do") {Logic.sapphire = "dodongos"; }
	else if (third == "ja") {Logic.sapphire = "jabu"; }
	else if (third == "fo") {Logic.sapphire = "forest"; }
	else if (third == "fi") {Logic.sapphire = "fire"; }
	else if (third == "wa") {Logic.sapphire = "water"; }
	else if (third == "sp") {Logic.sapphire = "spirit"; }
	else if (third == "sh") {Logic.sapphire = "shadow"; }
	else if (third == "fr" || third == "kk") {Logic.sapphire = "pocket"; }
	if(Logic.emerald.length > 0 && Logic.ruby.length > 0 && Logic.sapphire.length> 0 && Logic.emerald != "unknown" && Logic.ruby != "unknown" && Logic.sapphire != "unknown") {
		parent.removeChild(child);
		if (first == "de") {Logic.emerald = "deku"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dek"; document.getElementById("text_kok_eme").id = "text_deku";}
	else if (first == "do") {Logic.emerald = "dodongos"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dod"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.bomb_bag_img; document.getElementById("kok_eme_req1").id = "dod_req1"; document.getElementById("text_kok_eme").id = "text_dod";}
	else if (first == "ja") {Logic.emerald = "jabu"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "jab"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.letter_img; document.getElementById("kok_eme_req2").src=Game.boomerang_img; document.getElementById("kok_eme_req1").id = "jab_req1"; document.getElementById("kok_eme_req2").id = "jab_req2"; document.getElementById("text_kok_eme").id = "text_jabu";}
	else if (first == "fo") {Logic.emerald = "forest"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "for"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hookshot_img; document.getElementById("kok_eme_req2").src=Game.bow_img; document.getElementById("kok_eme_req3").src=Game.goron_bracelet_img; document.getElementById("kok_eme_req1").id = "for_req1"; document.getElementById("kok_eme_req2").id = "for_req2"; document.getElementById("kok_eme_req3").id = "for_req3"; document.getElementById("text_kok_eme").id = "text_forest";}
	else if (first == "fi") {Logic.emerald = "fire"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "fir"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hammer_img; document.getElementById("kok_eme_req1").id = "fir_req1"; document.getElementById("text_kok_eme").id = "text_fire";}
	else if (first == "wa") {Logic.emerald = "water"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "wat"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.iron_boots_img; document.getElementById("kok_eme_text2").innerHTML ="/"; document.getElementById("kok_eme_req2").src=Game.golden_scale_img; document.getElementById("kok_eme_text3").innerHTML = "+"; document.getElementById("kok_eme_req3").src=Game.longshot_img; document.getElementById("kok_eme_req1").id = "wat_req1"; document.getElementById("kok_eme_req2").id = "wat_req2"; document.getElementById("kok_eme_req3").id = "wat_req3"; document.getElementById("text_kok_eme").id = "text_water";}
	else if (first == "sp") {Logic.emerald = "spirit"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "spi"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.silver_gauntlets_img; document.getElementById("kok_eme_req2").src=Game.mirror_shield_img; document.getElementById("kok_eme_req3").src=Game.bomb_bag_img; document.getElementById("kok_eme_req4").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "spi_req1"; document.getElementById("kok_eme_req2").id = "spi_req2"; document.getElementById("kok_eme_req3").id = "spi_req3"; document.getElementById("kok_eme_req4").id = "spi_req4"; document.getElementById("text_kok_eme").id = "text_spirit";}
	else if (first == "sh") {Logic.emerald = "shadow"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "sha"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req5").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.dins_fire_img; document.getElementById("kok_eme_req2").src =Game.magic_meter_img; document.getElementById("kok_eme_req3").src=Game.hover_boots_img; document.getElementById("kok_eme_req4").src=Game.bomb_bag_img; document.getElementById("kok_eme_req5").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "sha_req1"; document.getElementById("kok_eme_req2").id = "sha_req2"; document.getElementById("kok_eme_req3").id = "sha_req3"; document.getElementById("kok_eme_req4").id = "sha_req4"; document.getElementById("kok_eme_req5").id = "sha_req5"; document.getElementById("text_kok_eme").id = "text_shadow";}
	else if (first == "fr" || first == "kk") {Logic.emerald = "pocket"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "pok"; document.getElementById("text_kok_eme").id = "text_pocket";}

	if (second == "de") {Logic.ruby = "deku"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dek"; document.getElementById("text_gor_rub").id = "text_deku";}
	else if (second == "do") {Logic.ruby = "dodongos"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dod"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.bomb_bag_img; document.getElementById("gor_rub_req1").id = "dod_req1"; document.getElementById("text_gor_rub").id = "text_dod";}
	else if (second == "ja") {Logic.ruby = "jabu"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "jab"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.letter_img; document.getElementById("gor_rub_req2").src=Game.boomerang_img; document.getElementById("gor_rub_req1").id = "jab_req1"; document.getElementById("gor_rub_req2").id = "jab_req2"; document.getElementById("text_gor_rub").id = "text_jabu";}
	else if (second == "fo") {Logic.ruby = "forest"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "for"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hookshot_img; document.getElementById("gor_rub_req2").src=Game.bow_img; document.getElementById("gor_rub_req3").src=Game.goron_bracelet_img; document.getElementById("gor_rub_req1").id = "for_req1"; document.getElementById("gor_rub_req2").id = "for_req2"; document.getElementById("gor_rub_req3").id = "for_req3"; document.getElementById("text_gor_rub").id = "text_forest";}
	else if (second == "fi") {Logic.ruby = "fire"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "fir"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hammer_img; document.getElementById("gor_rub_req1").id = "fir_req1"; document.getElementById("text_gor_rub").id = "text_fire";}
	else if (second == "wa") {Logic.ruby = "water"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "wat"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.iron_boots_img; document.getElementById("gor_rub_text2").innerHTML ="/"; document.getElementById("gor_rub_req2").src=Game.golden_scale_img; document.getElementById("gor_rub_text3").innerHTML = "+"; document.getElementById("gor_rub_req3").src=Game.longshot_img; document.getElementById("gor_rub_req1").id = "wat_req1"; document.getElementById("gor_rub_req2").id = "wat_req2"; document.getElementById("gor_rub_req3").id = "wat_req3"; document.getElementById("text_gor_rub").id = "text_water";}
	else if (second == "sp") {Logic.ruby = "spirit"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "spi"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.silver_gauntlets_img; document.getElementById("gor_rub_req2").src=Game.mirror_shield_img; document.getElementById("gor_rub_req3").src=Game.bomb_bag_img; document.getElementById("gor_rub_req4").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "spi_req1"; document.getElementById("gor_rub_req2").id = "spi_req2"; document.getElementById("gor_rub_req3").id = "spi_req3"; document.getElementById("gor_rub_req4").id = "spi_req4"; document.getElementById("text_gor_rub").id = "text_spirit";}
	else if (second == "sh") {Logic.ruby = "shadow"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "sha"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req5").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.dins_fire_img; document.getElementById("gor_rub_req2").src =Game.magic_meter_img; document.getElementById("gor_rub_req3").src=Game.hover_boots_img; document.getElementById("gor_rub_req4").src=Game.bomb_bag_img; document.getElementById("gor_rub_req5").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "sha_req1"; document.getElementById("gor_rub_req2").id = "sha_req2"; document.getElementById("gor_rub_req3").id = "sha_req3"; document.getElementById("gor_rub_req4").id = "sha_req4"; document.getElementById("gor_rub_req5").id = "sha_req5"; document.getElementById("text_gor_rub").id = "text_shadow";}
	else if (second == "fr" || second == "kk") {Logic.ruby = "pocket"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "pok"; document.getElementById("text_gor_rub").id = "text_pocket";}

	if (third == "de") {Logic.sapphire = "deku"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dek"; document.getElementById("text_zor_sap").id = "text_deku";}
	else if (third == "do") {Logic.sapphire = "dodongos"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dod"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.bomb_bag_img; document.getElementById("zor_sap_req1").id = "dod_req1"; document.getElementById("text_zor_sap").id = "text_dod";}
	else if (third == "ja") {Logic.sapphire = "jabu"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "jab"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.letter_img; document.getElementById("zor_sap_req2").src=Game.boomerang_img; document.getElementById("zor_sap_req1").id = "jab_req1"; document.getElementById("zor_sap_req2").id = "jab_req2"; document.getElementById("text_zor_sap").id = "text_jabu";}
	else if (third == "fo") {Logic.sapphire = "forest"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "for"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hookshot_img; document.getElementById("zor_sap_req2").src=Game.bow_img; document.getElementById("zor_sap_req3").src=Game.goron_bracelet_img; document.getElementById("zor_sap_req1").id = "for_req1"; document.getElementById("zor_sap_req2").id = "for_req2"; document.getElementById("zor_sap_req3").id = "for_req3"; document.getElementById("text_zor_sap").id = "text_forest";}
	else if (third == "fi") {Logic.sapphire = "fire"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "fir"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hammer_img; document.getElementById("zor_sap_req1").id = "fir_req1"; document.getElementById("text_zor_sap").id = "text_fire";}
	else if (third == "wa") {Logic.sapphire = "water"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "wat"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.iron_boots_img; document.getElementById("zor_sap_text2").innerHTML ="/"; document.getElementById("zor_sap_req2").src=Game.golden_scale_img; document.getElementById("zor_sap_text3").innerHTML = "+"; document.getElementById("zor_sap_req3").src=Game.longshot_img; document.getElementById("zor_sap_req1").id = "wat_req1"; document.getElementById("zor_sap_req2").id = "wat_req2"; document.getElementById("zor_sap_req3").id = "wat_req3"; document.getElementById("text_zor_sap").id = "text_water";}
	else if (third == "sp") {Logic.sapphire = "spirit"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "spi"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.silver_gauntlets_img; document.getElementById("zor_sap_req2").src=Game.mirror_shield_img; document.getElementById("zor_sap_req3").src=Game.bomb_bag_img; document.getElementById("zor_sap_req4").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "spi_req1"; document.getElementById("zor_sap_req2").id = "spi_req2"; document.getElementById("zor_sap_req3").id = "spi_req3"; document.getElementById("zor_sap_req4").id = "spi_req4"; document.getElementById("text_zor_sap").id = "text_spirit";}
	else if (third == "sh") {Logic.sapphire = "shadow"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "sha"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req5").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.dins_fire_img; document.getElementById("zor_sap_req2").src =Game.magic_meter_img; document.getElementById("zor_sap_req3").src=Game.hover_boots_img; document.getElementById("zor_sap_req4").src=Game.bomb_bag_img; document.getElementById("zor_sap_req5").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "sha_req1"; document.getElementById("zor_sap_req2").id = "sha_req2"; document.getElementById("zor_sap_req3").id = "sha_req3"; document.getElementById("zor_sap_req4").id = "sha_req4"; document.getElementById("zor_sap_req5").id = "sha_req5"; document.getElementById("text_zor_sap").id = "text_shadow";}
	else if (third == "fr" || third == "kk") {Logic.sapphire = "pocket"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "pok"; document.getElementById("text_zor_sap").id = "text_pocket";}
		}
}
}
var tempstring = "";
if (document.getElementById("markMedallions") != null) {tempstring = document.getElementById("markMedallions").value;}
if((tempstring.length == 6 && document.getElementById("markStones") == null) || tempstring.length == 12) 	{
	var str = tempstring;
	var first = str.substring(0,2);
	var second = str.substring(2,4);
	var third = str.substring(4,6);
	var fourth = str.substring(6,8);
	var fifth = str.substring(8,10);
	var sixth = str.substring(10,12);
	var parent = document.getElementById("info_column");
	var child = document.getElementById("markMedallions");


	if (first == "de") {Logic.forest_medallion_location = "deku"; dekuRequired = 1;}
	else if (first == "do") {Logic.forest_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (first == "ja") {Logic.forest_medallion_location = "jabu"; jabuRequired = 1;}
	else if (first == "fo") {Logic.forest_medallion_location = "forest"; forestRequired = 1;}
	else if (first == "fi") {Logic.forest_medallion_location = "fire"; fireRequired = 1;}
	else if (first == "wa") {Logic.forest_medallion_location = "water"; waterRequired = 1;}
	else if (first == "sp") {Logic.forest_medallion_location = "spirit"; spiritRequired = 1;}
	else if (first == "sh") {Logic.forest_medallion_location = "shadow"; shadowRequired = 1;}
	else if (first == "fr" || first == "kk") {Logic.forest_medallion_location = "pocket"; }

	if (second == "de") {Logic.fire_medallion_location = "deku"; dekuRequired = 1;}
	else if (second == "do") {Logic.fire_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (second == "ja") {Logic.fire_medallion_location = "jabu"; jabuRequired = 1;}
	else if (second == "fo") {Logic.fire_medallion_location = "forest"; forestRequired = 1;}
	else if (second == "fi") {Logic.fire_medallion_location = "fire"; fireRequired = 1;}
	else if (second == "wa") {Logic.fire_medallion_location = "water"; waterRequired = 1;}
	else if (second == "sp") {Logic.fire_medallion_location = "spirit"; spiritRequired = 1;}
	else if (second == "sh") {Logic.fire_medallion_location = "shadow"; shadowRequired = 1;}
	else if (second == "fr" || second == "kk") {Logic.fire_medallion_location = "pocket"; }

	if (third == "de") {Logic.water_medallion_location = "deku"; dekuRequired = 1;}
	else if (third == "do") {Logic.water_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (third == "ja") {Logic.water_medallion_location = "jabu"; jabuRequired = 1;}
	else if (third == "fo") {Logic.water_medallion_location = "forest"; forestRequired = 1;}
	else if (third == "fi") {Logic.water_medallion_location = "fire"; fireRequired = 1;}
	else if (third == "wa") {Logic.water_medallion_location = "water"; waterRequired = 1;}
	else if (third == "sp") {Logic.water_medallion_location = "spirit"; spiritRequired = 1;}
	else if (third == "sh") {Logic.water_medallion_location = "shadow"; shadowRequired = 1;}
	else if (third == "fr" || third == "kk") {Logic.water_medallion_location = "pocket"; }

	if (fourth == "de") {Logic.generic1 = "deku"; dekuRequired = 1;}
	else if (fourth == "do") {Logic.generic1 = "dodongos"; dodongosRequired = 1;}
	else if (fourth == "ja") {Logic.generic1 = "jabu"; jabuRequired = 1;}
	else if (fourth == "fo") {Logic.generic1 = "forest"; forestRequired = 1;}
	else if (fourth == "fi") {Logic.generic1 = "fire"; fireRequired = 1;}
	else if (fourth == "wa") {Logic.generic1 = "water"; waterRequired = 1;}
	else if (fourth == "sp") {Logic.generic1 = "spirit"; spiritRequired = 1;}
	else if (fourth == "sh") {Logic.generic1 = "shadow"; shadowRequired = 1;}
	else if (fourth == "fr" || fourth == "kk") {Logic.generic1 = "pocket"; }

	if (fifth == "de") {Logic.generic2 = "deku"; dekuRequired = 1;}
	else if (fifth == "do") {Logic.generic2 = "dodongos"; dodongosRequired = 1;}
	else if (fifth == "ja") {Logic.generic2 = "jabu"; jabuRequired = 1;}
	else if (fifth == "fo") {Logic.generic2 = "forest"; forestRequired = 1;}
	else if (fifth == "fi") {Logic.generic2 = "fire"; fireRequired = 1;}
	else if (fifth == "wa") {Logic.generic2 = "water"; waterRequired = 1;}
	else if (fifth == "sp") {Logic.generic2 = "spirit"; spiritRequired = 1;}
	else if (fifth == "sh") {Logic.generic2 = "shadow"; shadowRequired = 1;}
	else if (fifth == "fr" || fifth == "kk") {Logic.generic2 = "pocket"; }

	if (sixth == "de") {Logic.generic3 = "deku"; dekuRequired = 1;}
	else if (sixth == "do") {Logic.generic3 = "dodongos"; dodongosRequired = 1;}
	else if (sixth == "ja") {Logic.generic3 = "jabu"; jabuRequired = 1;}
	else if (sixth == "fo") {Logic.generic3 = "forest"; forestRequired = 1;}
	else if (sixth == "fi") {Logic.generic3 = "fire"; fireRequired = 1;}
	else if (sixth == "wa") {Logic.generic3 = "water"; waterRequired = 1;}
	else if (sixth == "sp") {Logic.generic3 = "spirit"; spiritRequired = 1;}
	else if (sixth == "sh") {Logic.generic3 = "shadow"; shadowRequired = 1;}
	else if (sixth == "fr" || sixth == "kk") {Logic.generic3 = "pocket"; }
	if((Logic.forest_medallion_location != "unknown" && Logic.fire_medallion_location != "unknown" && Logic.water_medallion_location != "unknown" && tempstring.length == 6) || Logic.forest_medallion_location != "unknown" && Logic.fire_medallion_location != "unknown" && Logic.water_medallion_location != "unknown" && Logic.generic1 != "unknown" && Logic.generic2 != "unknown" && Logic.generic3 != "unknown") {
		parent.removeChild(child);
		if (tempstring.length == 12) {
			var temp = first;
			first = second;
			second = third;
			third = fourth;
			fourth = fifth;
			fifth = sixth;
			sixth = temp;
			temp = Logic.forest_medallion_location;
			Logic.forest_medallion_location = Logic.fire_medallion_location;
			Logic.fire_medallion_location = Logic.water_medallion_location;
			Logic.water_medallion_location = Logic.generic1;
			Logic.generic1 = Logic.generic2;
			Logic.generic2 = Logic.generic3;
			Logic.generic3 = temp;
		}
		if (first == "de") {Logic.forest_medallion_location = "deku"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dek"; document.getElementById("text_for_med").id = "text_deku";}
		else if (first == "do") {Logic.forest_medallion_location = "dodongos"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dod"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src = Game.bomb_bag_img; ; document.getElementById("for_med_req1").id = "dod_req1"; document.getElementById("text_for_med").id = "text_dod";}
		else if (first == "ja") {Logic.forest_medallion_location = "jabu"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "jab"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req1").src=Game.letter_img; document.getElementById("for_med_req2").src=Game.boomerang_img; document.getElementById("for_med_req1").id = "jab_req1"; document.getElementById("for_med_req2").id = "jab_req2"; document.getElementById("text_for_med").id = "text_jabu";}
		else if (first == "fo") {Logic.forest_medallion_location = "forest"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "for"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.hookshot_img; document.getElementById("for_med_req2").src=Game.bow_img; document.getElementById("for_med_req3").src=Game.goron_bracelet_img; document.getElementById("for_med_req1").id = "for_req1"; document.getElementById("for_med_req2").id = "for_req2"; document.getElementById("for_med_req3").id = "for_req3"; document.getElementById("text_for_med").id = "text_forest";}
		else if (first == "fi") {Logic.forest_medallion_location = "fire"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "fir"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src=Game.hammer_img; document.getElementById("for_med_req1").id = "fir_req1"; document.getElementById("text_for_med").id = "text_fire";}
		else if (first == "wa") {Logic.forest_medallion_location = "water"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "wat"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.iron_boots_img; document.getElementById("for_med_text2").innerHTML ="/"; document.getElementById("for_med_req2").src=Game.golden_scale_img; document.getElementById("for_med_text3").innerHTML = "+"; document.getElementById("for_med_req3").src=Game.longshot_img; document.getElementById("for_med_req1").id = "wat_req1"; document.getElementById("for_med_req2").id = "wat_req2"; document.getElementById("for_med_req3").id = "wat_req3"; document.getElementById("text_for_med").id = "text_water";}
		else if (first == "sp") {Logic.forest_medallion_location = "spirit"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "spi"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req1").src=Game.silver_gauntlets_img; document.getElementById("for_med_req2").src=Game.mirror_shield_img; document.getElementById("for_med_req3").src = Game.bomb_bag_img; document.getElementById("for_med_req4").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "spi_req1"; document.getElementById("for_med_req2").id = "spi_req2"; document.getElementById("for_med_req3").id = "spi_req3"; document.getElementById("for_med_req4").id = "spi_req4"; document.getElementById("text_for_med").id = "text_spirit";}
		else if (first == "sh") {Logic.forest_medallion_location = "shadow"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "sha"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req5").className = "requirements"; document.getElementById("for_med_req1").src=Game.dins_fire_img; document.getElementById("for_med_req2").src=Game.magic_meter_img; document.getElementById("for_med_req3").src=Game.hover_boots_img; document.getElementById("for_med_req4").src = Game.bomb_bag_img; document.getElementById("for_med_req5").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "sha_req1"; document.getElementById("for_med_req2").id = "sha_req2"; document.getElementById("for_med_req3").id = "sha_req3"; document.getElementById("for_med_req4").id = "sha_req4"; document.getElementById("for_med_req5").id = "sha_req5"; document.getElementById("text_for_med").id = "text_shadow";}
		else if (first == "fr" || first == "kk") {Logic.forest_medallion_location = "pocket"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "pok"; document.getElementById("text_for_med").id = "text_pocket";}
		if (second == "de") {Logic.fire_medallion_location = "deku"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dek"; document.getElementById("text_fir_med").id = "text_deku";}
		else if (second == "do") {Logic.fire_medallion_location = "dodongos"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dod"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src = Game.bomb_bag_img; document.getElementById("fir_med_req1").id = "dod_req1"; document.getElementById("text_fir_med").id = "text_dod";}
		else if (second == "ja") {Logic.fire_medallion_location = "jabu"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "jab"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req1").src=Game.letter_img; document.getElementById("fir_med_req2").src=Game.boomerang_img; document.getElementById("fir_med_req1").id = "jab_req1"; document.getElementById("fir_med_req2").id = "jab_req2"; document.getElementById("text_fir_med").id = "text_jabu";}
		else if (second == "fo") {Logic.fire_medallion_location = "forest"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "for"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hookshot_img; document.getElementById("fir_med_req2").src=Game.bow_img; document.getElementById("fir_med_req3").src=Game.goron_bracelet_img; document.getElementById("fir_med_req1").id = "for_req1"; document.getElementById("fir_med_req2").id = "for_req2"; document.getElementById("fir_med_req3").id = "for_req3"; document.getElementById("text_fir_med").id = "text_forest";}
		else if (second == "fi") {Logic.fire_medallion_location = "fire"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "fir"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hammer_img; document.getElementById("fir_med_req1").id = "fir_req1"; document.getElementById("text_fir_med").id = "text_fire";}
		else if (second == "wa") {Logic.fire_medallion_location = "water"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "wat";  document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.iron_boots_img; document.getElementById("fir_med_text2").innerHTML ="/"; document.getElementById("fir_med_req2").src=Game.golden_scale_img; document.getElementById("fir_med_text3").innerHTML = "+"; document.getElementById("fir_med_req3").src=Game.longshot_img; document.getElementById("fir_med_req1").id = "wat_req1"; document.getElementById("fir_med_req2").id = "wat_req2"; document.getElementById("fir_med_req3").id = "wat_req3"; document.getElementById("text_fir_med").id = "text_water";}
		else if (second == "sp") {Logic.fire_medallion_location = "spirit"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "spi"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req1").src=Game.silver_gauntlets_img; document.getElementById("fir_med_req2").src=Game.mirror_shield_img; document.getElementById("fir_med_req3").src = Game.bomb_bag_img; document.getElementById("fir_med_req4").src=Game.hookshot_img;  document.getElementById("fir_med_req1").id = "spi_req1"; document.getElementById("fir_med_req2").id = "spi_req2"; document.getElementById("fir_med_req3").id = "spi_req3"; document.getElementById("fir_med_req4").id = "spi_req4"; document.getElementById("text_fir_med").id = "text_spirit";}
		else if (second == "sh") {Logic.fire_medallion_location = "shadow"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "sha"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req5").className = "requirements"; document.getElementById("fir_med_req1").src=Game.dins_fire_img; document.getElementById("fir_med_req2").src=Game.magic_meter_img; document.getElementById("fir_med_req3").src=Game.hover_boots_img; document.getElementById("fir_med_req4").src = Game.bomb_bag_img; document.getElementById("fir_med_req5").src=Game.hookshot_img; document.getElementById("fir_med_req1").id = "sha_req1"; document.getElementById("fir_med_req2").id = "sha_req2"; document.getElementById("fir_med_req3").id = "sha_req3"; document.getElementById("fir_med_req4").id = "sha_req4"; document.getElementById("fir_med_req5").id = "sha_req5"; document.getElementById("text_fir_med").id = "text_shadow";}
		else if (second == "fr" || second == "kk") {Logic.fire_medallion_location = "pocket"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "pok"; document.getElementById("text_fir_med").id = "text_pocket";}
		if (third == "de") {Logic.water_medallion_location = "deku"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dek"; document.getElementById("text_wat_med").id = "text_deku";}
		else if (third == "do") {Logic.water_medallion_location = "dodongos"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dod"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src = Game.bomb_bag_img; document.getElementById("wat_med_req1").id = "dod_req1"; document.getElementById("text_wat_med").id = "text_dod";}
		else if (third == "ja") {Logic.water_medallion_location = "jabu"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "jab"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req1").src=Game.letter_img; document.getElementById("wat_med_req2").src=Game.boomerang_img; document.getElementById("wat_med_req1").id = "jab_req1"; document.getElementById("wat_med_req2").id = "jab_req2"; document.getElementById("text_wat_med").id = "text_jabu";}
		else if (third == "fo") {Logic.water_medallion_location = "forest"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "for"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hookshot_img; document.getElementById("wat_med_req2").src=Game.bow_img; document.getElementById("wat_med_req3").src=Game.goron_bracelet_img; document.getElementById("wat_med_req1").id = "for_req1"; document.getElementById("wat_med_req2").id = "for_req2"; document.getElementById("wat_med_req3").id = "for_req3"; document.getElementById("text_wat_med").id = "text_forest";}
		else if (third == "fi") {Logic.water_medallion_location = "fire"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "fir"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hammer_img; document.getElementById("wat_med_req1").id = "fir_req1"; document.getElementById("text_wat_med").id = "text_fire";}
		else if (third == "wa") {Logic.water_medallion_location = "water"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "wat";  document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.iron_boots_img; document.getElementById("wat_med_text2").innerHTML ="/"; document.getElementById("wat_med_req2").src=Game.golden_scale_img; document.getElementById("wat_med_text3").innerHTML = "+"; document.getElementById("wat_med_req3").src=Game.longshot_img; document.getElementById("wat_med_req1").id = "wat_req1"; document.getElementById("wat_med_req2").id = "wat_req2"; document.getElementById("wat_med_req3").id = "wat_req3"; document.getElementById("text_wat_med").id = "text_water";}
		else if (third == "sp") {Logic.water_medallion_location = "spirit"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "spi"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req1").src=Game.silver_gauntlets_img; document.getElementById("wat_med_req2").src=Game.mirror_shield_img; document.getElementById("wat_med_req3").src = Game.bomb_bag_img; document.getElementById("wat_med_req4").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "spi_req1"; document.getElementById("wat_med_req2").id = "spi_req2"; document.getElementById("wat_med_req3").id = "spi_req3"; document.getElementById("wat_med_req4").id = "spi_req4"; document.getElementById("text_wat_med").id = "text_spirit";}
		else if (third == "sh") {Logic.water_medallion_location = "shadow"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "sha"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req5").className = "requirements"; document.getElementById("wat_med_req1").src=Game.dins_fire_img; document.getElementById("wat_med_req2").src=Game.magic_meter_img; document.getElementById("wat_med_req3").src=Game.hover_boots_img; document.getElementById("wat_med_req4").src = Game.bomb_bag_img; document.getElementById("wat_med_req5").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "sha_req1"; document.getElementById("wat_med_req2").id = "sha_req2"; document.getElementById("wat_med_req3").id = "sha_req3"; document.getElementById("wat_med_req4").id = "sha_req4"; document.getElementById("wat_med_req5").id = "sha_req5"; document.getElementById("text_wat_med").id = "text_shadow";}
		else if (third == "fr" || third == "kk") {Logic.water_medallion_location = "pocket"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "pok"; document.getElementById("text_wat_med").id = "text_pocket";}
		if (tempstring.length == 6) {
			if (Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic1 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med1").innerHTML = "dek"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_deku";}
			else if (Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic1 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").innerHTML = "dod"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med1_req1").id = "dod_req1"; document.getElementById("text_gen_med1").id = "text_dod";}
			else if (Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location!= "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic1 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med1").innerHTML = "jab"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.letter_img; document.getElementById("gen_med1_req2").src=Game.boomerang_img; document.getElementById("gen_med1_req1").id = "jab_req1"; document.getElementById("gen_med1_req2").id = "jab_req2"; document.getElementById("text_gen_med1").id = "text_jabu";}
			else if (Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic1 = "forest"; forestRequired = 1; document.getElementById("text_gen_med1").innerHTML = "for"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hookshot_img; document.getElementById("gen_med1_req2").src=Game.bow_img; document.getElementById("gen_med1_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med1_req1").id = "for_req1"; document.getElementById("gen_med1_req2").id = "for_req2"; document.getElementById("gen_med1_req3").id = "for_req3"; document.getElementById("text_gen_med1").id = "text_forest";}
			else if (Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic1 = "fire"; fireRequired = 1; document.getElementById("text_gen_med1").innerHTML = "fir"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hammer_img; document.getElementById("gen_med1_req1").id = "fir_req1"; document.getElementById("text_gen_med1").id = "text_fire";}
			else if (Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic1 = "water"; waterRequired = 1; document.getElementById("text_gen_med1").innerHTML = "wat"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.iron_boots_img; document.getElementById("gen_med1_text2").innerHTML ="/"; document.getElementById("gen_med1_req2").src=Game.golden_scale_img; document.getElementById("gen_med1_text3").innerHTML = "+"; document.getElementById("gen_med1_req3").src=Game.longshot_img; document.getElementById("gen_med1_req1").id = "wat_req1"; document.getElementById("gen_med1_req2").id = "wat_req2"; document.getElementById("gen_med1_req3").id = "wat_req3"; document.getElementById("text_gen_med1").id = "text_water";}
			else if (Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic1 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med1").innerHTML = "spi"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med1_req2").src=Game.mirror_shield_img; document.getElementById("gen_med1_req3").src = Game.bomb_bag_img; document.getElementById("gen_med1_req4").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "spi_req1"; document.getElementById("gen_med1_req2").id = "spi_req2"; document.getElementById("gen_med1_req3").id = "spi_req3"; document.getElementById("gen_med1_req4").id = "spi_req4"; document.getElementById("text_gen_med1").id = "text_spirit";}
			else if (Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic1 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med1").innerHTML = "sha"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req5").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.dins_fire_img; document.getElementById("gen_med1_req2").src=Game.magic_meter_img; document.getElementById("gen_med1_req3").src=Game.hover_boots_img; document.getElementById("gen_med1_req4").src = Game.bomb_bag_img; document.getElementById("gen_med1_req5").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "sha_req1"; document.getElementById("gen_med1_req2").id = "sha_req2"; document.getElementById("gen_med1_req3").id = "sha_req3"; document.getElementById("gen_med1_req4").id = "sha_req4"; document.getElementById("gen_med1_req5").id = "sha_req5"; document.getElementById("text_gen_med1").id = "text_shadow";}
			else if (Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic1 = "pocket"; document.getElementById("text_gen_med1").innerHTML = "pok"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_pocket";}
			if (Logic.generic1 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic2 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med2").innerHTML = "dek"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_deku";}
			else if (Logic.generic1 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic2 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med2").innerHTML = "dod"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med2_req1").id = "dod_req1"; document.getElementById("text_gen_med2").id = "text_dod";}
			else if (Logic.generic1 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic2 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med2").innerHTML = "jab"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.letter_img; document.getElementById("gen_med2_req2").src=Game.boomerang_img; document.getElementById("gen_med2_req1").id = "jab_req1"; document.getElementById("gen_med2_req2").id = "jab_req2"; document.getElementById("text_gen_med2").id = "text_jabu";}
			else if (Logic.generic1 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic2 = "forest"; forestRequired = 1; document.getElementById("text_gen_med2").innerHTML = "for"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hookshot_img; document.getElementById("gen_med2_req2").src=Game.bow_img; document.getElementById("gen_med2_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med2_req1").id = "for_req1"; document.getElementById("gen_med2_req2").id = "for_req2"; document.getElementById("gen_med2_req3").id = "for_req3"; document.getElementById("text_gen_med2").id = "text_forest";}
			else if (Logic.generic1 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic2 = "fire"; fireRequired = 1; document.getElementById("text_gen_med2").innerHTML = "fir"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hammer_img; document.getElementById("gen_med2_req1").id = "fir_req1"; document.getElementById("text_gen_med2").id = "text_fire";}
			else if (Logic.generic1 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic2 = "water"; waterRequired = 1; document.getElementById("text_gen_med2").innerHTML = "wat"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.iron_boots_img; document.getElementById("gen_med2_text2").innerHTML ="/"; document.getElementById("gen_med2_req2").src=Game.golden_scale_img; document.getElementById("gen_med2_text3").innerHTML = "+"; document.getElementById("gen_med2_req3").src=Game.longshot_img; document.getElementById("gen_med2_req1").id = "wat_req1"; document.getElementById("gen_med2_req2").id = "wat_req2"; document.getElementById("gen_med2_req3").id = "wat_req3"; document.getElementById("text_gen_med2").id = "text_water";}
			else if (Logic.generic1 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic2 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med2").innerHTML = "spi"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med2_req2").src=Game.mirror_shield_img; document.getElementById("gen_med2_req3").src = Game.bomb_bag_img; document.getElementById("gen_med2_req4").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "spi_req1"; document.getElementById("gen_med2_req2").id = "spi_req2"; document.getElementById("gen_med2_req3").id = "spi_req3"; document.getElementById("gen_med2_req4").id = "spi_req4"; document.getElementById("text_gen_med2").id = "text_spirit";}
			else if (Logic.generic1 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic2 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med2").innerHTML = "sha"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req5").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.dins_fire_img; document.getElementById("gen_med2_req2").src=Game.magic_meter_img; document.getElementById("gen_med2_req3").src=Game.hover_boots_img; document.getElementById("gen_med2_req4").src = Game.bomb_bag_img; document.getElementById("gen_med2_req5").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "sha_req1"; document.getElementById("gen_med2_req2").id = "sha_req2"; document.getElementById("gen_med2_req3").id = "sha_req3"; document.getElementById("gen_med2_req4").id = "sha_req4"; document.getElementById("gen_med2_req5").id = "sha_req5"; document.getElementById("text_gen_med2").id = "text_shadow";}
			else if (Logic.generic1 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med2").innerHTML = "pok"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_pocket";}
			if (Logic.generic1 != "deku" && Logic.generic2 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic3 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med3").innerHTML = "dek"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_deku";}
			else if (Logic.generic1 != "dodongos" && Logic.generic2 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic3 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med3").innerHTML = "dod"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med3_req1").id = "dod_req1"; document.getElementById("text_gen_med3").id = "text_dod";}
			else if (Logic.generic1 != "jabu" && Logic.generic2 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic3 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med3").innerHTML = "jab"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.letter_img; document.getElementById("gen_med3_req2").src=Game.boomerang_img; document.getElementById("gen_med3_req1").id = "jab_req1"; document.getElementById("gen_med3_req2").id = "jab_req2"; document.getElementById("text_gen_med3").id = "text_jabu";}
			else if (Logic.generic1 != "forest" && Logic.generic2 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic3 = "forest"; forestRequired = 1; document.getElementById("text_gen_med3").innerHTML = "for"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hookshot_img; document.getElementById("gen_med3_req2").src=Game.bow_img; document.getElementById("gen_med3_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med3_req1").id = "for_req1"; document.getElementById("gen_med3_req2").id = "for_req2"; document.getElementById("gen_med3_req3").id = "for_req3"; document.getElementById("text_gen_med3").id = "text_forest";}
			else if (Logic.generic1 != "fire" && Logic.generic2 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic3 = "fire"; fireRequired = 1; document.getElementById("text_gen_med3").innerHTML = "fir"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hammer_img; document.getElementById("gen_med3_req1").id = "fir_req1"; document.getElementById("text_gen_med3").id = "text_fire";}
			else if (Logic.generic1 != "water" && Logic.generic2 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic3 = "water"; waterRequired = 1; document.getElementById("text_gen_med3").innerHTML = "wat"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.iron_boots_img; document.getElementById("gen_med3_text2").innerHTML ="/"; document.getElementById("gen_med3_req2").src=Game.golden_scale_img; document.getElementById("gen_med3_text3").innerHTML = "+"; document.getElementById("gen_med3_req3").src=Game.longshot_img; document.getElementById("gen_med3_req1").id = "wat_req1"; document.getElementById("gen_med3_req2").id = "wat_req2"; document.getElementById("gen_med3_req3").id = "wat_req3"; document.getElementById("text_gen_med3").id = "text_water";}
			else if (Logic.generic1 != "spirit" && Logic.generic2 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic3 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med3").innerHTML = "spi"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med3_req2").src=Game.mirror_shield_img; document.getElementById("gen_med3_req3").src = Game.bomb_bag_img; document.getElementById("gen_med3_req4").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "spi_req1"; document.getElementById("gen_med3_req2").id = "spi_req2"; document.getElementById("gen_med3_req3").id = "spi_req3"; document.getElementById("gen_med3_req4").id = "spi_req4"; document.getElementById("text_gen_med3").id = "text_spirit";}
			else if (Logic.generic1 != "shadow" && Logic.generic2 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic3 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med3").innerHTML = "sha"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req5").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.dins_fire_img; document.getElementById("gen_med3_req2").src=Game.magic_meter_img; document.getElementById("gen_med3_req3").src=Game.hover_boots_img; document.getElementById("gen_med3_req4").src = Game.bomb_bag_img; document.getElementById("gen_med3_req5").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "sha_req1"; document.getElementById("gen_med3_req2").id = "sha_req2"; document.getElementById("gen_med3_req3").id = "sha_req3"; document.getElementById("gen_med3_req4").id = "sha_req4"; document.getElementById("gen_med3_req5").id = "sha_req5"; document.getElementById("text_gen_med3").id = "text_shadow";}
			else if (Logic.generic1 != "pocket" && Logic.generic2 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic3 = "pocket"; document.getElementById("text_gen_med3").innerHTML = "pok"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_pocket";}
		}
		else {
			document.getElementById("text_gen_med1").style.color = "rgb(238, 130, 238)";
			document.getElementById("text_gen_med2").style.color = "rgb(255, 165, 0)";
			document.getElementById("text_gen_med3").style.color = "yellow";
			if (fourth == "de") {Logic.generic1 = "deku"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "dek"; document.getElementById("text_gen_med1").id = "text_deku";}
			else if (fourth == "do") {Logic.generic1 = "dodongos"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "dod"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src = Game.bomb_bag_img; document.getElementById("gen_med1_req1").id = "dod_req1"; document.getElementById("text_gen_med1").id = "text_dod";}
			else if (fourth == "ja") {Logic.generic1 = "jabu"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "jab"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.letter_img; document.getElementById("gen_med1_req2").src=Game.boomerang_img; document.getElementById("gen_med1_req1").id = "jab_req1"; document.getElementById("gen_med1_req2").id = "jab_req2"; document.getElementById("text_gen_med1").id = "text_jabu";}
			else if (fourth == "fo") {Logic.generic1 = "forest"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "for"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hookshot_img; document.getElementById("gen_med1_req2").src=Game.bow_img; document.getElementById("gen_med1_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med1_req1").id = "for_req1"; document.getElementById("gen_med1_req2").id = "for_req2"; document.getElementById("gen_med1_req3").id = "for_req3"; document.getElementById("text_gen_med1").id = "text_forest";}
			else if (fourth == "fi") {Logic.generic1 = "fire"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "fir"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hammer_img; document.getElementById("gen_med1_req1").id = "fir_req1"; document.getElementById("text_gen_med1").id = "text_fire";}
			else if (fourth == "wa") {Logic.generic1 = "water"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "wat";  document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.iron_boots_img; document.getElementById("gen_med1_text2").innerHTML ="/"; document.getElementById("gen_med1_req2").src=Game.golden_scale_img; document.getElementById("gen_med1_text3").innerHTML = "+"; document.getElementById("gen_med1_req3").src=Game.longshot_img; document.getElementById("gen_med1_req1").id = "wat_req1"; document.getElementById("gen_med1_req2").id = "wat_req2"; document.getElementById("gen_med1_req3").id = "wat_req3"; document.getElementById("text_gen_med1").id = "text_water";}
			else if (fourth == "sp") {Logic.generic1 = "spirit"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "spi"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med1_req2").src=Game.mirror_shield_img; document.getElementById("gen_med1_req3").src = Game.bomb_bag_img; document.getElementById("gen_med1_req4").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "spi_req1"; document.getElementById("gen_med1_req2").id = "spi_req2"; document.getElementById("gen_med1_req3").id = "spi_req3"; document.getElementById("gen_med1_req4").id = "spi_req4"; document.getElementById("text_gen_med1").id = "text_spirit";}
			else if (fourth == "sh") {Logic.generic1 = "shadow"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "sha"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req5").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.dins_fire_img; document.getElementById("gen_med1_req2").src=Game.magic_meter_img; document.getElementById("gen_med1_req3").src=Game.hover_boots_img; document.getElementById("gen_med1_req4").src = Game.bomb_bag_img; document.getElementById("gen_med1_req5").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "sha_req1"; document.getElementById("gen_med1_req2").id = "sha_req2"; document.getElementById("gen_med1_req3").id = "sha_req3"; document.getElementById("gen_med1_req4").id = "sha_req4"; document.getElementById("gen_med1_req5").id = "sha_req5"; document.getElementById("text_gen_med1").id = "text_shadow";}
			else if (fourth == "fr" || fourth == "kk") {Logic.generic1 = "pocket"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "pok"; document.getElementById("text_gen_med1").id = "text_pocket";}
			if (fifth == "de") {Logic.generic2 = "deku"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "dek"; document.getElementById("text_gen_med2").id = "text_deku";}
			else if (fifth == "do") {Logic.generic2 = "dodongos"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "dod"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src = Game.bomb_bag_img; document.getElementById("gen_med2_req1").id = "dod_req1"; document.getElementById("text_gen_med2").id = "text_dod";}
			else if (fifth == "ja") {Logic.generic2 = "jabu"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "jab"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.letter_img; document.getElementById("gen_med2_req2").src=Game.boomerang_img; document.getElementById("gen_med2_req1").id = "jab_req1"; document.getElementById("gen_med2_req2").id = "jab_req2"; document.getElementById("text_gen_med2").id = "text_jabu";}
			else if (fifth == "fo") {Logic.generic2 = "forest"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "for"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hookshot_img; document.getElementById("gen_med2_req2").src=Game.bow_img; document.getElementById("gen_med2_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med2_req1").id = "for_req1"; document.getElementById("gen_med2_req2").id = "for_req2"; document.getElementById("gen_med2_req3").id = "for_req3"; document.getElementById("text_gen_med2").id = "text_forest";}
			else if (fifth == "fi") {Logic.generic2 = "fire"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "fir"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hammer_img; document.getElementById("gen_med2_req1").id = "fir_req1"; document.getElementById("text_gen_med2").id = "text_fire";}
			else if (fifth == "wa") {Logic.generic2 = "water"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "wat";  document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.iron_boots_img; document.getElementById("gen_med2_text2").innerHTML ="/"; document.getElementById("gen_med2_req2").src=Game.golden_scale_img; document.getElementById("gen_med2_text3").innerHTML = "+"; document.getElementById("gen_med2_req3").src=Game.longshot_img; document.getElementById("gen_med2_req1").id = "wat_req1"; document.getElementById("gen_med2_req2").id = "wat_req2"; document.getElementById("gen_med2_req3").id = "wat_req3"; document.getElementById("text_gen_med2").id = "text_water";}
			else if (fifth == "sp") {Logic.generic2 = "spirit"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "spi"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med2_req2").src=Game.mirror_shield_img; document.getElementById("gen_med2_req3").src = Game.bomb_bag_img; document.getElementById("gen_med2_req4").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "spi_req1"; document.getElementById("gen_med2_req2").id = "spi_req2"; document.getElementById("gen_med2_req3").id = "spi_req3"; document.getElementById("gen_med2_req4").id = "spi_req4"; document.getElementById("text_gen_med2").id = "text_spirit";}
			else if (fifth == "sh") {Logic.generic2 = "shadow"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "sha"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req5").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.dins_fire_img; document.getElementById("gen_med2_req2").src=Game.magic_meter_img; document.getElementById("gen_med2_req3").src=Game.hover_boots_img; document.getElementById("gen_med2_req4").src = Game.bomb_bag_img; document.getElementById("gen_med2_req5").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "sha_req1"; document.getElementById("gen_med2_req2").id = "sha_req2"; document.getElementById("gen_med2_req3").id = "sha_req3"; document.getElementById("gen_med2_req4").id = "sha_req4"; document.getElementById("gen_med2_req5").id = "sha_req5"; document.getElementById("text_gen_med2").id = "text_shadow";}
			else if (fifth == "fr" || fifth == "kk") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "pok"; document.getElementById("text_gen_med2").id = "text_pocket";}
			if (sixth == "de") {Logic.generic2 = "deku"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "dek"; document.getElementById("text_gen_med3").id = "text_deku";}
			else if (sixth == "do") {Logic.generic2 = "dodongos"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "dod"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src = Game.bomb_bag_img; document.getElementById("gen_med3_req1").id = "dod_req1"; document.getElementById("text_gen_med3").id = "text_dod";}
			else if (sixth == "ja") {Logic.generic2 = "jabu"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "jab"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.letter_img; document.getElementById("gen_med3_req2").src=Game.boomerang_img; document.getElementById("gen_med3_req1").id = "jab_req1"; document.getElementById("gen_med3_req2").id = "jab_req2"; document.getElementById("text_gen_med3").id = "text_jabu";}
			else if (sixth == "fo") {Logic.generic2 = "forest"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "for"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hookshot_img; document.getElementById("gen_med3_req2").src=Game.bow_img; document.getElementById("gen_med3_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med3_req1").id = "for_req1"; document.getElementById("gen_med3_req2").id = "for_req2"; document.getElementById("gen_med3_req3").id = "for_req3"; document.getElementById("text_gen_med3").id = "text_forest";}
			else if (sixth == "fi") {Logic.generic2 = "fire"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "fir"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hammer_img; document.getElementById("gen_med3_req1").id = "fir_req1"; document.getElementById("text_gen_med3").id = "text_fire";}
			else if (sixth == "wa") {Logic.generic2 = "water"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "wat";  document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.iron_boots_img; document.getElementById("gen_med3_text2").innerHTML ="/"; document.getElementById("gen_med3_req2").src=Game.golden_scale_img; document.getElementById("gen_med3_text3").innerHTML = "+"; document.getElementById("gen_med3_req3").src=Game.longshot_img; document.getElementById("gen_med3_req1").id = "wat_req1"; document.getElementById("gen_med3_req2").id = "wat_req2"; document.getElementById("gen_med3_req3").id = "wat_req3"; document.getElementById("text_gen_med3").id = "text_water";}
			else if (sixth == "sp") {Logic.generic2 = "spirit"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "spi"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med3_req2").src=Game.mirror_shield_img; document.getElementById("gen_med3_req3").src = Game.bomb_bag_img; document.getElementById("gen_med3_req4").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "spi_req1"; document.getElementById("gen_med3_req2").id = "spi_req2"; document.getElementById("gen_med3_req3").id = "spi_req3"; document.getElementById("gen_med3_req4").id = "spi_req4"; document.getElementById("text_gen_med3").id = "text_spirit";}
			else if (sixth == "sh") {Logic.generic2 = "shadow"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "sha"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req5").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.dins_fire_img; document.getElementById("gen_med3_req2").src=Game.magic_meter_img; document.getElementById("gen_med3_req3").src=Game.hover_boots_img; document.getElementById("gen_med3_req4").src = Game.bomb_bag_img; document.getElementById("gen_med3_req5").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "sha_req1"; document.getElementById("gen_med3_req2").id = "sha_req2"; document.getElementById("gen_med3_req3").id = "sha_req3"; document.getElementById("gen_med3_req4").id = "sha_req4"; document.getElementById("gen_med3_req5").id = "sha_req5"; document.getElementById("text_gen_med3").id = "text_shadow";}
			else if (sixth == "fr" || sixth == "kk") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "pok"; document.getElementById("text_gen_med3").id = "text_pocket";}
			document.getElementById("markStones").value = "";
			if (first != "de" && second != "de" && third != "de" && fourth != "de" && fifth != "de" && sixth != "de") {document.getElementById("markStones").value += "de"}
			if (first != "do" && second != "do" && third != "do" && fourth != "do" && fifth != "do" && sixth != "do") {document.getElementById("markStones").value += "do"}
			if (first != "ja" && second != "ja" && third != "ja" && fourth != "ja" && fifth != "ja" && sixth != "ja") {document.getElementById("markStones").value += "ja"}
			if (first != "fo" && second != "fo" && third != "fo" && fourth != "fo" && fifth != "fo" && sixth != "fo") {document.getElementById("markStones").value += "fo"}
			if (first != "fi" && second != "fi" && third != "fi" && fourth != "fi" && fifth != "fi" && sixth != "fi") {document.getElementById("markStones").value += "fi"}
			if (first != "wa" && second != "wa" && third != "wa" && fourth != "wa" && fifth != "wa" && sixth != "wa") {document.getElementById("markStones").value += "wa"}
			if (first != "sh" && second != "sh" && third != "sh" && fourth != "sh" && fifth != "sh" && sixth != "sh") {document.getElementById("markStones").value += "sh"}
			if (first != "sp" && second != "sp" && third != "sp" && fourth != "sp" && fifth != "sp" && sixth != "sp") {document.getElementById("markStones").value += "sp"}
			if (first != "fr" && first != "kk" && second != "fr" && second != "kk" && third != "fr" && third != "kk" && fourth != "fr" && fourth != "kk" && fifth != "fr" && fifth != "kk" && sixth != "fr" && sixth != "kk" ) {document.getElementById("markStones").value += "fr"}
		}

	}
}


	Location_Logic.mido_1 = true;
	Location_Logic.mido_2 = true;
	Location_Logic.mido_3 = true;
	Location_Logic.mido_4 = true;
	Location_Logic.kokiri_sword = true;
	Location_Logic.kokiri_song_of_storms = Logic.song_of_storms;
	Location_Logic.talons_chickens = true;
	Location_Logic.back_of_ranch = true;
	Location_Logic.hyrule_forest_boulder = Logic.can_blast_or_smash;
	Location_Logic.hyrule_open_grotto = true;
	Location_Logic.hyrule_hp_scrub = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_boulder_of_destiny = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_tektite_grotto = Logic.can_blast_or_smash && (Logic.golden_scale || Logic.iron_boots);
	Location_Logic.gerudovalley_box = true;
	Location_Logic.gerudovalley_waterfall = true;
	Location_Logic.gerudo_hammer = Logic.fortress_access && Logic.hammer;
	Location_Logic.hylia_child_fishing = true;
	Location_Logic.hylia_bottle = Logic.silver_scale;
	Location_Logic.hylia_adult_fishing = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_top = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_dive = Logic.golden_scale;
	Location_Logic.hylia_sun_shoot = Logic.longshot && Logic.bow;
	Location_Logic.market_slingshot_game = true;
	Location_Logic.richard = true;
	Location_Logic.market_bowling_1 = Logic.bomb_bag;
	Location_Logic.market_bowling_2 = Logic.bomb_bag;
	Location_Logic.market_lens_game = Logic.can_see;
	Location_Logic.poes= (Logic.bow && Logic.eponas && Logic.bottle) || Logic.big_poe;
	Location_Logic.dins_fairy = Logic.bomb_bag && Logic.lullaby;
	Location_Logic.g_fairy = Logic.golden_gauntlets && Logic.lullaby;
	Location_Logic.lacs = Logic.shadow_medallion && Logic.spirit_medallion;
	Location_Logic.fountain_fairy = Logic.ice_access && Logic.bomb_bag;
	Location_Logic.ice_glacier_hp = Logic.ice_access;
	Location_Logic.ice_bottom_of_fountain = Logic.ice_access && Logic.iron_boots;
	Location_Logic.ice_map = Logic.ice_access;
	Location_Logic.ice_compass = Logic.ice_access;
	Location_Logic.ice_hp = Logic.ice_access;
	Location_Logic.ice_irons = Logic.ice_access;
	Location_Logic.deku_lobby = true;
	Location_Logic.deku_slingshot = true;
	Location_Logic.deku_slingshot_room_side = true;
	Location_Logic.deku_compass = true;
	Location_Logic.deku_compass_room_side = true;
	Location_Logic.deku_basement = true;
	Location_Logic.deku_queen_gohma = Logic.slingshot;
	Location_Logic.ocarina_game = true;
	Location_Logic.lost_woods_grotto = Logic.can_blast_or_smash;
	Location_Logic.lost_woods_scrub_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.bridge_scrub = true;
	Location_Logic.target = Logic.slingshot;
	Location_Logic.skull_kid = Logic.sarias;
	Location_Logic.theater = true;
	Location_Logic.wolfos_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.rolling_goron = Logic.bomb_bag;
	Location_Logic.goron_dance = Logic.lullaby && Logic.sarias;
	Location_Logic.goron_pot = (Logic.bomb_bag || Logic.goron_bracelet) && (Logic.lullaby || Logic.can_use_dins);
	Location_Logic.goron_maze_1 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_2 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_3 = Logic.hammer || Logic.silver_gauntlets;
	Location_Logic.goron_link = Logic.can_stop_link_the_goron;
	Location_Logic.dodongos_map = Logic.can_enter_dodongos;
	Location_Logic.dodongos_compass = Logic.can_enter_dodongos;
	Location_Logic.dodongos_bomb_flower_platform = Logic.dodongos_climb;
	Location_Logic.dodongos_bomb_bag = Logic.dodongos_climb;
	Location_Logic.dodongos_end_of_bridge = Logic.dodongos_climb && Logic.can_blast_or_smash;
	Location_Logic.dodongos_above_king = Logic.bomb_bag;
	Location_Logic.dodongos_king_dodongo = Logic.bomb_bag;
	Location_Logic.trail_bombable = Logic.can_blast_or_smash;
	Location_Logic.trail_dodongos_top = true;
	Location_Logic.trail_song_of_storms = Logic.song_of_storms;
	Location_Logic.crater_peak_fairy = Logic.can_blast_or_smash && Logic.lullaby;
	Location_Logic.trade_quest = (((Logic.ice_access || ((Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby && Logic.bottle)) && Logic.prescription) || Logic.claim_check) && Logic.crater_top;
	Location_Logic.crater_bean = (Logic.bolero && Logic.child_can_enter_river) || (Logic.hover_boots && Logic.crater_by_city);
	Location_Logic.crater_hammer_fairy = Logic.crater_by_city && Logic.hammer && Logic.lullaby;
	Location_Logic.crater_grotto = Logic.can_blast_or_smash;
	Location_Logic.crater_nook_hp = Logic.crater_top;
	Location_Logic.man_on_roof = true;//Logic.hookshot;
	Location_Logic.kakariko_grotto = true;
	Location_Logic.windmill = true;//Logic.boomerang || Logic.song_of_time;
	Location_Logic.anju = true;
	Location_Logic.cow_house = true;
	Location_Logic.archery_game = Logic.bow;
	Location_Logic.redead_grotto = Logic.can_blast_or_smash;
	Location_Logic.anjus_chickens = true;
	Location_Logic.tokens_10 = Logic.gold_skulltulas >= 10;
	Location_Logic.tokens_20 = Logic.gold_skulltulas >= 20;
	Location_Logic.tokens_30 = Logic.gold_skulltulas >= 30;
	Location_Logic.tokens_40 = Logic.gold_skulltulas >= 40;
	Location_Logic.tokens_50 = Logic.gold_skulltulas >= 50;
	Location_Logic.shield_grave = true;
	Location_Logic.gravedigging_tour = true;
	Location_Logic.suns_grave = Logic.suns_song;
	Location_Logic.fire_grave = Logic.lullaby && Logic.can_use_fire;
	Location_Logic.graveyard_box = Logic.child_can_enter_river || Logic.longshot;
	Location_Logic.race_1 = true;
	Location_Logic.race_2 = true;
	Location_Logic.river_pillar = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.river_grotto = true;
	Location_Logic.river_ledge = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.frogs_1 = Logic.child_can_enter_river && Logic.song_of_storms;
	Location_Logic.frogs_2 = Logic.child_can_enter_river && (Logic.song_of_storms && Logic.lullaby && Logic.eponas && Logic.sarias && Logic.suns_song && Logic.song_of_time);
	Location_Logic.zora_diving = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.zora_torches = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.thaw_king = Logic.ice_access || (Logic.bottle && (Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby);
	Location_Logic.colossus_bean = Logic.requiem && Logic.child_can_enter_river;
	Location_Logic.colossus_fairy = Logic.can_enter_colossus && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.wasteland = Logic.can_cross_quicksand && Logic.can_use_fire;
	Location_Logic.gerudo_roof = Logic.fortress_access && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gerudo_archery_1 = Logic.eponas && Logic.bow;
	Location_Logic.gerudo_archery_2 = Logic.eponas && Logic.bow;
	Location_Logic.jabu_boomerang = Logic.can_enter_jabu;
	Location_Logic.jabu_map = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_compass = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_barinade = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.forest1 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest2 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest3 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || Logic.bow || (Logic.hover_boots && Logic.forest_keys>=1));
	Location_Logic.forest4 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest5 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest6 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 1 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest7 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 2 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest8 = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow && Logic.goron_bracelet && Logic.forest_keys >=2) || (Logic.hover_boots && Logic.forest_keys >=1));
	Location_Logic.forest9 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest10 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.forest_keys>=3;
	Location_Logic.forest11 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest12 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && (Logic.bow || Logic.can_use_dins) && Logic.forest_keys>=5;
	Location_Logic.forest13 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5;
	Location_Logic.forest14 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5 && Logic.forest_boss_key;
	Location_Logic.fire1 = Logic.can_enter_fire_temple;
	Location_Logic.fire2 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire3 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire4 = Logic.can_enter_fire_temple && Logic.fire_keys >=1;
	Location_Logic.fire5 = Logic.can_enter_fire_temple && Logic.fire_keys >=1 && Logic.bomb_bag;
	Location_Logic.fire6 = Logic.can_enter_fire_temple && Logic.fire_boss_key && Logic.hammer && Logic.can_wear_goron_tunic && (Logic.hover_boots || (Logic.fire_keys >=7 && (Logic.song_of_time || Logic.bomb_bag)));
	Location_Logic.fire7 = Logic.can_climb_fire_temple;
	Location_Logic.fire8 = Logic.can_climb_fire_temple;
	Location_Logic.fire9 = Logic.can_climb_fire_temple && ((Logic.fire_keys >= 4 && Logic.bow) || Logic.fire_keys>=5);
	Location_Logic.fire10 = Logic.can_climb_fire_temple && Logic.fire_keys>=5;
	Location_Logic.fire11 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.bomb_bag;
	Location_Logic.fire12 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.hookshot;
	Location_Logic.fire13 = Logic.can_climb_fire_temple && Logic.fire_keys>=6;
	Location_Logic.fire14 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys>=6 && Logic.hover_boots)) && Logic.hammer && (Logic.song_of_time || Logic.bomb_bag);
	Location_Logic.fire15 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys >= 6 && Logic.hover_boots)) && Logic.bomb_bag;
	Location_Logic.water1 = Logic.can_enter_water;
	Location_Logic.water2 = Logic.can_enter_water;
	Location_Logic.water3 = Logic.middle_water && Logic.bomb_bag;
	Location_Logic.water4 = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Location_Logic.water5 = Logic.can_enter_water && Logic.lullaby && Logic.bow && Logic.goron_bracelet && (Logic.hover_boots || Logic.longshot);
	Location_Logic.water6 = Logic.middle_water && Logic.can_wear_zora_tunic;
	Location_Logic.water7 = Logic.water_keys >= 5 && Logic.lullaby;
	Location_Logic.water8 = Logic.water_keys >= 5 && Logic.lullaby && Logic.song_of_time && Logic.bow;
	Location_Logic.water9 = Logic.can_enter_water && Logic.lullaby && ((Logic.water_keys >= 5 && Logic.song_of_time && Logic.bow) || Logic.goron_bracelet);
	Location_Logic.water10 = Logic.can_enter_water && Logic.lullaby && Logic.longshot && Logic.water_keys >= 5 && ((Logic.bomb_bag && Logic.goron_bracelet) || Logic.hover_boots);
	Location_Logic.water11 = Logic.can_enter_water && Logic.water_boss_key && Logic.longshot ;
	Location_Logic.spirit1 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit2 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit3 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit4 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit5 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit6 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit7 = (Logic.spirit_keys >=3 && Logic.longshot && Logic.bomb_bag) || Logic.spirit_keys == 5;
	Location_Logic.spirit8 = Logic.can_enter_adult_spirit && Logic.hookshot && Logic.lullaby;
	Location_Logic.spirit9 = Logic.can_enter_adult_spirit && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.spirit10 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit11 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit12 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby;
	Location_Logic.spirit13 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.spirit14 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag && Logic.mirror_shield;
	Location_Logic.spirit15 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit16 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit17 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag;
	Location_Logic.spirit18 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.bow && Logic.lullaby && Logic.hookshot;
	Location_Logic.spirit19 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield;
	Location_Logic.spirit20 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield && Logic.bomb_bag && Logic.spirit_boss_key && Logic.hookshot;
	Location_Logic.shadow1 = Logic.can_enter_shadow;
	Location_Logic.shadow2 = Logic.can_enter_shadow;
	Location_Logic.shadow3 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow4 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow5 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow6 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow7 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow8 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow9 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow10 = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2;
	Location_Logic.shadow11 = Logic.can_bomb_shadow_wall && Logic.hookshot && Logic.shadow_keys >=2;
	Location_Logic.shadow12 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow13 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow14 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow15 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow16 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow17 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow18 = Logic.can_beat_shadow_boss && Logic.shadow_keys >=5;
	Location_Logic.ganons1 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons2 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons3 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons4 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons5 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons6 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons7 = Logic.can_enter_ganons && Logic.golden_gauntlets ;//&& Logic.can_see;
	Location_Logic.ganons8 = Logic.can_enter_ganons && Logic.golden_gauntlets && Logic.lullaby && Logic.ganons_keys >= 1;
	Location_Logic.ganons9 = Logic.can_enter_ganons && Logic.hookshot;
	Location_Logic.ganons10 = Logic.can_enter_ganons && Logic.hookshot && Logic.bomb_bag;//&& Logic.can_see;
	Location_Logic.ganons11 = Logic.can_enter_ganons;
	Location_Logic.ganons12 = Logic.can_enter_ganons;
	Location_Logic.ganons13 = Logic.can_enter_ganons;
	Location_Logic.ganons14 = Logic.can_enter_ganons;
	Location_Logic.ganons15 = Logic.can_enter_ganons && (Logic.longshot || ((Logic.fire_arrows && Logic.magic) || (Logic.hover_boots && Logic.can_use_dins)));
	Location_Logic.ganons16 = Logic.can_enter_ganons;
	Location_Logic.gtg1 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg2 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg3 = Logic.can_save_carpenters;
	Location_Logic.gtg4 = Logic.can_save_carpenters && Logic.hookshot;
	Location_Logic.gtg5 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg6 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg7 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg8 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg9 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow;  //((Logic.bomb_bag || Logic.gtg_keys == 9) && Logic.hammer));
	Location_Logic.gtg10 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow ;//&& Logic.can_see;
	Location_Logic.gtg12 = Logic.can_save_carpenters && Logic.hookshot/*&& Logic.can_see*/;
	Location_Logic.gtg11 = Logic.can_save_carpenters && Logic.hookshot && Logic.hammer;// && (Logic.can_see || (Logic.bomb_bag || Logic.gtg_keys == 9)) ;
	Location_Logic.gtg13 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg14 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg15 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg16 = Logic.can_save_carpenters && Logic.bomb_bag;
	Location_Logic.gtg17 = Logic.can_save_carpenters && Logic.gtg_keys >= 3 ;//&& Logic.can_see;
	Location_Logic.gtg18 = Logic.can_save_carpenters && Logic.gtg_keys >= 4;
	Location_Logic.gtg19 = Logic.can_save_carpenters && Logic.gtg_keys >= 6;
	Location_Logic.gtg20 = Logic.can_save_carpenters && Logic.gtg_keys >= 7;
	Location_Logic.gtg21 = Logic.can_save_carpenters && Logic.gtg_keys >= 9;
	Location_Logic.gtg22 = Logic.can_save_carpenters && Logic.iron_boots && Logic.song_of_time && Logic.hookshot /*&& Logic.can_see*/;
	Location_Logic.well1 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well5 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well2 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well3 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well4 = Logic.song_of_storms;
	Location_Logic.well6 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well11 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well7 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well10 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well8 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.kokiri_sword;
	Location_Logic.well9 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.can_see ;
	Location_Logic.well12 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well13 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well14 = Logic.song_of_storms && (Logic.bomb_bag || (((/*Logic.can_see &&*/ Logic.well_keys == 3) || Logic.can_use_dins) && Logic.goron_bracelet));
	Location_Logic.zeldasSpot = true;
	Location_Logic.eponasSpot = true;
	Location_Logic.sariasSpot = true;
	Location_Logic.stormsSpot = true;
	Location_Logic.sunsSpot = Logic.lullaby;
	Location_Logic.boleroSpot = Logic.can_enter_fire_temple;
	Location_Logic.minuetSpot = Logic.minuet || Logic.sarias;
	Location_Logic.requiemSpot = Logic.can_enter_colossus;
	Location_Logic.serenadeSpot = Logic.ice_access;
	Location_Logic.preludeSpot = Logic.forest_medallion;
	Location_Logic.nocturneSpot = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion;
	Location_Logic.oot = Logic.kokiri_emerald && Logic.goron_ruby && Logic.zora_sapphire;

	Location_Logic.gs_kokiri_child = true;
	Location_Logic.gs_kokiri_bean = Logic.bottle;
	Location_Logic.gs_kokiri_adult = Logic.hookshot;
	Location_Logic.gs_market = true;
	Location_Logic.gs_lost_woods_bean1 = Logic.bottle;
	Location_Logic.gs_lost_woods_bean2 = Logic.bottle;
	Location_Logic.gs_lost_woods_above_stage = (Logic.bomb_bag || Logic.silver_scale) && (Logic.sarias || Logic.minuet);
	Location_Logic.gs_sacred_forest = Logic.hookshot && (Logic.sarias || Logic.minuet);
	Location_Logic.gs_outside_kakariko = (Logic.boomerang && Logic.bomb_bag) || (Logic.can_blast_or_smash && Logic.hookshot)
	Location_Logic.gs_near_gerudo = (Logic.hammer && Logic.can_use_fire && Logic.hookshot) || (Logic.can_use_dins && Logic.bomb_bag && Logic.boomerang);
	Location_Logic.gs_hyrule_castle_tree = true;
	Location_Logic.gs_hyrule_castle_grotto = Logic.song_of_storms && Logic.bomb_bag && Logic.boomerang;
	Location_Logic.gs_lon_lon_tree = true;
	Location_Logic.gs_lon_lon_shed = true;
	Location_Logic.gs_lon_lon_window = Logic.boomerang;
	Location_Logic.gs_lon_lon_back_wall = Logic.boomerang;
	Location_Logic.gs_kakariko_construction = true;
	Location_Logic.gs_kakariko_skulltula_house = true;
	Location_Logic.gs_kakariko_guard_house = true;
	Location_Logic.gs_kakariko_tree = true;
	Location_Logic.gs_kakariko_tower = Logic.bomb_bag || Logic.slingshot;
	Location_Logic.gs_kakariko_impas = Logic.hookshot;
	Location_Logic.gs_graveyard_wall = Logic.boomerang;
	Location_Logic.gs_graveyard_bean = Logic.bottle;
	Location_Logic.gs_trail_bean = Logic.bottle && (Logic.bomb_bag || Logic.goron_bracelet);
	Location_Logic.gs_trail_bombable_wall = Logic.can_blast_or_smash;
	Location_Logic.gs_trail_hail_path = Logic.hammer;
	Location_Logic.gs_trail_above_dodongos = Logic.hammer;
	Location_Logic.gs_goron_city_center = true;
	Location_Logic.gs_goron_city_maze = Logic.bomb_bag;
	Location_Logic.gs_crater_crate = Logic.can_blast_or_smash;
	Location_Logic.gs_crater_bean = Logic.bottle && Logic.bolero;
	Location_Logic.gs_river_ladder = Logic.silver_scale || Logic.bomb_bag;
	Location_Logic.gs_river_near_grotto = Logic.hookshot;
	Location_Logic.gs_river_above_bridge = Logic.hookshot;
	Location_Logic.gs_domain = Logic.lullaby && (Logic.hookshot || Logic.magic || Logic.bow);
	Location_Logic.gs_fountain_above_log = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby)) && Logic.boomerang;
	Location_Logic.gs_fountain_tree = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby))
	Location_Logic.gs_fountain_hidden_cave = Logic.ice_access && Logic.silver_gauntlets && Logic.hookshot && Logic.can_blast_or_smash;
	Location_Logic.gs_hylia_bean = Logic.bottle;
	Location_Logic.gs_hylia_lab_wall = Logic.boomerang;
	Location_Logic.gs_hylia_island = true;
	Location_Logic.gs_hylia_tree = Logic.longshot;
	Location_Logic.gs_lab_crate = Logic.iron_boots && Logic.hookshot;
	Location_Logic.gs_valley_small_bridge = Logic.boomerang;
	Location_Logic.gs_valley_bean = Logic.bottle;
	Location_Logic.gs_valley_tent = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_valley_pillar = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_archery = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_top = Logic.fortress_access;
	Location_Logic.gs_wasteland_structure = Logic.hookshot && Logic.can_cross_quicksand;
	Location_Logic.gs_colossus_bean = Logic.bottle && Logic.requiem;
	Location_Logic.gs_colossus_tree = Logic.hookshot && Logic.can_enter_colossus;
	Location_Logic.gs_colossus_hill = (Logic.requiem && (Logic.bomb_bag || Logic.silver_scale)) || (Logic.longshot && Logic.can_enter_colossus);
	Location_Logic.gs_zora_river_tree = true;
	Location_Logic.gs_ganons = true;
	Location_Logic.gs_deku_basement_back = Logic.boomerang && Logic.bomb_bag && Logic.slingshot;
	Location_Logic.gs_deku_basement_gate = true;
	Location_Logic.gs_deku_basement_vines = Logic.slingshot || Logic.boomerang || Logic.bomb_bag || Logic.can_use_dins;
	Location_Logic.gs_deku_compass = true;
	Location_Logic.gs_dodongos_east_side = Logic.can_enter_dodongos;
	Location_Logic.gs_dodongos_stair_room = Logic.dodongos_climb;
	Location_Logic.gs_dodongos_above_stairs = (Logic.dodongos_climb && Logic.hookshot) || (Logic.boomerang && (Logic.bomb_bag || Logic.goron_bracelet));
	Location_Logic.gs_dodongos_scarecrow = Logic.can_enter_dodongos && Logic.hookshot;
	Location_Logic.gs_dodongos_before_king = Logic.bomb_bag;
	Location_Logic.gs_jabu_vines = Logic.can_enter_jabu;
	Location_Logic.gs_jabu_near_octo1 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_octo2 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_boss = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_forest_first = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_lobby = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_outdoor_east = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow || Logic.song_of_time) || (Logic.forest_keys >= 1 && Logic.hover_boots));
	Location_Logic.gs_forest_outdoor_west = (Logic.minuet || Logic.sarias) && Logic.hookshot && (((Logic.bow || Logic.song_of_time) && Logic.longshot) || (Logic.forest_keys >= 1 && Logic.hover_boots) || (Logic.forest_keys >= 2 && Logic.goron_bracelet && Logic.bow))
	Location_Logic.gs_forest_basement = (Logic.minuet || Logic.sarias) && Logic.bow && Logic.goron_bracelet && Logic.forest_keys == 5;
	Location_Logic.gs_fire_song_of_time = Logic.can_enter_fire_temple && Logic.fire_keys >= 1 && Logic.song_of_time;
	Location_Logic.gs_fire_bomb_wall = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.bomb_bag;
	Location_Logic.gs_fire_scarecrow1 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_scarecrow2 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_basement = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.gs_water_south_basement = Logic.can_enter_water && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.gs_water_river = Logic.can_enter_water && Logic.song_of_time && Logic.water_keys >= 5;
	Location_Logic.gs_water_central = Logic.middle_water && Logic.longshot || Logic.can_use_farores;
	Location_Logic.gs_water_near_boss_key = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_water_platform_room = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_spirit_metal_fence = Logic.requiem && (Logic.boomerang || Logic.slingshot);
	Location_Logic.gs_spirit_before_child_knuckle = (Logic.bomb_bag && Logic.boomerang && Logic.hookshot && Logic.spirit_keys >= 1) || (Logic.boomerang && Logic.spirit_keys == 5 && Logic.bomb_bag && Logic.requiem) || (Logic.hookshot && Logic.silver_gauntlets && Logic.spirit_keys >= 3);
	Location_Logic.gs_spirit_boulder_room = Logic.can_enter_adult_spirit && Logic.song_of_time && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.gs_spirit_temple_lobby = Logic.can_enter_adult_spirit && Logic.spirit_keys >= 3 && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gs_spirit_bomb_for_light_room = Logic.spirit_keys >= 1;
	Location_Logic.gs_shadow_like_like = Logic.can_bomb_shadow_wall;
	Location_Logic.gs_shadow_crusher = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_giant_pot = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2 && Logic.hookshot;
	Location_Logic.gs_shadow_near_boat = Logic.can_pass_shadow_hookshot_door && Logic.longshot && Logic.shadow_keys >=4;
	Location_Logic.gs_shadow_three_pots = Logic.can_ride_shadow_boat;
	Location_Logic.gs_well_west_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_east_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_like_like = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_ice_spinning_scythe = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_hp_room = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_block_room = Logic.ice_access && Logic.hookshot;

	Location_Access.kokiri_sword = true;
	Location_Access.mido_1 = true;
	Location_Access.mido_2 = true;
	Location_Access.mido_3 = true;
	Location_Access.mido_4 = true;
	Location_Access.talons_chickens = true;
	Location_Access.back_of_ranch = true;
	Location_Access.hyrule_forest_boulder = Game.can_blast_or_smash;
	Location_Access.hyrule_open_grotto = true;
	Location_Access.hyrule_hp_scrub = Game.can_blast_or_smash;;
	Location_Access.hyrule_boulder_of_destiny = Game.can_blast_or_smash;;
	Location_Access.hyrule_tektite_grotto = Game.can_blast_or_smash;
	Location_Access.gerudovalley_box = true;
	Location_Access.gerudovalley_waterfall = true;
	Location_Access.hylia_child_fishing = true;
	Location_Access.hylia_bottle = true;
	Location_Access.hylia_adult_fishing = Game.hookshot1 || Game.child_can_enter_river;
	Location_Access.hylia_lab_top = Game.hookshot1 || Game.child_can_enter_river;
	Location_Access.hylia_lab_dive = Game.scale2 || (Game.hookshot1 && Game.iron_boots);
	Location_Access.hylia_sun_shoot = Game.bow1;
	Location_Access.market_slingshot_game = true;
	Location_Access.richard = true;
	Location_Access.market_bowling_1 = Game.bomb_bag1;
	Location_Access.market_bowling_2 = Game.bomb_bag1;
	Location_Access.market_lens_game = Game.can_see;
	Location_Access.poes= (Game.bow1 && Game.eponas && (Game.bottle1 || Game.can_enter_jabu)) || Game.big_poe;
	Location_Access.dins_fairy = (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.g_fairy = Game.strength3 && Game.lullaby;
	Location_Access.lacs = false;
	Location_Access.river_pillar = true;
	Location_Access.river_grotto = true;
	Location_Access.river_ledge = true;
	Location_Access.frogs_1 = Game.child_can_enter_river && Game.song_of_storms;
	Location_Access.frogs_2 = Game.child_can_enter_river && (Game.song_of_storms && Game.lullaby && Game.eponas && Game.sarias && Game.suns_song && Game.song_of_time);
	Location_Access.zora_diving = Game.child_can_enter_river;
	Location_Access.zora_torches = Game.child_can_enter_river;
	Location_Access.ocarina_game = true;
	Location_Access.lost_woods_grotto = Game.can_blast_or_smash;
	Location_Access.lost_woods_scrub_grotto = Game.can_blast_or_smash;
	Location_Access.wolfos_grotto = Game.can_blast_or_smash;
	Location_Access.bridge_scrub = true;
	Location_Access.skull_kid = Game.sarias;
	Location_Access.target = Game.slingshot1;
	Location_Access.theater = true;
	Location_Access.kokiri_song_of_storms = Game.song_of_storms;
	Location_Access.rolling_goron = Game.bomb_bag1 || Game.has_chus || Game.strength1;
	Location_Access.goron_pot = (Game.bomb_bag1 || Game.strength1) && (Game.lullaby || Game.can_use_dins);
	Location_Access.goron_dance = Game.lullaby && Game.sarias;
	Location_Access.goron_maze_1 = Game.can_blast_or_smash || Game.strength2;
	Location_Access.goron_maze_2 = Game.can_blast_or_smash || Game.strength2;
	Location_Access.goron_maze_3 = Game.hammer || Game.strength2 || ((Game.bomb_bag1 || Game.has_chus) && Game.hover_boots);
	Location_Access.goron_link = Game.can_stop_link_the_goron;
	Location_Access.trail_bombable = Game.can_blast_or_smash;
	Location_Access.trail_dodongos_top = true;
	Location_Access.trail_song_of_storms = Game.song_of_storms;
	Location_Access.crater_bean = Game.bolero || Game.crater_top;
	Location_Access.crater_hammer_fairy = Game.crater_by_city && Game.hammer && Game.lullaby;
	Location_Access.crater_nook_hp = Game.crater_top || Game.bolero;
	Location_Access.crater_grotto = Game.can_blast_or_smash;
	Location_Access.crater_peak_fairy = Game.can_blast_or_smash && Game.lullaby;
	Location_Access.trade_quest = (((Game.ice_access || (Game.giants_wallet && Game.lullaby && (Game.bottle1 || Game.can_enter_jabu))) && Game.prescription) || Game.claim_check) && Game.crater_top;
	Location_Access.gerudo_hammer = Game.fortress_access && Game.hammer;
	Location_Access.gerudo_roof = Game.fortress_access && (Game.hookshot1 || Game.hover_boots);
	Location_Access.gerudo_archery_1 = Game.eponas && Game.bow1;
	Location_Access.gerudo_archery_2 = Game.eponas && Game.bow1;
	Location_Access.wasteland = (Game.can_cross_quicksand || Game.requiem) && Game.can_use_fire;
	Location_Access.colossus_fairy = Game.can_enter_colossus && (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.colossus_bean = Game.can_enter_colossus;
	Location_Access.man_on_roof = true;//Game.hookshot1;
	Location_Access.kakariko_grotto = true;
	Location_Access.windmill = true;//Game.boomerang || Game.song_of_time;
	Location_Access.anju = true;
	Location_Access.cow_house = true;
	Location_Access.redead_grotto = Game.can_blast_or_smash;
	Location_Access.archery_game = Game.bow1;
	Location_Access.anjus_chickens = true;
	Location_Access.tokens_10 = false;
	Location_Access.tokens_20 = false;
	Location_Access.tokens_30 = false;
	Location_Access.tokens_40 = false;
	Location_Access.tokens_50 = false;
	Location_Access.gravedigging_tour = true;
	Location_Access.graveyard_box = Game.child_can_enter_river || Game.hookshot2 || Game.boomerang;
	Location_Access.shield_grave = true;
	Location_Access.suns_grave = Game.suns_song;
	Location_Access.fire_grave = Game.lullaby;
	Location_Access.race_1 = true;
	Location_Access.race_2 = true;
	Location_Access.deku_lobby = true;
	Location_Access.deku_slingshot = true;
	Location_Access.deku_slingshot_room_side = true;
	Location_Access.deku_compass = true;
	Location_Access.deku_compass_room_side = true;
	Location_Access.deku_basement = true;
	Location_Access.deku_queen_gohma = true;
	Location_Access.dodongos_map = Game.can_enter_dodongos;
	Location_Access.dodongos_compass = Game.can_enter_dodongos;
	Location_Access.dodongos_bomb_flower_platform = Game.dodongos_climb;
	Location_Access.dodongos_bomb_bag = Game.dodongos_climb;
	Location_Access.dodongos_end_of_bridge = (Game.dodongos_climb && Game.can_blast_or_smash)
	Location_Access.dodongos_above_king = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.dodongos_king_dodongo = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.jabu_boomerang = Game.can_enter_jabu && (Game.boomerang || Game.bomb_bag1 || Game.slingshot1 || Game.has_chus);
	Location_Access.jabu_map = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_compass = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_barinade = Game.can_enter_jabu && Game.boomerang;
	Location_Access.fountain_fairy = Game.ice_access && (Game.bomb_bag1|| Game.has_chus);
	Location_Access.ice_glacier_hp = Game.ice_access;
	Location_Access.ice_map = Game.ice_access;
	Location_Access.ice_hp = Game.ice_access;
	Location_Access.ice_compass = Game.ice_access;
	Location_Access.ice_irons = Game.ice_access;
	Location_Access.ice_bottom_of_fountain = Game.ice_access;
	Location_Access.thaw_king = Game.ice_access || (document.getElementById("bottleimg").style.opacity == 1 && Game.giants_wallet && Game.lullaby);
	Location_Access.forest1 = Game.hookshot1;
	Location_Access.forest2 = Game.hookshot1;
	Location_Access.forest3 = Game.hookshot1 && (Game.song_of_time || Game.bow1 || ((Game.hover_boots || Game.strength1) && Game.current_forest_keys>=1));
	Location_Access.forest4 = Game.hookshot1 && (Game.song_of_time || ((Game.hover_boots || Game.strength1) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.golden_scale || Game.longshot)*/));
	Location_Access.forest5 = Game.hookshot1 && (Game.song_of_time || ((Game.hover_boots || Game.strength1) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.golden_scale || Game.longshot)*/));
	Location_Access.forest6 = Game.hookshot1 && Game.current_forest_keys >= 1 && Game.bow1 && Game.strength1;
	Location_Access.forest7 = Game.hookshot1 && Game.current_forest_keys >= 2 && Game.bow1 && Game.strength1;
	Location_Access.forest8 = Game.hookshot1 && ((Game.bow1 && Game.strength1 && Game.current_forest_keys >=2) || ((Game.hover_boots || Game.strength1) && Game.current_forest_keys >=1));
	Location_Access.forest9 = Game.hookshot1 && Game.strength1 && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest10 = Game.hookshot1 && Game.strength1 && Game.current_forest_keys>=3;
	Location_Access.forest11 = Game.hookshot1 && Game.strength1 && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest12 = Game.hookshot1 && Game.strength1 && (Game.bow1 || Game.can_use_dins) && Game.current_forest_keys>=5;
	Location_Access.forest13 = Game.hookshot1 && Game.strength1 && Game.bow1 && Game.current_forest_keys>=5;
	Location_Access.forest14 = Game.hookshot1 && Game.strength1 && Game.bow1 && Game.current_forest_keys>=5 && Game.forest_boss_key;
	Location_Access.fire1 = Game.can_enter_fire_temple;
	Location_Access.fire2 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire3 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire4 = Game.can_enter_fire_temple && Game.current_fire_keys >=1;
	Location_Access.fire5 = Game.can_enter_fire_temple && Game.current_fire_keys >=1 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire6 = Game.can_enter_fire_temple && Game.fire_boss_key && Game.hammer;
	Location_Access.fire7 = Game.can_climb_fire_temple;
	Location_Access.fire8 = Game.can_climb_fire_temple;
	Location_Access.fire9 = Game.can_climb_fire_temple && ((Game.current_fire_keys >= 4 && Game.bow1) || Game.current_fire_keys>=5);
	Location_Access.fire10 = Game.can_climb_fire_temple && Game.current_fire_keys>=5;
	Location_Access.fire11 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire12 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && Game.hookshot1;
	Location_Access.fire13 = Game.can_climb_fire_temple && Game.current_fire_keys>=6;
	Location_Access.fire14 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys>=6)) && Game.hammer && (Game.song_of_time || Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire15 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys >= 6)) && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water1 = Game.can_enter_water;
	Location_Access.water2 = Game.can_enter_water;
	Location_Access.water3 = Game.can_enter_water && Game.lullaby && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water4 = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Location_Access.water5 = Game.can_enter_water && Game.lullaby && Game.bow1 && Game.strength1 && (Game.hover_boots || Game.longshot);
	Location_Access.water6 = Game.middle_water;
	Location_Access.water7 = Game.current_water_keys >= 2 && Game.lullaby;
	Location_Access.water8 = Game.current_water_keys >= 2 && Game.lullaby && Game.song_of_time && Game.bow1;
	Location_Access.water9 = Game.can_enter_water && Game.lullaby && ((Game.current_water_keys >= 2 && Game.song_of_time && Game.bow1) || Game.strength1);
	Location_Access.water10 = Game.can_enter_water && Game.lullaby && Game.longshot && Game.current_water_keys >= 2;
	Location_Access.water11 = Game.can_enter_water && Game.water_boss_key && Game.longshot ;
	Location_Access.spirit1 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit2 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit3 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.strength2));
	Location_Access.spirit4 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.strength2));
	Location_Access.spirit5 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (Game.can_use_fire && Game.strength2));
	Location_Access.spirit6 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (Game.can_use_fire && Game.strength2));
	Location_Access.spirit7 = Game.current_spirit_keys >= 2;
	Location_Access.spirit8 = Game.can_enter_adult_spirit && Game.hookshot1 && Game.lullaby;
	Location_Access.spirit9 = Game.can_enter_adult_spirit && (Game.bow1 || Game.hookshot1 || (Game.bomb_bag1 || Game.has_chus));
	Location_Access.spirit10 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit11 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit12 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby;
	Location_Access.spirit13 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby && (Game.hookshot1 || Game.hover_boots);
	Location_Access.spirit14 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) && Game.mirror_shield;
	Location_Access.spirit15 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit16 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit17 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.spirit18 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.bow1 && Game.lullaby && Game.hookshot1;
	Location_Access.spirit19 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield;
	Location_Access.spirit20 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield && (Game.bomb_bag1 || Game.has_chus) && Game.spirit_boss_key && Game.hookshot1;
	Location_Access.shadow1 = Game.can_enter_shadow;
	Location_Access.shadow2 = Game.can_enter_shadow;
	Location_Access.shadow3 = Game.can_cross_shadow_gap;
	Location_Access.shadow4 = Game.can_cross_shadow_gap;
	Location_Access.shadow5 = Game.can_bomb_shadow_wall;
	Location_Access.shadow6 = Game.can_bomb_shadow_wall;
	Location_Access.shadow7 = Game.can_bomb_shadow_wall;
	Location_Access.shadow8 = Game.can_bomb_shadow_wall;
	Location_Access.shadow9 = Game.can_bomb_shadow_wall;
	Location_Access.shadow10 = Game.can_bomb_shadow_wall && Game.current_shadow_keys >=2;
	Location_Access.shadow11 = Game.can_bomb_shadow_wall && Game.hookshot1 && Game.current_shadow_keys >=2;
	Location_Access.shadow12 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow13 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow14 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow15 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow16 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow17 = Game.can_ride_shadow_boat && Game.current_shadow_keys >=4;
	Location_Access.shadow18 = Game.can_beat_shadow_boss && Game.current_shadow_keys >=5;
	Location_Access.ganons1 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons2 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons3 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons4 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons5 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons6 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons7 = Game.can_enter_ganons && Game.strength3 ;//&& Game.can_see;
	Location_Access.ganons8 = Game.can_enter_ganons && Game.strength3 && Game.lullaby && Game.current_ganons_keys >= 1;
	Location_Access.ganons9 = Game.can_enter_ganons && Game.hookshot1;
	Location_Access.ganons10 = Game.can_enter_ganons && Game.hookshot1 && (Game.bomb_bag1 || Game.has_chus);//&& Game.can_see;
	Location_Access.ganons11 = Game.can_enter_ganons;
	Location_Access.ganons12 = Game.can_enter_ganons;
	Location_Access.ganons13 = Game.can_enter_ganons;
	Location_Access.ganons14 = Game.can_enter_ganons;
	Location_Access.ganons15 = Game.can_enter_ganons && (Game.longshot || ((Game.fire_arrows && Game.magic) || (Game.hover_boots && Game.can_use_dins)));
	Location_Access.ganons16 = Game.can_enter_ganons;
	Location_Access.gtg1 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg2 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg3 = Game.can_save_carpenters;
	Location_Access.gtg4 = Game.can_save_carpenters;
	Location_Access.gtg5 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.strength2 ;//&& Game.can_see ;
	Location_Access.gtg6 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.strength2 ;//&& Game.can_see ;
	Location_Access.gtg7 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.strength2 ;//&& Game.can_see ;
	Location_Access.gtg8 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.strength2 ;//&& Game.can_see ;
	Location_Access.gtg9 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;  //((Game.bomb_bag1 || Game.current_gtg_keys == 9) && Game.hammer));
	Location_Access.gtg10 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;//&& Game.can_see;
	Location_Access.gtg11 = Game.can_save_carpenters && Game.can_climb_gtg_hole;// && (Game.can_see || (Game.bomb_bag1 || Game.current_gtg_keys == 9)) ;
	Location_Access.gtg12 = Game.can_save_carpenters && Game.can_climb_gtg_hole/*&& Game.can_see*/;
	Location_Access.gtg13 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg14 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg15 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg16 = Game.can_save_carpenters && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.gtg17 = Game.can_save_carpenters && Game.current_gtg_keys >= 1 ;//&& Game.can_see;
	Location_Access.gtg18 = Game.can_save_carpenters && Game.current_gtg_keys >= 2;
	Location_Access.gtg19 = Game.can_save_carpenters && Game.current_gtg_keys >= 4;
	Location_Access.gtg20 = Game.can_save_carpenters && Game.current_gtg_keys >= 5;
	Location_Access.gtg21 = Game.can_save_carpenters && Game.current_gtg_keys >= 7;
	Location_Access.gtg22 = Game.can_save_carpenters && Game.iron_boots && Game.song_of_time && Game.hookshot1 /*&& Game.can_see*/;
	Location_Access.well1 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well2 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well3 = Game.song_of_storms && Game.lullaby;
	Location_Access.well4 = Game.song_of_storms;
	Location_Access.well5 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well6 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well7 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well8 = Game.song_of_storms && Game.lullaby ;//&& Game.kokiri_sword;
	Location_Access.well9 = Game.song_of_storms && Game.lullaby ;//&& Game.can_see ;
	Location_Access.well10 = Game.song_of_storms && Game.lullaby;
	Location_Access.well11 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well12 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well13 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well14 = Game.song_of_storms && ((Game.bomb_bag1 || Game.has_chus) || (((/*Game.can_see &&*/ Game.current_well_keys >= 1) || Game.can_use_dins) && Game.strength1));
	Location_Access.zeldasSpot = true;
	Location_Access.eponasSpot = true;
	Location_Access.sariasSpot = true;
	Location_Access.stormsSpot = true;
	Location_Access.sunsSpot = Game.lullaby;
	Location_Access.boleroSpot = Game.can_enter_fire_temple;
	Location_Access.minuetSpot = true;
	Location_Access.requiemSpot = Game.can_enter_colossus;
	Location_Access.serenadeSpot = Game.ice_access;
	Location_Access.preludeSpot = Game.forest_medallion;
	Location_Access.nocturneSpot = Game.forest_medallion && Game.fire_medallion && Game.water_medallion;
	Location_Access.oot = Game.kokiri_emerald && Game.goron_ruby && Game.zora_sapphire;




	gs[1] = Location_Logic.gs_kokiri_child;
	gs[2] = Location_Logic.gs_kokiri_bean;
	gs[3] = Location_Logic.gs_kokiri_adult;
	gs[4] = Location_Logic.gs_market;
	gs[5] = Location_Logic.gs_lost_woods_bean1;
	gs[6] = Location_Logic.gs_lost_woods_bean2;
	gs[7] = Location_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_Logic.gs_sacred_forest;
	gs[9] = Location_Logic.gs_outside_kakariko;
	gs[10] = Location_Logic.gs_near_gerudo;
	gs[11] = Location_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_Logic.gs_lon_lon_tree;
	gs[14] = Location_Logic.gs_lon_lon_shed;
	gs[15] = Location_Logic.gs_lon_lon_window;
	gs[16] = Location_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_Logic.gs_kakariko_construction;
	gs[18] = Location_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_Logic.gs_kakariko_guard_house;
	gs[20] = Location_Logic.gs_kakariko_tree;
	gs[21] = Location_Logic.gs_kakariko_tower;
	gs[22] = Location_Logic.gs_kakariko_impas;
	gs[23] = Location_Logic.gs_graveyard_wall;
	gs[24] = Location_Logic.gs_graveyard_bean;
	gs[25] = Location_Logic.gs_trail_bean;
	gs[26] = Location_Logic.gs_trail_bombable_wall;
	gs[27] = Location_Logic.gs_trail_hail_path;
	gs[28] = Location_Logic.gs_trail_above_dodongos;
	gs[29] = Location_Logic.gs_goron_city_center;
	gs[30] = Location_Logic.gs_goron_city_maze;
	gs[31] = Location_Logic.gs_crater_crate;
	gs[32] = Location_Logic.gs_crater_bean;
	gs[33] = Location_Logic.gs_river_ladder;
	gs[34] = Location_Logic.gs_river_near_grotto;
	gs[35] = Location_Logic.gs_river_above_bridge;
	gs[36] = Location_Logic.gs_domain;
	gs[37] = Location_Logic.gs_fountain_above_log;
	gs[38] = Location_Logic.gs_fountain_tree;
	gs[39] = Location_Logic.gs_fountain_hidden_cave;
	gs[40] = Location_Logic.gs_hylia_bean;
	gs[41] = Location_Logic.gs_hylia_lab_wall;
	gs[42] = Location_Logic.gs_hylia_island;
	gs[43] = Location_Logic.gs_hylia_tree;
	gs[44] = Location_Logic.gs_lab_crate;
	gs[45] = Location_Logic.gs_valley_small_bridge;
	gs[46] = Location_Logic.gs_valley_bean;
	gs[47] = Location_Logic.gs_valley_tent;
	gs[48] = Location_Logic.gs_valley_pillar;
	gs[49] = Location_Logic.gs_fortress_archery;
	gs[50] = Location_Logic.gs_fortress_top;
	gs[51] = Location_Logic.gs_wasteland_structure;
	gs[52] = Location_Logic.gs_colossus_bean;
	gs[53] = Location_Logic.gs_colossus_tree;
	gs[54] = Location_Logic.gs_colossus_hill;
	gs[55] = Location_Logic.gs_zora_river_tree;
	gs[56] = Location_Logic.gs_ganons;
	gs[57] = Location_Logic.gs_deku_basement_back;
	gs[58] = Location_Logic.gs_deku_basement_gate;
	gs[59] = Location_Logic.gs_deku_basement_vines;
	gs[60] = Location_Logic.gs_deku_compass;
	gs[61] = Location_Logic.gs_dodongos_east_side;
	gs[62] = Location_Logic.gs_dodongos_stair_room;
	gs[63] = Location_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_Logic.gs_dodongos_before_king;
	gs[66] = Location_Logic.gs_jabu_vines;
	gs[67] = Location_Logic.gs_jabu_near_octo1;
	gs[68] = Location_Logic.gs_jabu_near_octo2;
	gs[69] = Location_Logic.gs_jabu_near_boss;
	gs[70] = Location_Logic.gs_forest_first;
	gs[71] = Location_Logic.gs_forest_lobby;
	gs[72] = Location_Logic.gs_forest_outdoor_east;
	gs[73] = Location_Logic.gs_forest_outdoor_west;
	gs[74] = Location_Logic.gs_forest_basement;
	gs[75] = Location_Logic.gs_fire_song_of_time;
	gs[76] = Location_Logic.gs_fire_bomb_wall;
	gs[77] = Location_Logic.gs_fire_scarecrow1;
	gs[78] = Location_Logic.gs_fire_scarecrow2;
	gs[79] = Location_Logic.gs_fire_basement;
	gs[80] = Location_Logic.gs_water_south_basement;
	gs[81] = Location_Logic.gs_water_river;
	gs[82] = Location_Logic.gs_water_central;
	gs[83] = Location_Logic.gs_water_near_boss_key;
	gs[84] = Location_Logic.gs_water_platform_room;
	gs[85] = Location_Logic.gs_spirit_metal_fence;
	gs[86] = Location_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_Logic.gs_spirit_boulder_room;
	gs[88] = Location_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_Logic.gs_shadow_like_like;
	gs[91] = Location_Logic.gs_shadow_crusher;
	gs[92] = Location_Logic.gs_shadow_giant_pot;
	gs[93] = Location_Logic.gs_shadow_near_boat;
	gs[94] = Location_Logic.gs_shadow_three_pots;
	gs[95] = Location_Logic.gs_well_west_inner;
	gs[96] = Location_Logic.gs_well_east_inner;
	gs[97] = Location_Logic.gs_well_like_like;
	gs[98] = Location_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_Logic.gs_ice_hp_room;
	gs[100] = Location_Logic.gs_ice_block_room;

	Logic.gold_skulltulas = 0;
	var i;
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1;};
	}
	document.getElementById("skulls_in_logic").innerHTML = "Skulls: " + Logic.gold_skulltulas;

	Game.logically_accessible = 0;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;

	temp = 0;
	for (const key of keys) {
		if (temp == 256) {break; }
		temp +=1;
		str = "text_" + key;
		if(document.getElementById(str) == null) {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById(str).className= "logic_check_text";
			if(document.getElementById(key) != null) {
				if (temp <= 242) {Game.logically_accessible += 1;}
				if (temp == 44 && Game.deku_checks_remaining == 0) {Game.logically_accessible -= 1;}
			    if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp >= 115 && temp <= 128) {Game.forest_logically_accessible += 1;}
				if (temp >= 129 && temp <= 143) {Game.fire_logically_accessible += 1;}
				if (temp >= 144 && temp <= 154) {Game.water_logically_accessible += 1;}
				if (temp >= 155 && temp <= 174) {Game.spirit_logically_accessible += 1;}
				if (temp >= 175 && temp <= 192) {Game.shadow_logically_accessible += 1;}
				if (temp >= 193 && temp <= 208) {Game.ganons_logically_accessible += 1;}
				if (temp >= 209 && temp <= 230) {Game.gtg_logically_accessible += 1;}
				if (temp >= 231 && temp <= 244) {Game.well_logically_accessible += 1;}
			}
		}
		else if (Location_Access[key] == true) {
			document.getElementById(str).className= "access_check_text";
		}
		else {
			document.getElementById(str).className= "ool_check_text";
		}
	}

	document.getElementById("forest").innerHTML = "" + Game.forest_checks_remaining;
	document.getElementById("fire").innerHTML = "" + Game.fire_checks_remaining;
	document.getElementById("water").innerHTML = "" + Game.water_checks_remaining;
	document.getElementById("spirit").innerHTML = "" + Game.spirit_checks_remaining;
	document.getElementById("shadow").innerHTML = "" + Game.shadow_checks_remaining;
	document.getElementById("ganons").innerHTML = "" + Game.ganons_checks_remaining;
	document.getElementById("gtg").innerHTML = "" + Game.gtg_checks_remaining;
	document.getElementById("well").innerHTML = "" + Game.well_checks_remaining;

	document.getElementById("forestSKs").innerHTML = "" + (5 - Game.current_forest_keys);
	document.getElementById("fireSKs").innerHTML = "" + (8 - Game.current_fire_keys);
	document.getElementById("waterSKs").innerHTML = "" + (6 - Game.current_water_keys);
	document.getElementById("spiritSKs").innerHTML = "" + (5 - Game.current_spirit_keys);
	document.getElementById("shadowSKs").innerHTML = "" + (5 - Game.current_shadow_keys);
	document.getElementById("ganonsSKs").innerHTML = "" + (2 - Game.current_ganons_keys);
	document.getElementById("gtgSKs").innerHTML = "" + (9 - Game.current_gtg_keys);
	document.getElementById("wellSKs").innerHTML = "" + (3 - Game.current_well_keys);

	if (Game.forest_boss_key) {document.getElementById("forestBKs").innerHTML = 0;} else {document.getElementById("forestBKs").innerHTML = 1;}
	if (Game.fire_boss_key) {document.getElementById("fireBKs").innerHTML = 0;} else {document.getElementById("fireBKs").innerHTML = 1;}
	if (Game.water_boss_key) {document.getElementById("waterBKs").innerHTML = 0;} else {document.getElementById("waterBKs").innerHTML = 1;}
	if (Game.spirit_boss_key) {document.getElementById("spiritBKs").innerHTML = 0;} else {document.getElementById("spiritBKs").innerHTML = 1;}
	if (Game.shadow_boss_key) {document.getElementById("shadowBKs").innerHTML = 0;} else {document.getElementById("shadowBKs").innerHTML = 1;}
	if (Game.ganons_boss_key) {document.getElementById("ganonsBKs").innerHTML = 0;} else {document.getElementById("ganonsBKs").innerHTML = 1;}

	/*if(Location_Logic.deku_queen_gohma == true) {document.getElementById("dekuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dekuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.dodongos_king_dodongo == true) {document.getElementById("dodongosLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dodongosLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.jabu_barinade == true) {document.getElementById("jabuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("jabuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.forest14 == true) {document.getElementById("forestLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("forestLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.fire6 == true) {document.getElementById("fireLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("fireLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.water11 == true) {document.getElementById("waterLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("waterLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.spirit20 == true) {document.getElementById("spiritLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("spiritLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.shadow18 == true) {document.getElementById("shadowLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("shadowLogic").style.backgroundColor = "palevioletred";}**/




	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}


	if (Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =1; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =1; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =1; }}
	if (Game.magic1) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow1) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =1; }}
	if (Game.hookshot1) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =1; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =1; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =1; }}
	if (Game.strength1) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =1; }}
	if (Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =1; }}
	if (Game.hookshot2) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =1; }}
	if (Game.strength2) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =1; }}

	if (!Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =.2; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =.2; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =.2; }}
	if (!Game.magic1) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =.2; }}
	if (!Game.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Game.bow1) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =.2; }}
	if (!Game.hookshot1) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =.2; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =.2; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =.2; }}
	if (!Game.strength1) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =.2; }}
	if (!Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =.2; }}
	if (!Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =.2; }}
	if (!Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =.2; }}
	if (!Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =.2; }}
	if (!Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =.2; }}
	if (!Game.hookshot2) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =.2; }}
	if (!Game.strength2) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =.2; }}
	if (!Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =.2; }}
	if (!Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =.2; }}
	if (!Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =.2; }}

	if (Game.lullaby) {document.getElementById("lullabyimg").style.opacity =1;}
	if (Game.eponas) {document.getElementById("eponasimg").style.opacity =1;}
	if (Game.sarias) {document.getElementById("sariasimg").style.opacity =1;}
	if (Game.suns_song) {document.getElementById("sunsimg").style.opacity =1;}
	if (Game.song_of_time) {document.getElementById("sotimg").style.opacity =1;}
	if (Game.song_of_storms) {document.getElementById("sosimg").style.opacity =1;}
	if (Game.minuet) {document.getElementById("minuetimg").style.opacity =1;}
	if (Game.bolero) {document.getElementById("boleroimg").style.opacity =1;}
	if (Game.serenade) {document.getElementById("serenadeimg").style.opacity =1;}
	if (Game.requiem) {document.getElementById("requiemimg").style.opacity =1;}
	if (Game.nocturne) {document.getElementById("nocturneimg").style.opacity =1;}
	if (Game.prelude) {document.getElementById("preludeimg").style.opacity =1;}

	if (Game.bottle1 || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;}
	if (Game.farores_wind) {document.getElementById("faroresimg").style.opacity =1;}
	if (Game.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;}
	if (Game.scale1) {document.getElementById("silverscaleimg").style.opacity =1;}
	if (Game.lens_of_truth) {document.getElementById("lensimg").style.opacity =1;}
	if (Game.strength3) {document.getElementById("goldengauntletsimg").style.opacity =1;}
	if (Game.slingshot1) {document.getElementById("slingshotimg").style.opacity =1;}

	/**if (Game.minuet) {document.getElementById("min_note").style.opacity = 1;}
	if (Game.bolero) {document.getElementById("bol_note").style.opacity = 1;}
	if (Game.serenade) {document.getElementById("ser_note").style.opacity = 1;}
	if (Game.requiem) {document.getElementById("req_note").style.opacity = 1;}
	if (Game.nocturne) {document.getElementById("noc_note").style.opacity = 1;}
	if (Game.prelude) {document.getElementById("pre_note").style.opacity = 1;}*/

	if (document.getElementById("deku_queen_gohma") == null) {if (document.getElementById("text_deku") != null) {document.getElementById("text_deku").style.opacity=.2}}
	if (document.getElementById("dodongos_king_dodongo") == null) {if (document.getElementById("text_dod") != null) {document.getElementById("text_dod").style.opacity=.2}}
	if (document.getElementById("jabu_barinade") == null) {if (document.getElementById("text_jabu") != null) {document.getElementById("text_jabu").style.opacity=.2}}
	if (document.getElementById("forest14") == null) {if (document.getElementById("text_forest") != null) {document.getElementById("text_forest").style.opacity=.2}}
	if (document.getElementById("fire6") == null) {if (document.getElementById("text_fire") != null) {document.getElementById("text_fire").style.opacity=.2}}
	if (document.getElementById("water11") == null) {if (document.getElementById("text_water") != null) {document.getElementById("text_water").style.opacity=.2}}
	if (document.getElementById("spirit20") == null) {if (document.getElementById("text_spirit") != null) {document.getElementById("text_spirit").style.opacity=.2}}
	if (document.getElementById("shadow18") == null) {if (document.getElementById("text_shadow") != null) {document.getElementById("text_shadow").style.opacity=.2}}
	if (document.getElementById("text_pocket") != null) {document.getElementById("text_pocket").style.opacity=.2}

	if (document.getElementById("kokiri_break") != null && document.getElementById("mido_1") == null && document.getElementById("mido_2") == null && document.getElementById("mido_3") == null && document.getElementById("mido_4") == null && document.getElementById("kokiri_sword") == null && document.getElementById("kokiri_song_of_storms") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("kokiri_break"));}
	if (document.getElementById("ranch_break") != null && document.getElementById("talons_chickens") == null && document.getElementById("back_of_ranch") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("ranch_break"));}
	if (document.getElementById("field_break") != null && document.getElementById("hyrule_forest_boulder") == null && document.getElementById("hyrule_open_grotto") == null && document.getElementById("hyrule_hp_scrub") == null && document.getElementById("hyrule_boulder_of_destiny") == null && document.getElementById("hyrule_tektite_grotto") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("field_break"));}
	if (document.getElementById("valley_break") != null && document.getElementById("gerudovalley_box") == null && document.getElementById("gerudovalley_waterfall") == null && document.getElementById("gerudo_hammer") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("valley_break"));}
	if (document.getElementById("hylia_break") != null && document.getElementById("hylia_child_fishing") == null && document.getElementById("hylia_bottle") == null && document.getElementById("hylia_adult_fishing") == null && document.getElementById("hylia_lab_top") == null && document.getElementById("hylia_lab_dive") == null && document.getElementById("hylia_sun_shoot") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("hylia_break"));}
	if (document.getElementById("market_break") != null && document.getElementById("market_slingshot_game") == null && document.getElementById("richard") == null && document.getElementById("market_bowling_1") == null && document.getElementById("market_bowling_2") == null && document.getElementById("market_lens_game") == null && document.getElementById("poes") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("market_break"));}
	if (document.getElementById("dfairy_break") != null && document.getElementById("dins_fairy") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("dfairy_break"));}
	if (document.getElementById("gfairy_break") != null && document.getElementById("g_fairy") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("gfairy_break"));}
	if (document.getElementById("tot_break") != null && document.getElementById("lacs") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("tot_break"));}
	if (document.getElementById("fountain_break") != null && document.getElementById("fountain_fairy") == null && document.getElementById("ice_glacier_hp") == null && document.getElementById("ice_bottom_of_fountain") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("fountain_break"));}
	if (document.getElementById("deku_break") != null && document.getElementById("deku_lobby") == null && document.getElementById("deku_slingshot") == null && document.getElementById("deku_slingshot_room_side") == null && document.getElementById("deku_compass") == null && document.getElementById("deku_basement") == null && document.getElementById("deku_queen_gohma") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("deku_break"));}
	if (document.getElementById("lostwoods_break") != null && document.getElementById("ocarina_game") == null && document.getElementById("lost_woods_grotto") == null && document.getElementById("lost_woods_scrub_grotto") == null && document.getElementById("bridge_scrub") == null && document.getElementById("target") == null && document.getElementById("skull_kid") == null && document.getElementById("theater") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("lostwoods_break"));}
	if (document.getElementById("sfm_break") != null && document.getElementById("wolfos_grotto") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("sfm_break"));}
	if (document.getElementById("gcity_break") != null && document.getElementById("rolling_goron") == null && document.getElementById("goron_dance") == null && document.getElementById("goron_pot") == null && document.getElementById("goron_maze_1") == null && document.getElementById("goron_maze_2") == null && document.getElementById("goron_maze_3") == null && document.getElementById("goron_link") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("gcity_break"));}
	if (document.getElementById("dodongos_break") != null && document.getElementById("dodongos_map") == null && document.getElementById("dodongos_compass") == null && document.getElementById("dodongos_bomb_flower_platform") == null && document.getElementById("dodongos_bomb_bag") == null && document.getElementById("dodongos_end_of_bridge") == null && document.getElementById("dodongos_above_king") == null && document.getElementById("dodongos_king_dodongo") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("dodongos_break"));}
	if (document.getElementById("trail_break") != null && document.getElementById("trail_bombable") == null && document.getElementById("trail_dodongos_top") == null && document.getElementById("trail_song_of_storms") == null && document.getElementById("crater_peak_fairy") == null && document.getElementById("trade_quest") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("trail_break"));}
	if (document.getElementById("kakariko_break") != null && document.getElementById("man_on_roof") == null && document.getElementById("kakariko_grotto") == null && document.getElementById("windmill") == null && document.getElementById("anju") == null && document.getElementById("cow_house") == null && document.getElementById("archery_game") == null && document.getElementById("redead_grotto") == null && document.getElementById("anjus_chickens") == null && document.getElementById("tokens_10") == null && document.getElementById("tokens_20") == null && document.getElementById("tokens_30") == null && document.getElementById("tokens_40") == null && document.getElementById("tokens_50") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("kakariko_break"));}
	if (document.getElementById("graveyard_break") != null && document.getElementById("shield_grave") == null && document.getElementById("gravedigging_tour") == null && document.getElementById("suns_grave") == null && document.getElementById("fire_grave") == null && document.getElementById("graveyard_box") == null && document.getElementById("race_1") == null && document.getElementById("race_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("graveyard_break"));}
	if (document.getElementById("river_break") != null && document.getElementById("river_pillar") == null && document.getElementById("river_grotto") == null && document.getElementById("river_ledge") == null && document.getElementById("frogs_1") == null && document.getElementById("frogs_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("river_break"));}
	if (document.getElementById("domain_break") != null && document.getElementById("zora_diving") == null && document.getElementById("zora_torches") == null && document.getElementById("thaw_king") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("domain_break"));}
	if (document.getElementById("colossus_break") != null && document.getElementById("colossus_bean") == null && document.getElementById("colossus_fairy") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("colossus_break"));}
	if (document.getElementById("wasteland_break") != null && document.getElementById("wasteland") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("wasteland_break"));}
	if (document.getElementById("fortress_break") != null && document.getElementById("gerudo_roof") == null && document.getElementById("gerudo_archery_1") == null && document.getElementById("gerudo_archery_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("fortress_break"));}

		/*
	if(!Game.song_of_storms) {Game.logically_accessible -=11;}
	else{
		if (Game.bomb_bag1 && Game.lullaby && Game.can_see && Game.kokiri_sword) {}
		else{
			Game.logically_accessible -= 2;
		if (!Game.bomb_bag1 && !Game.strength1) {Game.logically_accessible -=3*.75}
		else if (!Game.bomb_bag1) {Game.logically_accessible -=2*.75}
		if (!Game.lullaby) {Game.logically_accessible -=5*.75}
		else if (!Game.can_see && !Game.kokiri_sword) {Game.logically_accessible -=2*.75}
		else if (Game.can_see && Game.kokiri_sword) {}
		else {Game.logically_accessible -=1*.75}
		if (!Game.can_see) {Game.logically_accessible -=4*.75}
		}
	}

		Game.logically_accessible +=1;
		Game.logically_accessible -=11;
		if (Game.can_enter_shadow) {Game.logically_accessible += 2*.58}
		var mult1 = 1;
		var mult2 = 1;
		var mult3 = 1;
		var mult4 = 1;
		if(!Game.strength1) {mult1 = .7; mult2 = .63; mult3 = .57; mult4 = .5;}
		if (Game.can_cross_shadow_gap) {Game.logically_accessible += 2*.58}
		if (Game.can_bomb_shadow_wall) {Game.logically_accessible += 3*.64+2*.64*mult1; if (Game.strength1){Game.logically_accessible += 2*.64}}
		if (Game.can_pass_shadow_hookshot_door){Game.logically_accessible += 3*.67*mult2}
		if (Game.can_ride_shadow_boat){Game.logically_accessible += 3*.72*mult3}
		if (Game.can_beat_shadow_boss) {Game.logically_accessible += 1*mult4}
	*/

	Game.logically_accessible=Game.logically_accessible.toFixed(0);
	d = new Date();
	timeFuture = d.getTime();
	timeCurrent = timeFuture-timeStart;
	timeCurrent = timeCurrent *3.5/60;
	timeFinal = timeCurrent + timeLost;
	//skipValue = document.getElementById("go_input").value/(Game.checks_remaining-13) * 1508.33334 * 35/Game.logically_accessible;
	if (timeFinal > 0) {document.getElementById("time_difference").style.color="red"; }
	tMinutes = Math.floor(timeFinal / 60000);
	tSeconds = Math.floor(timeFinal % 60000 / 1000);
	//sMinutes = Math.floor(skipValue / 60);
	//sSeconds = Math.floor(skipValue % 60);
	rValue = Math.floor(timeFinal/1000 *1.3 + 60)
	rMinutes = Math.floor(rValue / 60);
	rSeconds = Math.floor(rValue % 60);
	//goodCheckPercent = Math.floor(document.getElementById("go_input").value/(Game.checks_remaining-13)*100);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Game.logically_accessible;
	//document.getElementById("good_check_percent").innerHTML="&nbsp; &nbsp;&nbsp;" + goodCheckPercent + "%";
	//document.getElementById("time_difference").innerHTML="" + tMinutes + "m" + tSeconds + "s";
	//document.getElementById("skip_req").innerHTML="" + rMinutes + "m" + rSeconds + "s";
	//document.getElementById("skip_value").innerHTML="" + sMinutes + "m" + sSeconds + "s";

}




var Check={};
var Game={};
var Person={};
var Map={};
var UI={};
var Location_Logic={};
var Location_Access={};
var Logic={};
var Location ={};
var gs = [];
var Area = [];
var Known = [];

var age = "child";
var hinted = false;
var dekutod = false;
var lastCheck = "start";
var safetyMod = 1;
var progressivePool = 30;
var progressiveAvail = 5;

var dekuRequired = .73;
var dodongosRequired = .73;
var jabuRequired = .73;
var forestRequired = .73;
var fireRequired = .73;
var waterRequired = .73;
var spiritRequired = .73;
var shadowRequired = .73;
var stoneRequired = .2;
var songRequired = .4;

var hookshotRequired = 1;
var longshotRequired = .7;
var ironsRequired = .4;
var letterRequired = .9;
var boomerangRequired = .7;
var strength1Required = .9;
var strength2Required = .7;
var hammerRequired = .7;
var bowRequired = 1;
var magicRequired = 1;
var lightsRequired = 1;
var mirrorRequired = .7;
var dinsRequired = .5;
var hoversRequired = .7;
var knowMode = hookshotRequired + longshotRequired + ironsRequired + letterRequired + boomerangRequired + strength1Required*.85 + strength2Required*.85 + hammerRequired + bowRequired*.5 + magicRequired*.7 + lightsRequired * .5 + mirrorRequired + dinsRequired + hoversRequired;

Game.logically_accessible = 0;
var d = new Date();
var initialTime = d.getTime();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
//document.getElementById("go_input").value = 9;

	Person.type = "soli";
	Logic.brackets = false;

	document.getElementById("text_gen_med1").style.color = "yellow";
	document.getElementById("text_gen_med2").style.color = "yellow";
	document.getElementById("text_gen_med3").style.color = "yellow";

	Game.kokiri_sword = false;
	Game.farores_wind = false;
	Game.slingshot1= false;
	Game.slingshot1= false;
	Game.slingshot2= false;
	Game.slingshot3= false;
	Game.boomerang = false;
	Game.rutos_letter = false;
	Game.bottle1 = false;
	Game.bottle2 = false;
	Game.bottle3 = false;
	Game.big_poe = false;
	Game.scale1 = false;
	Game.scale2 = false;
	Game.bomb_bag1 = false;
	Game.bomb_bag2 = false;
	Game.bomb_bag3 = false;
	Game.hammer = false;
	Game.bow1 = false;
	Game.bow2 = false;
	Game.bow3 = false;
	Game.hookshot1 = false;
	Game.longshot = false;
	Game.iron_boots = false;
	Game.hover_boots = false;
	Game.magic = false;
	Game.magic1 = false;
	Game.magic2 = false;
	Game.dins_fire = false;
	Game.fire_arrows = false;
	Game.strength1 = false;
	Game.strength2 = false;
	Game.strength3 = false;
	Game.mirror_shield = false;
	Game.wallet1 = false;
	Game.wallet2 = false;
	Game.goron_tunic = false;
	Game.zora_tunic = false;
	Game.lens_of_truth = false;
	Game.stone_of_agony = false;
	Game.prescription = false;
	Game.claim_check = false;
	Game.lullaby = false;
	Game.eponas = false;
	Game.sarias = false;
	Game.suns_song = false;
	Game.song_of_time = false;
	Game.song_of_storms = false;
	Game.minuet = false;
	Game.bolero = false;
	Game.serenade = false;
	Game.requiem = false;
	Game.nocturne = false;
	Game.prelude = false;

	Game.min_forest_keys=0;
	Game.current_forest_keys=0;
	Game.forest_keys = 0;
	Game.min_fire_keys=0;
	Game.current_fire_keys=0;
	Game.fire_keys = 0;
	Game.min_water_keys=0;
	Game.current_water_keys=0;
	Game.water_keys = 0;
	Game.min_spirit_keys=0;
	Game.current_spirit_keys=0;
	Game.spirit_keys = 0;
	Game.min_shadow_keys=0;
	Game.current_shadow_keys=0;
	Game.shadow_keys = 0;
	Game.min_ganons_keys=0;
	Game.current_ganons_keys=0;
	Game.ganons_keys = 0;
	Game.min_gtg_keys=0;
	Game.current_gtg_keys=0;
	Game.gtg_keys = 0;
	Game.min_well_keys=0;
	Game.current_well_keys=0;
	Game.well_keys = 0;
	Game.deku_checks_remaining = 7;
	Game.dodongos_checks_remaining = 7;
	Game.jabu_checks_remaining = 4;
	Game.forest_checks_remaining = 8;
	Game.fire_checks_remaining = 6;
	Game.water_checks_remaining = 4;
	Game.shadow_checks_remaining = 12;
	Game.spirit_checks_remaining = 14;
	Game.gtg_checks_remaining = 13;
	Game.well_checks_remaining = 11;
	Game.ganons_checks_remaining = 13;

	Game.checks_remaining=195;
	Game.logically_accessible=35;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;

	Game.bomb_bag_img= "./images/explosive505050.png";
	Game.letter_img= "./images/letter505050.png";
	Game.boomerang_img= "./images/boomerang505050.png";
	Game.hookshot_img= "./images/hookshot505050.png";
	Game.bow_img= "./images/bow505050.png";
	Game.goron_bracelet_img= "./images/strength1505050.png";
	Game.hammer_img= "./images/ham505050.png";
	Game.iron_boots_img= "./images/ironboots505050.png";
	Game.silver_scale_img=  "./images/silverscale505050.png"
	Game.golden_scale_img= "./images/goldenscale505050.png";
	Game.longshot_img= "./images/longshot505050.png";
	Game.silver_gauntlets_img= "./images/strength2505050.png";
	Game.mirror_shield_img= "./images/mirrorshield505050.png";
	Game.dins_fire_img= "./images/dinsfirenew505050.png";
	Game.magic_meter_img= "./images/magic505050.png";
	Game.hover_boots_img= "./images/hovers505050.png";
	Game.theme = "dark";
	Game.themeChange = true;

	Game.has_chus = false;

	var Locations = [
		"mido_1", "mido_2", "mido_3", "mido_4", "kokiri_sword", "kokiri_song_of_storms",
		"talons_chickens", "back_of_ranch",
		"hyrule_forest_boulder", "hyrule_open_grotto", "hyrule_hp_scrub", "hyrule_boulder_of_destiny", "hyrule_tektite_grotto",
		"gerudovalley_box", "gerudovalley_waterfall", "gerudo_hammer",
		"hylia_child_fishing", "hylia_bottle", "hylia_adult_fishing", "hylia_lab_top", "hylia_lab_dive", "hylia_sun_shoot",
		"market_slingshot_game", "richard", "market_bowling_1", "market_bowling_2","market_lens_game","poes",
		"dins_fairy",
		"g_fairy",
		"lacs",
		"fountain_fairy", "ice_glacier_hp", "ice_bottom_of_fountain",
		"ice_map", "ice_compass", "ice_hp", "ice_irons",
		"deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "deku_basement", "deku_queen_gohma",
		"ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "bridge_scrub", "target", "skull_kid", "theater",
		"wolfos_grotto",
		"rolling_goron", "goron_dance", "goron_pot", "goron_maze_1", "goron_maze_2", "goron_maze_3", "goron_link",
		"dodongos_map", "dodongos_compass", "dodongos_bomb_flower_platform", "dodongos_bomb_bag", "dodongos_end_of_bridge", "dodongos_above_king", "dodongos_king_dodongo",
		"trail_bombable", "trail_dodongos_top", "trail_song_of_storms", "crater_peak_fairy", "trade_quest",
		"crater_bean", "crater_hammer_fairy", "crater_grotto", "crater_nook_hp",
		"man_on_roof", "kakariko_grotto", "windmill", "anju", "cow_house", "archery_game", "redead_grotto", "anjus_chickens", "tokens_10", "tokens_20", "tokens_30", "tokens_40", "tokens_50",
		"shield_grave", "gravedigging_tour", "suns_grave", "fire_grave", "graveyard_box", "race_1", "race_2",
		"river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2",
		"zora_diving", "zora_torches", "thaw_king",
		"colossus_bean", "colossus_fairy",
		"wasteland",
		"gerudo_roof", "gerudo_archery_1", "gerudo_archery_2",
		"jabu_boomerang", "jabu_map", "jabu_compass", "jabu_barinade",
		"forest1", "forest2", "forest3", "forest4", "forest5", "forest6", "forest7", "forest8", "forest9", "forest10", "forest11", "forest12", "forest13", "forest14",
		"fire1", "fire2", "fire3", "fire4", "fire5", "fire6", "fire7", "fire8", "fire9", "fire10", "fire11", "fire12", "fire13", "fire14", "fire15",
		"water1", "water2", "water3", "water4", "water5", "water6", "water7", "water8", "water9", "water10", "water11",
		"spirit1", "spirit2", "spirit3", "spirit4", "spirit5", "spirit6", "spirit7", "spirit8", "spirit9", "spirit10", "spirit11", "spirit12", "spirit13", "spirit14", "spirit15", "spirit16", "spirit17", "spirit18", "spirit19", "spirit20",
		"shadow1", "shadow2", "shadow3", "shadow4", "shadow5", "shadow6", "shadow7", "shadow8", "shadow9", "shadow10", "shadow11", "shadow12", "shadow13", "shadow14", "shadow15", "shadow16", "shadow17", "shadow18",
		"ganons1", "ganons2", "ganons3", "ganons4", "ganons5", "ganons6", "ganons7", "ganons8", "ganons9", "ganons10", "ganons11", "ganons12", "ganons13", "ganons14", "ganons15", "ganons16",
		"gtg1", "gtg2", "gtg3", "gtg4", "gtg5", "gtg6", "gtg7", "gtg8", "gtg9", "gtg10", "gtg11", "gtg12", "gtg13", "gtg14", "gtg15", "gtg16", "gtg17",  "gtg18", "gtg19", "gtg20", "gtg21", "gtg22",
		"well1", "well2", "well3", "well4", "well5", "well6", "well7", "well8", "well9", "well10", "well11", "well12", "well13", "well14",
		"zeldasSpot", "eponasSpot", "sariasSpot", "stormsSpot", "sunsSpot", "boleroSpot", "minuetSpot", "requiemSpot", "serenadeSpot", "preludeSpot", "nocturneSpot", "oot"
		];

		var Names = [
		"Kokiri: Mido's 1", "Kokiri: Mido's 2", "Kokiri: Mido's 3", "Kokiri: Mido's 4", "Kokiri: Sword", "Kokiri: SoS",
		"Ranch: T's Chicks", "Ranch: Back",
		"Field: Remote Gr.", "Field: Open Gr.", "Field: Scrub Gr.", "Field: Destiny", "Field: ATZ",
		"Valley: Box", "Valley: Waterfall", "Valley: Rocks",
		"Hylia: Ch. Fishing", "Hylia: Bottle", "Hylia: Ad. Fishing", "Hylia: LabTop", "Hylia: Divin'", "Hylia: Shootin'",
		"Market: Slingin'", "Market: Big Rich", "Market: Bowlin' 1", "Market: Bowlin' 2","Market: Chest Game","Market: Poes",
		"Hyrule Castle: Fairy",
		"Outside G's: Fairy",
		"Temple of Time: LACS",
		"Fountain: Fairy", "Fountain: Glacier", "Fountain: Bottom",
		"Ice: Map", "Ice: Compass", "Ice: HP", "Ice: Irons",
		"Deku: Lobby", "Deku: Sling 1", "Deku: Sling 2", "Deku: Compass 1", "Deku: Compass 2", "Deku: Basement", "Deku: Queen",
		"Lost Woods: Ocarina", "Lost Woods: Generic", "Lost Woods: Scrub Gr.", "Lost Woods: Br. Scrub", "Lost Woods: Target", "Lost Woods: Saria Kid", "Lost Woods: Skull Mask",
		"SFM: Wolfos Gr.",
		"Goron City: Big Rollin'", "Goron City: Dancin'", "Goron City: Chuckin'", "Goron City: Maze 1", "Goron City: Maze 2", "Goron City: Maze 3!", "Goron City: Lil Rollin'",
		"Dodongos: Map", "Dodongos: Compass", "Dodongos: Platform", "Dodongos: Bomb Bag", "Dodongos: Bridge", "Dodongos: Above King", "Dodongos: King",
		"Trail: Wall", "Trail: Top", "Trail: SoS", "Trail: Fairy", "Trail: Biggoron",
		"Crater: Bean", "Crater: Fairy", "Crater: Grotto", "Crater: Nook",
		"Kakariko: Roof", "Kakariko: Back Grotto", "Kakariko: Windmill", "Kakariko: Anju", "Kakariko: Cow", "Kakariko: Archery", "Kakariko: Redead Gr.", "Kakariko: Chickens", "Kakariko: 10", "Kakariko: 20", "Kakariko: 30", "Kakariko: 40", "Kakariko: 50",
		"Graveyard: Shield", "Graveyard: Digging", "Graveyard: Suns", "Graveyard: Fire", "Graveyard: Box", "Graveyard: Race 1", "Graveyard: Race 2",
		"River: Pillar", "River: Grotto", "River: Ledge", "River: Frogs 1", "River: Frogs 2",
		"Domain: Divin'", "Domain: Lit", "Domain: big guy",
		"Colossus: Bean", "Colossus: Fairy",
		"Wasteland: Check",
		"Fortress: Roof", "Fortress: Archery 1", "Fortress: Archery 2",
		"Jabu: Boomerang", "Jabu: Map", "Jabu: Compass", "Jabu: Barinade",
		"Forest: First", "Forest: 2 Stalfos", "Forest: Court. Hookshot", "Forest: Court. High", "Forest: Court. Low", "Forest: Shoot", "Forest: BK", "Forest: Floormasta", "Forest: Red", "Forest: Bow", "Forest: Blue", "Forest: Falling", "Forest: Near Boss", "Forest: Phantom Ganon",
		"Fire: Near Boss", "Fire: Hammer 1", "Fire: Hammer 2", "Fire: Lava Open", "Fire: Lava Bomb", "Fire: Volva", "Fire: Boulda Low", "Fire: Boulda Side", "Fire: Map", "Fire: Boulda Uppa", "Fire: Boulda Bomb", "Fire: Scarecrow", "Fire: Compass", "Fire: SoT Goron", "Fire: MEGA",
		"Water: Compass", "Water: Map", "Water: Cracked", "Water: Torches", "Water: Bow Block", "Water: Pillar", "Water: Dark Link", "Water: Riva", "Water: Dragin'", "Water: BK", "Water: Morpha",
		"Spirit: Child Left", "Spirit: Child Right", "Spirit: Child Climb 1", "Spirit: Child Climb 2", "Spirit: Map", "Spirit: Sun Room", "Spirit: Right Hand", "Spirit: Adult Left", "Spirit: Adult Right", "Spirit: Mirror 1", "Spirit: Mirror 2", "Spirit: Lullaby Hand", "Spirit: Lullaby High", "Spirit: Mirror Room", "Spirit: Invisi 1", "Spirit: Invisi 2", "Spirit: Left Hand", "Spirit: BK", "Spirit: Tippy Top", "Spirit: Twinrova",
		"Shadow: Map", "Shadow: Hover Boots", "Shadow: Compass", "Shadow: Early Silvs", "Shadow: Spinning 1", "Shadow: Spinning 2", "Shadow: Spike Lower", "Shadow: Spike Uppa", "Shadow: Spike Switch", "Shadow: Mid Silvs", "Shadow: Freestanding", "Shadow: Wind", "Shadow: AW Bomb", "Shadow: AW Enemies", "Shadow: Dins 1", "Shadow: Dins 2", "Shadow: Floormasta", "Shadow: Bongo",
		"Ganon's: Light 1", "Ganon's: Light 2", "Ganon's: Light 3", "Ganon's: Light 4", "Ganon's: Light 5", "Ganon's: Light 6", "Ganon's: Light Enemies", "Ganon's: Light Lullaby", "Ganon's: Spirit 1", "Ganon's: Spirit 2", "Ganon's: Forest", "Ganon's: Water 1", "Ganon's: Water 2", "Ganon's: Shadow 1", "Ganon's: Shadow 2", "Ganon's: BK",
		"GTG: Lobby Left", "GTG: Lobby Right", "GTG: Stalfos", "GTG: Wolfos", "GTG: Silvers 1", "GTG: Silvers 2", "GTG: Silvers 3", "GTG: Silvers 4", "GTG: Eyes", "GTG: Above Eyes", "GTG: Keese+Slugs", "GTG: Hammer", "GTG: Freestanding", "GTG: Right 1", "GTG: Right 2", "GTG: Beamos", "GTG: Left 1",  "GTG: Left 2", "GTG: Left 3", "GTG: Left 4", "GTG: Final", "GTG: Toilet",
		"Well: Fake Right", "Well: Center Small", "Well: Back Bomb", "Well: Water Left", "Well: Freestanding", "Well: Center Big", "Well: Fake Left", "Well: Front Bomb", "Well: Water Front", "Well: Dead Hand", "Well: Invisible", "Well: Locked 1", "Well: Locked 2", "Well: Basement",
		"Zelda", "Malon", "Saria", "Windmill", "Grave", "Crater", "Meadow", "Colossus", "Ice", "1 Medallion", "3 Medallion", "Ocarina of Time"
		];

	var hintStones = ["Crater: Hint", "Crater: Gr. Hint", "Trail: Gr. Hint", "Trail: Bigo Hint", "Colossus: Hint", "Dodongos: Hint", "Field: Open Gr. Hint", "Field: Remote Gr. Hint", "Field: Destiny Hint", "Valley: Hint", "Hylia: After Valley Hint", "Hylia: Back Right Hint", "Hylia: Back Left Hint", "Hyrule Castle: First Hint", "Hyrule Castle: Second Hint", "Temple of Time: First Hint", "Temple of Time: Second Hint", "Temple of Time: Third Hint", "Temple of Time: Fourth Hint", "Kakariko: Gr. Hint", "Kokiri: Left Deku Hint", "Kokiri: Right Deku Hint", "Kokiri: Gr. Hint", "Kokiri: LW Hint", "Lost Woods: Br. Hint", "Lost Woods: Gr. Hint", "SFM: Sarias Hint", "SFM: Maze 1 Hint", "SFM: Maze 2 Hint", "River: Gr. Hint", "River: Plateau Hint", "River: By ZD Hint", "Domain: Hint", "Fountain: Jabu Hint", "Fountain: By Fairy Hint", "Goron City: Maze Hint", "Goron City: Medigoron Hint", "Graveyard: Hint", "Hyrule Castle: Storms Hint", "Field: Hammer Hint"];

	var checkSummary = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens_of_truth", "trade", "light_arrows", "text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot",];

	Logic.bottle = false;
	Logic.big_poe = false;
	Logic.scale1 = false;
	Logic.scale2 = false;
	Logic.bomb_bag1 = false;
	Logic.bomb_bag2 = false;
	Logic.bomb_bag3 = false;
	Logic.bow1 = false;
	Logic.bow2 = false;
	Logic.bow3 = false;
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
	Logic.strength1 = false;
	Logic.strength2 = false;
	Logic.strength3 = false;
	Logic.magic1 = false;
	Logic.magic2 = false;
	Logic.slingshot1 = false;
	Logic.slingshot2 = false;
	Logic.slingshot3 = false;
	Logic.wallet1 = false;
	Logic.wallet2 = false;

	Logic.kokiri_sword = false;
	Logic.farores_wind = false;
	Logic.slingshot= false;
	Logic.boomerang = false;
	Logic.rutos_letter = false;
	Logic.silver_scale = false;
	Logic.golden_scale = false;
	Logic.bomb_bag = false;
	Logic.hammer = false;
	Logic.bow = false;
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
	Logic.iron_boots = false;
	Logic.hover_boots = false;
	Logic.magic = false;
	Logic.dins_fire = false;
	Logic.fire_arrows = false;
	Logic.goron_bracelet = false;
	Logic.silver_gauntlets = false;
	Logic.golden_gauntlets = false;
	Logic.mirror_shield = false;
	Logic.adults_wallet = false;
	Logic.giants_wallet = false;
	Logic.goron_tunic = false;
	Logic.zora_tunic = false;
	Logic.lens_of_truth = false;
	Logic.stone_of_agony = false;
	Logic.trade = false;
	Logic.prescription = false;
	Logic.claim_check = false;
	Logic.light_arrows = false;
	Logic.lullaby = false;
	Logic.eponas = false;
	Logic.sarias = false;
	Logic.suns_song = false;
	Logic.song_of_time = false;
	Logic.song_of_storms = false;
	Logic.minuet = false;
	Logic.bolero = false;
	Logic.serenade = false;
	Logic.requiem = false;
	Logic.nocturne = false;
	Logic.prelude = false;
	Logic.forest_medallion = false;
	Logic.fire_medallion = false;
	Logic.water_medallion = false;
	Logic.spirit_medallion = false;
	Logic.shadow_medallion = false;
	Logic.light_medallion = false;
	Logic.emerald = false;
	Logic.ruby = false;
	Logic.sapphire = false;
	Logic.kokiri_emerald = false;
	Logic.goron_ruby = false;
	Logic.zora_sapphire = false;

	Logic.forest_medallion_location = "unknown";
	Logic.fire_medallion_location  = "unknown";
	Logic.water_medallion_location  = "unknown";
	Logic.generic1 = "unknown";
	Logic.generic2 = "unknown";
	Logic.generic3 = "unknown";
	Logic.emerald = "unknown";
	Logic.ruby  = "unknown";
	Logic.sapphire  = "unknown";

	Logic.min_forest_keys=0;
	Logic.current_forest_keys=0;
	Logic.forest_keys = 0;
	Logic.min_fire_keys=0;
	Logic.current_fire_keys=0;
	Logic.fire_keys = 0;
	Logic.min_water_keys=0;
	Logic.current_water_keys=0;
	Logic.water_keys = 0;
	Logic.min_spirit_keys=0;
	Logic.current_spirit_keys=0;
	Logic.spirit_keys = 0;
	Logic.min_shadow_keys=0;
	Logic.current_shadow_keys=0;
	Logic.shadow_keys = 0;
	Logic.min_ganons_keys=0;
	Logic.current_ganons_keys=0;
	Logic.ganons_keys = 0;
	Logic.min_gtg_keys=0;
	Logic.current_gtg_keys=0;
	Logic.gtg_keys = 0;
	Logic.min_well_keys=0;
	Logic.current_well_keys=0;
	Logic.well_keys = 0;
	Logic.forced_forest_keys=0;
	Logic.forced_fire_keys=0;
	Logic.forced_water_keys=0;
	Logic.forced_spirit_keys=0;
	Logic.forced_shadow_keys=0;
	Logic.forced_ganons_keys=0;
	Logic.forced_gtg_keys=0;
	Logic.forced_well_keys=0;
	Logic.forced_forest_boss_key = false;
	Logic.forced_fire_boss_key = false;
	Logic.forced_water_boss_key = false;
	Logic.forced_spirit_boss_key = false;
	Logic.forced_shadow_boss_key = false;

	Logic.forest_boss_key = false;
	Logic.fire_boss_key = false;
	Logic.water_boss_key = false;
	Logic.spirit_boss_key = false;
	Logic.shadow_boss_key = false;
	Logic.ganons_boss_key = false;

	var WotH = new Array(34).fill(0);
    var checkedYet = new Array(256).fill(false);
	var readYet = new Array(42).fill(false);
	var AreaAge = new Array(34).fill(0);
	var textBlock = '';

	for (var i = 0; i < 244; i++) {
		Check[Location[i]] = "unknown";
	}

function junk(x) {
	var type = event.button;
	var str = x.id;
	str = str.substring('text_'.length);
	var temp = Locations.indexOf(str);

	if(type == 0) {
		if(str.startsWith("forest") && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -=1;}
		else if(str.startsWith("fire") && Game.fire_checks_remaining != 0 && str != "fire_grave") {Game.fire_checks_remaining -=1;}
		else if(str.startsWith("water") && Game.water_checks_remaining != 0) {Game.water_checks_remaining -=1;}
		else if(str.startsWith("spirit") && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -=1;}
		else if(str.startsWith("shadow") && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -=1;}
		else if(str.startsWith("ganons") && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -=1;}
		else if(str.startsWith("gtg") && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -=1;}
		else if(str.startsWith("well") && Game.well_checks_remaining != 0) {Game.well_checks_remaining -=1;}
		else if(temp < 114){}
		else {return;}
		Check[str]="junk";
		if (temp == 44 && Game.deku_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.checks_remaining +=1;}
		Game.checks_remaining -= 1;
	}

	else if(type == 1) {
		if(str.startsWith("forest") && !Game.forest_boss_key) {Game.forest_boss_key = true; Location.forest_boss_key = str;}
		else if(str.startsWith("fire") && !Game.fire_boss_key) {Game.fire_boss_key = true; Location.fire_boss_key = str;}
		else if(str.startsWith("water") && !Game.water_boss_key) {Game.water_boss_key = true; Location.water_boss_key = str;}
		else if(str.startsWith("spirit") && !Game.spirit_boss_key) {Game.spirit_boss_key = true; Location.spirit_boss_key = str;}
		else if(str.startsWith("shadow") && !Game.shadow_boss_key) {Game.shadow_boss_key = true; Location.shadow_boss_key = str;}
		else if(str.startsWith("ganons") && !Game.ganons_boss_key) {Game.ganons_boss_key = true; Location.ganons_boss_key = str;}
		else {return;}
		Check[str]="boss_key";
	}

	else if (type == 2) {
		if(str.startsWith("forest") && Game.current_forest_keys < 5) {Game.current_forest_keys +=1;}
		else if(str.startsWith("fire") && Game.current_fire_keys < 8) {Game.current_fire_keys +=1;}
		else if(str.startsWith("water") && Game.current_water_keys < 6) {Game.current_water_keys +=1;}
		else if(str.startsWith("spirit") && Game.current_spirit_keys < 5) {Game.current_spirit_keys +=1;}
		else if(str.startsWith("shadow") && Game.current_shadow_keys < 5) {Game.current_shadow_keys +=1;}
		else if(str.startsWith("gtg") && Game.current_gtg_keys < 9) {Game.current_gtg_keys +=1;}
		else if(str.startsWith("well") && Game.current_well_keys < 3) {Game.current_well_keys +=1;}
		else if(str.startsWith("ganons") && Game.current_ganons_keys < 2) {Game.current_ganons_keys +=1;}
		else {return;}
		Check[str]="small_key";
	}
	else {
		Check[str]="junk";
		Game.checks_remaining -=1;
	}

	var delete1 = str;
	var delete2 = "text_" + str;
	var delete3 = "br_" + str;

	if(temp < 38) {var parent = document.getElementById("normalColumn1");} else if (temp < 76) {var parent = document.getElementById("normalColumn2");} else if (temp < 114) {var parent = document.getElementById("normalColumn3");} else if (temp < 154) {var parent = document.getElementById("dung1");} else if (temp < 208) {var parent = document.getElementById("dung2");} else {var parent = document.getElementById("dung3");}

	if (document.getElementById(delete1) !== null) {
		var child = document.getElementById(delete1);
		parent.removeChild(child);
	}
	if (document.getElementById(delete2) !== null) {
		var child = document.getElementById(delete2);
		parent.removeChild(child);
	}
	if (document.getElementById(delete3) !== null) {
		var child = document.getElementById(delete3);
		parent.removeChild(child);
	}
	if (!hinted) {
		lastCheck = str;
	}
	Update();Update();Update();
}

function junkUltra(x) {
	if (x.id == "forest") {var temp = 14; var temp2 = Game.forest_checks_remaining; Game.forest_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_forest_keys = 5 - Game.current_forest_keys; if (Game.forest_boss_key == false) {Logic.forced_forest_boss_key = true;}}
	if (x.id == "fire") {var temp = 15; var temp2 = Game.fire_checks_remaining; Game.fire_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_fire_keys = 8 - Game.current_fire_keys; if (Game.fire_boss_key == false) {Logic.forced_fire_boss_key = true;}}
	if (x.id == "water") {var temp = 11; var temp2 = Game.water_checks_remaining; Game.water_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_water_keys = 6 - Game.current_water_keys; if (Game.water_boss_key == false) {Logic.forced_water_boss_key = true;}}
	if (x.id == "spirit") {var temp = 20; var temp2 = Game.spirit_checks_remaining; Game.spirit_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_spirit_keys = 5 - Game.current_spirit_keys; if (Game.spirit_boss_key == false) {Logic.forced_spirit_boss_key = true;}}
	if (x.id == "shadow") {var temp = 18; var temp2 = Game.shadow_checks_remaining; Game.shadow_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_shadow_keys = 5 - Game.current_shadow_keys; if (Game.shadow_boss_key == false) {Logic.forced_shadow_boss_key = true;}}
	if (x.id == "ganons") {var temp = 16; var temp2 = Game.ganons_checks_remaining; Game.ganons_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_ganons_keys = 2 - Game.current_ganons_keys; if (Game.ganons_boss_key == false) {Logic.ganons_boss_key = true;}}
	if (x.id == "gtg") {var temp = 22; var temp2 = Game.gtg_checks_remaining; Game.gtg_checks_remaining = 0; var parent = document.getElementById("dung3"); Logic.forced_gtg_keys = 5 - Game.current_gtg_keys;}
	if (x.id == "well") {var temp = 14; var temp2 = Game.well_checks_remaining; Game.well_checks_remaining = 0; var parent = document.getElementById("dung3"); Logic.forced_well_keys = 5 - Game.current_well_keys;}
	for (var i = 1; i <= temp; i++){
		var str2 = x.id + i;
		var delete1 = "img1_" + str2;
		var delete2 = "img2_" + str2;
		var delete3 = str2;
		var delete4 = "text_" + str2;
		var delete5 = "br_" + str2;
		var delete6 = "span_" + str2;
		var delete7 = "img3_" + str2;
		var delete8 = "span2_" + str2;
		if (document.getElementById(delete1) !== null) {
			var child = document.getElementById(delete1);
			parent.removeChild(child);
		}
		if (document.getElementById(delete2) !== null) {
			var child = document.getElementById(delete2);
			parent.removeChild(child);
		}
		if (document.getElementById(delete3) !== null) {
			var child = document.getElementById(delete3);
			parent.removeChild(child);
		}
		if (document.getElementById(delete4) !== null) {
			var child = document.getElementById(delete4);
			parent.removeChild(child);
		}
		if (document.getElementById(delete5) !== null) {
			var child = document.getElementById(delete5);
			parent.removeChild(child);
		}
		if (document.getElementById(delete6) !== null) {
			var child = document.getElementById(delete6);
			parent.removeChild(child);
		}
		if (document.getElementById(delete7) !== null) {
			var child = document.getElementById(delete7);
			parent.removeChild(child);
		}
		if (document.getElementById(delete8) !== null) {
			var child = document.getElementById(delete8);
			parent.removeChild(child);
		}
	}
		Game.checks_remaining -= temp2;
	Update();Update();Update();
}

function junkB1(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}

Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB2(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB3(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB4(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn4");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB5(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
var temp = false;
if(str2.startsWith('forest') && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -= 1; temp = true;}
if(str2.startsWith('fire') && Game.fire_checks_remaining != 0) {Game.fire_checks_remaining -= 1; temp = true;}
if(str2.startsWith('water') && Game.water_checks_remaining != 0) {Game.water_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung1");
	Game.checks_remaining -=1;
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}

	Update();Update();Update();
}
function junkB6(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
var temp = false;
if(str2.startsWith('shadow') && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -= 1; temp = true;}
if(str2.startsWith('spirit') && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -= 1; temp = true;}
if(str2.startsWith('ganons') && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB7(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
var temp = false;
if(str2.startsWith('gtg') && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -= 1; temp = true;}
if(str2.startsWith('well') && Game.well_checks_remaining != 0) {Game.well_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkBS(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var change = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("songColumn");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
}
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	Update();Update();Update();
}
function highlight(x) {
	if (x.id == "silverscaleimg") {
		if (Game.scale2 == true) {
			Game.scale1 = false;
			Game.scale2 = false;
			document.getElementById(x.id).src = Game.silver_scale_img;
			x.style.opacity = .2;
		}
		else if (x.style.opacity == 1) {
			Game.scale2 = true;
			document.getElementById(x.id).src = Game.golden_scale_img;
		}
		else {
			Game.scale1 = true;
			x.style.opacity = 1;
		}
	}
	else {
		if (x.style.opacity == 1){x.style.opacity =.2;}
		else {x.style.opacity =1;}
	}
	if (x.id == "for_med") {
		if (x.style.opacity == 1) {Game.forest_medallion = true;} else {Game.forest_medallion = false;}
	}
	else if (document.getElementById(x.id).style.opacity == 1) {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = true; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = true;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = true;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = true;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength3 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = true;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = true;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = true;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = true;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = true;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = true;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = true;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = true;}
	}
	else {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = false; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = false;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = false;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = false;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength3 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = false;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = false;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = false;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = false;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = false;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = false;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = false;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = false;}
	}


	if (x.id == "fir_med" && x.style.opacity==1) {Logic.fire_medallion = true;}
	if (x.id == "wat_med" && x.style.opacity==1) {Logic.water_medallion = true;}
	if (x.id == "spi_med" && x.style.opacity==1) {Logic.spirit_medallion = true;}
	if (x.id == "sha_med" && x.style.opacity==1) {Logic.shadow_medallion = true;}
	if (x.id == "lit_med" && x.style.opacity==1) {Logic.light_medallion = true;}

	if (x.id == "kok_eme" && x.style.opacity==1) {Logic.kokiri_emerald = true;}
	if (x.id == "gor_rub" && x.style.opacity==1) {Logic.goron_ruby = true;}
	if (x.id == "zor_sap" && x.style.opacity==1) {Logic.zora_sapphire = true;}
}
function get_medallions1(x) {
	setTimeout(function(){
		get_medallions2(x)
		}, 10000);
	Update();Update();Update();
}
function get_stones1(x) {
	setTimeout(function(){
		get_stones2(x)
		}, 10000);
	Update();Update();Update();
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changeTheme() {
	if (Game.theme == "dark") {Game.theme = "light"}
	else {Game.theme = "dark"}
	Game.themeChange = true;
	Update();
	}

function whoAmI() {
	if(Person.type == "soli") {
		Person.type = "normie";
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "tagnia") {
		Person.type = "soli";
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "tagnia";
		Game.themeChange = true;
		Update();
	}
}

function identifyMedal(x) {
	if (x.style.color == "yellow") {
		x.style.color = "rgb(238, 130, 238)";
	}
	else if (x.style.color == "rgb(238, 130, 238)") {
		x.style.color = "rgb(255, 165, 0)";
	}
	else if (x.style.color == "rgb(255, 165, 0)") {
		x.style.color = "yellow";
	}
}

function toggleSettings() {
	if(Logic.brackets) {
		Logic.brackets = false;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Brackets";
		Update();
	}
	else {
		Logic.brackets = true;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Weekly";
		Update();
	}
}

function enableChus() {
	if(Game.has_chus == false) {
		Game.has_chus = true;
		document.getElementById("chuButton").innerHTML = "Disable Chus";
	}
	else if(Game.has_chus == true) {
		Game.has_chus = false;
		document.getElementById("chuButton").innerHTML = "Enable Chus";
	}
}


 function download() {
        var a = document.body.appendChild(
            document.createElement("a")
        );
        var textToWrite = textBlock;
        a.download = "route.txt";
        textToWrite = textToWrite.replace(/\n/g, "%0D%0A");
        a.href = "data:text/plain," + textToWrite;
        a.click();
    }

function isUpperCase(str) {
    return str === str.toUpperCase();
}

setInterval(Update,250);
Update();Update();Update();
