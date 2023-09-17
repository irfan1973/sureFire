"use strict";
function proguards_googlemap_init(a,b){if(typeof PROGUARDS_GLOBALS.googlemap_init_obj=="undefined"){proguards_googlemap_init_styles()}PROGUARDS_GLOBALS.googlemap_init_obj.geocoder="";try{var d=a.id;PROGUARDS_GLOBALS.googlemap_init_obj[d]={dom:a,markers:b.markers,geocoder_request:false,opt:{zoom:b.zoom,center:null,scrollwheel:false,scaleControl:false,disableDefaultUI:false,panControl:true,zoomControl:true,mapTypeControl:false,streetViewControl:false,overviewMapControl:false,styles:PROGUARDS_GLOBALS.googlemap_styles[b.style?b.style:"default"],mapTypeId:google.maps.MapTypeId.ROADMAP}};proguards_googlemap_create(d)}catch(c){dcl(PROGUARDS_GLOBALS.strings["googlemap_not_avail"])}}function proguards_googlemap_create(b){PROGUARDS_GLOBALS.googlemap_init_obj[b].map=new google.maps.Map(PROGUARDS_GLOBALS.googlemap_init_obj[b].dom,PROGUARDS_GLOBALS.googlemap_init_obj[b].opt);for(var a in PROGUARDS_GLOBALS.googlemap_init_obj[b].markers){PROGUARDS_GLOBALS.googlemap_init_obj[b].markers[a].inited=false}proguards_googlemap_add_markers(b);jQuery(window).resize(function(){if(PROGUARDS_GLOBALS.googlemap_init_obj[b].map){PROGUARDS_GLOBALS.googlemap_init_obj[b].map.setCenter(PROGUARDS_GLOBALS.googlemap_init_obj[b].opt.center)}})}function proguards_googlemap_add_markers(d){for(var b in PROGUARDS_GLOBALS.googlemap_init_obj[d].markers){if(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].inited){continue}if(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].latlng==""){if(PROGUARDS_GLOBALS.googlemap_init_obj[d].geocoder_request!==false){continue}if(PROGUARDS_GLOBALS.googlemap_init_obj.geocoder==""){PROGUARDS_GLOBALS.googlemap_init_obj.geocoder=new google.maps.Geocoder()}PROGUARDS_GLOBALS.googlemap_init_obj[d].geocoder_request=b;PROGUARDS_GLOBALS.googlemap_init_obj.geocoder.geocode({address:PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].address},function(g,f){if(f==google.maps.GeocoderStatus.OK){var e=PROGUARDS_GLOBALS.googlemap_init_obj[d].geocoder_request;if(g[0].geometry.location.lat&&g[0].geometry.location.lng){PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[e].latlng=""+g[0].geometry.location.lat()+","+g[0].geometry.location.lng()}else{PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[e].latlng=g[0].geometry.location.toString().replace(/\(\)/g,"")}PROGUARDS_GLOBALS.googlemap_init_obj[d].geocoder_request=false;proguards_googlemap_add_markers(d)}else{dcl(PROGUARDS_GLOBALS.strings["geocode_error"]+" "+f)}})}else{var c=PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].latlng.split(",");var a={map:PROGUARDS_GLOBALS.googlemap_init_obj[d].map,position:new google.maps.LatLng(c[0],c[1]),clickable:PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].description!=""};if(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].point){a.icon=PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].point}if(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].title){a.title=PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].title}PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].marker=new google.maps.Marker(a);if(PROGUARDS_GLOBALS.googlemap_init_obj[d].opt.center==null){PROGUARDS_GLOBALS.googlemap_init_obj[d].opt.center=a.position;PROGUARDS_GLOBALS.googlemap_init_obj[d].map.setCenter(PROGUARDS_GLOBALS.googlemap_init_obj[d].opt.center)}if(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].description!=""){PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].infowindow=new google.maps.InfoWindow({content:PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].description});google.maps.event.addListener(PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].marker,"click",function(g){var h=g.latLng.toString().replace("(","").replace(")","").replace(" ","");for(var f in PROGUARDS_GLOBALS.googlemap_init_obj[d].markers){if(h==PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[f].latlng){PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[f].infowindow.open(PROGUARDS_GLOBALS.googlemap_init_obj[d].map,PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[f].marker);break}}})}PROGUARDS_GLOBALS.googlemap_init_obj[d].markers[b].inited=true}}}function proguards_googlemap_refresh(){for(id in PROGUARDS_GLOBALS.googlemap_init_obj){proguards_googlemap_create(id)}}function proguards_googlemap_init_styles(){PROGUARDS_GLOBALS.googlemap_init_obj={};PROGUARDS_GLOBALS.googlemap_styles={"default":[],invert:[{stylers:[{invert_lightness:true},{visibility:"on"}]}],dark:[{featureType:"landscape",stylers:[{invert_lightness:true},{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],simple:[{stylers:[{hue:"#00ffe6"},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}],greyscale:[{stylers:[{saturation:-100}]}],greyscale2:[{featureType:"landscape",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:20.4705882352941},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:25.59999999999998},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:-22},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:21.411764705882348},{gamma:1}]},{featureType:"water",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:21.411764705882348},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:4.941176470588232},{gamma:1}]}],style1:[{featureType:"landscape",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:20.4705882352941},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:25.59999999999998},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:-22},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:21.411764705882348},{gamma:1}]},{featureType:"water",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:21.411764705882348},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:4.941176470588232},{gamma:1}]}],style2:[{featureType:"landscape",stylers:[{hue:"#007FFF"},{saturation:100},{lightness:156},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FF7000"},{saturation:-83.6},{lightness:48.80000000000001},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF7000"},{saturation:-81.08108108108107},{lightness:-6.8392156862745},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF9A00"},{saturation:7.692307692307736},{lightness:21.411764705882348},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0093FF"},{saturation:16.39999999999999},{lightness:-6.400000000000006},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF60"},{saturation:17},{lightness:44.599999999999994},{gamma:1}]}],style3:[{featureType:"landscape",stylers:[{hue:"#FFA800"},{saturation:17.799999999999997},{lightness:152.20000000000002},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#007FFF"},{saturation:-77.41935483870967},{lightness:47.19999999999999},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FBFF00"},{saturation:-78},{lightness:39.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#00FFFD"},{saturation:0},{lightness:0},{gamma:1}]},{featureType:"water",stylers:[{hue:"#007FFF"},{saturation:-77.41935483870967},{lightness:-14.599999999999994},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#007FFF"},{saturation:-77.41935483870967},{lightness:42.79999999999998},{gamma:1}]}]}};