// Copyright 2021 Eric Lawrey - Australian Institute of Marine Science
//
// MIT License https://mit-license.org/
// This script is written to run on the Google Earth Engine 
var utils = require('users/ericlawrey/CS_AIMS_Sentinel2-marine_V1:utils');

// These are the options for the primary reference imagery.
// The primary reference imagery should correspond to a composite
// made from the best set of images available, with the goal being
// to get the cleanest image.

var REF1_OPTIONS = {
  colourGrades: ['DeepFalse','TrueColour'],
  exportBasename: 'CS_AIMS_Sentinel2-marine_V1_R1',
  exportFolder: 'EarthEngine/CS_AIMS_Sentinel2-marine_V1',
  scale: 10
};

// These options correspond to the secondary reference imagery.
// This will be made from the next best set of images. The goal
// is to provide a second set of imagery to determine if spots
// in the imagery are artefacts (from clouds) or real features.
var REF2_OPTIONS = {
  colourGrades: ['DeepFalse'],
  exportBasename: 'CS_AIMS_Sentinel2-marine_V1_R2',
  exportFolder: 'EarthEngine/CS_AIMS_Sentinel2-marine_V1',
  scale: 10
};

// ===============================================================
//
//                    Western Australia
//
// ===============================================================
// North West Shelf, Australia. Baracouta East Shoal
// CLOUDY_PIXEL_PERCENTAGE = 0.1
// 40 of 76 Images

utils.s2_composite_display_and_export(
  [
    // Excellent - no clouds
		// The following are ratings of the visibility of two shoals at the maximum depth of visibility
		// Each image was rated out of 5, where 0 indicates that the shoal is not visible.
		// Images where the visibility was rated 0 were excluded from the reference 1 image
		// Shoal 1 - Just east of Baracouta East (bottom left of tile)
		// Shoal 2 - North West of tile
                                                            // Shoal 1, Shoal 2
		"COPERNICUS/S2/20160824T015622_20160824T065137_T51LXG", // 1, 1
		"COPERNICUS/S2/20170819T015701_20170819T020019_T51LXG", // 1, 1.5
		"COPERNICUS/S2/20170903T015649_20170903T020007_T51LXG", // 2, 0.5
		"COPERNICUS/S2/20180610T015619_20180610T015817_T51LXG", // 0.5, 0.5
		"COPERNICUS/S2/20180725T015621_20180725T015621_T51LXG", // 1, 0.5 
		"COPERNICUS/S2/20190426T015629_20190426T015717_T51LXG", // 1, 1
		"COPERNICUS/S2/20190824T015029_20190824T015926_T51LXG"  // 0.5, 1.5
  ],
  false, false, REF1_OPTIONS);

// Excellent - no clouds, but lower water clarity
utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190506T015629_20190506T015719_T51LXG", // 0.5, 0.5 // some clouds
		"COPERNICUS/S2/20170511T015701_20170511T015839_T51LXG", // 0, 1
		"COPERNICUS/S2/20180511T015619_20180511T015619_T51LXG", // 0, 0
		"COPERNICUS/S2/20190705T015629_20190705T015719_T51LXG", // 0, 0
		"COPERNICUS/S2/20190804T015629_20190804T015718_T51LXG", // 0, 0
		"COPERNICUS/S2/20190829T015021_20190829T015658_T51LXG", // 0, 1
		"COPERNICUS/S2/20181013T015621_20181013T015617_T51LXG",	// 0.5, 1
		"COPERNICUS/S2/20190625T015629_20190625T015719_T51LXG",	// 0, 0.5
		"COPERNICUS/S2/20190809T015631_20190809T015625_T51LXG"	// 0, 0.5	// low waves
  ],
  false, false, REF2_OPTIONS);
  
// tileID = '51LXF';   // North West Shelf, Australia. Vulcan, Goeree Shoals
// CLOUDY_PIXEL_PERCENTAGE = 0.1
// 49 of 98 images

utils.s2_composite_display_and_export(
  [
    // Excellent - no clouds
		"COPERNICUS/S2/20160824T015622_20160824T015622_T51LXF",
		"COPERNICUS/S2/20160913T015622_20160913T015617_T51LXF",
		"COPERNICUS/S2/20170730T015701_20170730T015834_T51LXF",
		"COPERNICUS/S2/20170903T015649_20170903T020007_T51LXF", // Some turbulence
		"COPERNICUS/S2/20180725T015621_20180725T015621_T51LXF",
		"COPERNICUS/S2/20180809T015619_20180809T020050_T51LXF",
		"COPERNICUS/S2/20180908T015609_20180908T020045_T51LXF",
		"COPERNICUS/S2/20180918T015609_20180918T020006_T51LXF",
		"COPERNICUS/S2/20181008T015619_20181008T020050_T51LXF"  // 0.5, 1.5
  ],
  false, false, REF1_OPTIONS);

// Excellent - no clouds, but lower water clarity
utils.s2_composite_display_and_export(
  [
    // Excellent - no clouds, lower water clarity
		"COPERNICUS/S2/20160804T015622_20160804T015624_T51LXF",
		"COPERNICUS/S2/20170923T015639_20170923T015924_T51LXF",
		"COPERNICUS/S2/20180625T015621_20180625T015621_T51LXF",
		"COPERNICUS/S2/20180710T015619_20180710T020050_T51LXF",
		"COPERNICUS/S2/20180715T015621_20180715T015622_T51LXF",
		"COPERNICUS/S2/20180720T015619_20180720T015658_T51LXF",
		"COPERNICUS/S2/20180819T015619_20180819T015654_T51LXF",
		"COPERNICUS/S2/20180903T015621_20180903T015618_T51LXF",
		"COPERNICUS/S2/20190416T015629_20190416T015818_T51LXF",
		"COPERNICUS/S2/20190625T015629_20190625T015719_T51LXF",
		"COPERNICUS/S2/20190705T015629_20190705T015719_T51LXF",
		"COPERNICUS/S2/20190804T015629_20190804T015718_T51LXF",
		"COPERNICUS/S2/20190809T015631_20190809T015625_T51LXF",
		"COPERNICUS/S2/20190814T015029_20190814T015840_T51LXF",
		"COPERNICUS/S2/20190824T015029_20190824T015926_T51LXF",
		"COPERNICUS/S2/20190829T015021_20190829T015658_T51LXF"
  ],
  false, false, REF2_OPTIONS);

// North West Shelf, Australia. Ashmore reef
// CLOUDY_PIXEL_PERCENTAGE = 0.1
// 50 of 82 images

utils.s2_composite_display_and_export(
  [
    // Excellent
		"COPERNICUS/S2/20170703T020751_20170703T020751_T51LWG",
		"COPERNICUS/S2/20170807T020749_20170807T020833_T51LWG",
		"COPERNICUS/S2/20170827T020749_20170827T020747_T51LWG",
		"COPERNICUS/S2/20180509T020451_20180509T020447_T51LWG",
		"COPERNICUS/S2/20180906T020441_20180906T021028_T51LWG",
		"COPERNICUS/S2/20190708T020459_20190708T020508_T51LWG",
		"COPERNICUS/S2/20190807T020029_20190807T020716_T51LWG",
		"COPERNICUS/S2/20190901T020021_20190901T020607_T51LWG"
  ],
  false, false, REF1_OPTIONS);

// Excellent - no clouds, but lower water clarity
utils.s2_composite_display_and_export(
  [
    // Excellent, but with lower water quality          
		"COPERNICUS/S2/20180703T020449_20180703T020824_T51LWG",
		"COPERNICUS/S2/20180723T020439_20180723T020822_T51LWG",
		"COPERNICUS/S2/20180807T020451_20180807T020445_T51LWG",
		"COPERNICUS/S2/20190524T020451_20190524T020926_T51LWG",
		"COPERNICUS/S2/20190628T020459_20190628T021054_T51LWG",
		"COPERNICUS/S2/20190703T020451_20190703T021036_T51LWG",
		// Good                                             
		"COPERNICUS/S2/20180419T020451_20180419T021043_T51LWG",
		"COPERNICUS/S2/20180524T020439_20180524T020757_T51LWG",
		"COPERNICUS/S2/20180603T020439_20180603T021010_T51LWG",
		"COPERNICUS/S2/20180613T020449_20180613T020758_T51LWG",
		"COPERNICUS/S2/20180424T020449_20180424T020537_T51LWG",
		"COPERNICUS/S2/20180911T020439_20180911T020950_T51LWG",
		"COPERNICUS/S2/20190713T020451_20190713T021051_T51LWG",
		"COPERNICUS/S2/20190817T020029_20190817T020754_T51LWG",
		"COPERNICUS/S2/20160429T020809_20160429T033343_T51LWG"
  ],
  false, false, REF2_OPTIONS);

// ==============================================================
//                      GREAT BARRIER REEF
// ==============================================================

// Australia, GBR, Green Island, Arlington, Hopley comparison
// For comparision with Hopley D, et. al., (2007), 
// The Geomorphology of the Great Barrier Reef
// CLOUDY_PIXEL_PERCENTAGE = 0.1
// 17 of 17 images
                      
utils.s2_composite_display_and_export(
  [
    // Excellent
		"COPERNICUS/S2/20161115T002712_20161115T002822_T55KCB", // Right
		"COPERNICUS/S2/20190914T003701_20190914T003703_T55KCB", // Left
		"COPERNICUS/S2/20200730T003711_20200730T003710_T55KCB", // Left

		// Good with good water clarity                      
		"COPERNICUS/S2/20180827T002711_20180827T002706_T55KCB", // Right
		"COPERNICUS/S2/20200715T003709_20200715T003706_T55KCB" // Left
  ],
  true, false, REF1_OPTIONS);
//Excellent but lower water clarity
//COPERNICUS/S2/20170718T003029_20170718T003032_T55KCB // Right
//COPERNICUS/S2/20200819T003711_20200819T003710_T55KCB // Left

//Good but lower water clarity
//COPERNICUS/S2/20180514T002709_20180514T002706_T55KCB // Right
//COPERNICUS/S2/20191110T002711_20191110T002710_T55KCB // Right
//COPERNICUS/S2/20200526T003709_20200526T003705_T55KCB // Left

