var hotelData = [{"case_number":1,"Hotel":"Shangri-La’s Rasa Sentosa Resort & Spa","hotel_X":103.80973,"hotel_Y":1.25811},{"case_number":2,"Hotel":"Townshend Road(J8 Hotel)","hotel_X":103.85839,"hotel_Y":1.30773},{"case_number":3,"Hotel":"Shangri-La’s Rasa Sentosa Resort & Spa","hotel_X":103.81342354192385,"hotel_Y":1.2660195288997016},{"case_number":4,"Hotel":"Village Hotel Sentosa","hotel_X":103.82018,"hotel_Y":1.25289,"undefined":""},{"case_number":5,"Hotel":"Ceylon Road","hotel_X":103.90065,"hotel_Y":1.308567,"undefined":""},{"case_number":6,"Hotel":"Pasir Ris Grove","hotel_X":103.944803,"hotel_Y":1.371996},{"case_number":7,"Hotel":"Marina Bay Sands","hotel_X":103.85971,"hotel_Y":1.28325},{"case_number":8,"Hotel":"Lorong Lew Lian","hotel_X":103.87584,"hotel_Y":1.34993},{"case_number":9,"Hotel":"Lorong Lew Lian","hotel_X":103.8832405069282,"hotel_Y":1.3541689370293748},{"case_number":10,"Hotel":"","hotel_X":null,"hotel_Y":null},{"case_number":11,"Hotel":"Village Hotel Sentosa","hotel_X":103.82678480078722,"hotel_Y":1.260165839447173},{"case_number":12,"Hotel":"Village Hotel Sentosa","hotel_X":103.82940820210183,"hotel_Y":1.2591945525136599},{"case_number":12,"Hotel":"HOTEL 81 Princess","hotel_X":103.87843,"hotel_Y":1.31098},{"case_number":12,"Hotel":"Home Suite View Hotel","hotel_X":103.8783,"hotel_Y":1.31144},{"case_number":13,"Hotel":"ParkRoyal Collection Pickering","hotel_X":103.89346,"hotel_Y":1.31437},{"case_number":13,"Hotel":"Oasia Hotel Downtown","hotel_X":103.84454,"hotel_Y":1.2758},{"case_number":14,"Hotel":"","hotel_X":null,"hotel_Y":null},{"case_number":16,"Hotel":"","hotel_X":null,"hotel_Y":null},{"case_number":18,"Hotel":"Home Suite View Hotel","hotel_X":103.87854794743077,"hotel_Y":1.319541354324737},{"case_number":26,"Hotel":"ParkRoyal Collection Pickering","hotel_X":103.89981626723768,"hotel_Y":1.3222047726413022},{"case_number":26,"Hotel":"Oasia Hotel Downtown","hotel_X":103.85323959557712,"hotel_Y":1.2777653333930972}]

var dbscanData = [
    {"FID":0,"SOURCE_ID":0,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":24},
    {"FID":1,"SOURCE_ID":1,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":25},
    {"FID":2,"SOURCE_ID":2,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":20},
    {"FID":3,"SOURCE_ID":3,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":28},
    {"FID":4,"SOURCE_ID":4,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":27},
    {"FID":5,"SOURCE_ID":5,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":21},
    {"FID":6,"SOURCE_ID":6,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":31},
    {"FID":7,"SOURCE_ID":7,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":30},
    {"FID":8,"SOURCE_ID":8,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":35},
    {"FID":9,"SOURCE_ID":9,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":34},
    {"FID":10,"SOURCE_ID":10,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":36},
    {"FID":11,"SOURCE_ID":11,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":37},
    {"FID":12,"SOURCE_ID":12,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":38},
    {"FID":13,"SOURCE_ID":13,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":39},
    {"FID":14,"SOURCE_ID":14,"CLUSTER_ID":5,"COLOR_ID":1,"user_cases":40},
    {"FID":15,"SOURCE_ID":15,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":32},
    {"FID":16,"SOURCE_ID":16,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":41},
    {"FID":17,"SOURCE_ID":17,"CLUSTER_ID":6,"COLOR_ID":6,"user_cases":44},
    {"FID":18,"SOURCE_ID":18,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":43},
    {"FID":19,"SOURCE_ID":19,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":46},
    {"FID":20,"SOURCE_ID":20,"CLUSTER_ID":5,"COLOR_ID":1,"user_cases":42},
    {"FID":21,"SOURCE_ID":21,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":48},
    {"FID":22,"SOURCE_ID":22,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":50},
    {"FID":23,"SOURCE_ID":23,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":47},
    {"FID":24,"SOURCE_ID":24,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":52},
    {"FID":25,"SOURCE_ID":25,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":51},
    {"FID":26,"SOURCE_ID":26,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":49},
    {"FID":27,"SOURCE_ID":27,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":55},
    {"FID":28,"SOURCE_ID":28,"CLUSTER_ID":7,"COLOR_ID":7,"user_cases":54},
    {"FID":29,"SOURCE_ID":29,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":19},
    {"FID":30,"SOURCE_ID":30,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":58},
    {"FID":31,"SOURCE_ID":31,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":53},
    {"FID":32,"SOURCE_ID":32,"CLUSTER_ID":8,"COLOR_ID":8,"user_cases":57},
    {"FID":33,"SOURCE_ID":33,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":59},
    {"FID":34,"SOURCE_ID":34,"CLUSTER_ID":7,"COLOR_ID":7,"user_cases":60},
    {"FID":35,"SOURCE_ID":35,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":62},
    {"FID":36,"SOURCE_ID":36,"CLUSTER_ID":9,"COLOR_ID":1,"user_cases":61},
    {"FID":37,"SOURCE_ID":37,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":63},
    {"FID":38,"SOURCE_ID":38,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":65},
    {"FID":39,"SOURCE_ID":39,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":66},
    {"FID":40,"SOURCE_ID":40,"CLUSTER_ID":9,"COLOR_ID":1,"user_cases":67},
    {"FID":41,"SOURCE_ID":41,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":70},
    {"FID":42,"SOURCE_ID":42,"CLUSTER_ID":9,"COLOR_ID":1,"user_cases":64},
    {"FID":43,"SOURCE_ID":43,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":68},
    {"FID":44,"SOURCE_ID":44,"CLUSTER_ID":6,"COLOR_ID":6,"user_cases":72},
    {"FID":45,"SOURCE_ID":45,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":71},
    {"FID":46,"SOURCE_ID":46,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":74},
    {"FID":47,"SOURCE_ID":47,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":73},
    {"FID":48,"SOURCE_ID":48,"CLUSTER_ID":"-1","COLOR_ID":"-1","user_cases":78},
    {"FID":49,"SOURCE_ID":49,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":75},
    {"FID":50,"SOURCE_ID":50,"CLUSTER_ID":6,"COLOR_ID":6,"user_cases":79},
    {"FID":51,"SOURCE_ID":51,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":80},
    {"FID":52,"SOURCE_ID":52,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":77},
    {"FID":53,"SOURCE_ID":53,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":82},
    {"FID":54,"SOURCE_ID":54,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":84},
    {"FID":55,"SOURCE_ID":55,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":83},
    {"FID":56,"SOURCE_ID":56,"CLUSTER_ID":6,"COLOR_ID":6,"user_cases":85},
    {"FID":57,"SOURCE_ID":57,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":86},
    {"FID":58,"SOURCE_ID":58,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":89},
    {"FID":59,"SOURCE_ID":59,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":88},
    {"FID":60,"SOURCE_ID":60,"CLUSTER_ID":1,"COLOR_ID":2,"user_cases":91},
    {"FID":61,"SOURCE_ID":61,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":92},
    {"FID":62,"SOURCE_ID":62,"CLUSTER_ID":3,"COLOR_ID":4,"user_cases":90},
    {"FID":63,"SOURCE_ID":63,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":93},
    {"FID":64,"SOURCE_ID":64,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":81},
    {"FID":65,"SOURCE_ID":65,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":94},
    {"FID":66,"SOURCE_ID":66,"CLUSTER_ID":8,"COLOR_ID":8,"user_cases":95},
    {"FID":67,"SOURCE_ID":67,"CLUSTER_ID":8,"COLOR_ID":8,"user_cases":97},
    {"FID":68,"SOURCE_ID":68,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":96},
    {"FID":69,"SOURCE_ID":69,"CLUSTER_ID":9,"COLOR_ID":1,"user_cases":98},
    {"FID":70,"SOURCE_ID":70,"CLUSTER_ID":2,"COLOR_ID":3,"user_cases":100},
    {"FID":71,"SOURCE_ID":71,"CLUSTER_ID":9,"COLOR_ID":1,"user_cases":99},
    {"FID":72,"SOURCE_ID":72,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":101},
    {"FID":73,"SOURCE_ID":73,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":102},
    {"FID":74,"SOURCE_ID":74,"CLUSTER_ID":4,"COLOR_ID":5,"user_cases":14},
];

var links = [
    {"Child": 19, "Parent": 0},
    {"Child": 20, "Parent": 19},
    {"Child": 21, "Parent": 19},
    {"Child": 24, "Parent": 19},
    {"Child": 25, "Parent": 24},
    {"Child": 27, "Parent": 19},
    {"Child": 28, "Parent": 19},
    {"Child": 29, "Parent": 0},
    {"Child": 30, "Parent": 0},
    {"Child": 31, "Parent": 0},
    {"Child": 32, "Parent": 0},
    {"Child": 33, "Parent": 0},
    {"Child": 34, "Parent": 19},
    {"Child": 35, "Parent": 0},
    {"Child": 36, "Parent": 30},
    {"Child": 37, "Parent": 0},
    {"Child": 38, "Parent": 0},
    {"Child": 39, "Parent": 30},
    {"Child": 40, "Parent": 19},
    {"Child": 41, "Parent": 0},
    {"Child": 42, "Parent": 0},
    {"Child": 43, "Parent": 0},
    {"Child": 44, "Parent": 0},
    {"Child": 46, "Parent": 0},
    {"Child": 47, "Parent": 42},
    {"Child": 48, "Parent": 0},
    {"Child": 49, "Parent": 0},
    {"Child": 50, "Parent": 0},
    {"Child": 51, "Parent": 0},
    {"Child": 52, "Parent": 42},
    {"Child": 53, "Parent": 0},
    {"Child": 54, "Parent": 0},
    {"Child": 55, "Parent": 50},
    {"Child": 56, "Parent": 47},
    {"Child": 57, "Parent": 0},
    {"Child": 58, "Parent": 0},
    {"Child": 59, "Parent": 0},
    {"Child": 60, "Parent": 0},
    {"Child": 61, "Parent": 0},
    {"Child": 62, "Parent": 0},
    {"Child": 63, "Parent": 0},
    {"Child": 64, "Parent": 0},
    {"Child": 65, "Parent": 50},
    {"Child": 66, "Parent": 0},
    {"Child": 67, "Parent": 61},
    {"Child": 68, "Parent": 66},
    {"Child": 69, "Parent": 42},
    {"Child": 70, "Parent": 66},
    {"Child": 71, "Parent": 66},
    {"Child": 72, "Parent": 59},
    {"Child": 73, "Parent": 51},
    {"Child": 74, "Parent": 0},
    {"Child": 75, "Parent": 41},
    {"Child": 77, "Parent": 50},
    {"Child": 78, "Parent": 0},
    {"Child": 79, "Parent": 0},
    {"Child": 80, "Parent": 66},
    {"Child": 81, "Parent": 0},
    {"Child": 82, "Parent": 0},
    {"Child": 83, "Parent": 0},
    {"Child": 84, "Parent": 66},
    {"Child": 85, "Parent": 0},
    {"Child": 86, "Parent": 82},
    {"Child": 88, "Parent": 66},
    {"Child": 89, "Parent": 0},
    {"Child": 90, "Parent": 0},
    {"Child": 91, "Parent": 83},
    {"Child": 92, "Parent": 0},
    {"Child": 93, "Parent": 0},
    {"Child": 94, "Parent": 0},
    {"Child": 95, "Parent": 93},
    {"Child": 96, "Parent": 94},
    {"Child": 97, "Parent": 93},
    {"Child": 98, "Parent": 93},
    {"Child": 99, "Parent": 93},
    {"Child": 100, "Parent": 93},
    {"Child": 101, "Parent": 93},
    {"Child": 102, "Parent": 101},
]

var home = [{"case_number":"19","nationality":"Singapore resident","age":"20-29","gender":"female","date":"2020-02-04","home_address":"Jalan Bukit Merah ","home_X":103.81786,"home_Y":1.2828,"working_address":"Yong Thai Hang at 24 Cavan Road","Type":"Domestic","Link":"19;20;21;24;27;28;34;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":103.861567,"work_Y":1.31095,"":""},{"case_number":"20","nationality":"Singapore resident","age":"40-49","gender":"female","date":"2020-02-04","home_address":"Hougang Street 61","home_X":103.8862692,"home_Y":1.374724615,"working_address":"Yong Thai Hang at 25 Cavan Road","Type":"Domestic","Link":"19;20;24;34;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":103.86155,"work_Y":1.311033,"":""},{"case_number":"21","nationality":"Indonesian","age":"40-49","gender":"female","date":"2020-02-04","home_address":"Jalan Bukit Merah","home_X":103.826898087397,"home_Y":1.2871731365503898,"working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":null,"work_Y":null,"":""},{"case_number":"24","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-04","home_address":"Buangkok Green","home_X":103.88474,"home_Y":1.38165,"working_address":"","Type":"Domestic","Link":"19;20;24","Hotel":"","Tag":"discharged","Visited":"Jalan Besar","Cluster":"Yong Thai Hang","work_X":null,"work_Y":null,"":""},{"case_number":"25","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-05","home_address":"Buangkok Green","home_X":103.89412141044566,"home_Y":1.3855473831949334,"working_address":"Diamond Industries Jewellery Company at Harbour Drive","Type":"Domestic","Link":"24;25","Hotel":"","Tag":"discharged","Visited":"Pasir Panjang Hawker Centre","Cluster":"Yong Thai Hang","work_X":103.7794083,"work_Y":1.28303056,"":""},{"case_number":"27","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-05","home_address":"Jalan Bukit Merah ","home_X":103.81874036003242,"home_Y":1.2857605022003975,"working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"Tiong Bahru Plaza;Beo Crescent","Cluster":"Yong Thai Hang","work_X":null,"work_Y":null,"":""},{"case_number":"28","nationality":"Singapore Citizen","age":"<=12","gender":"male","date":"2020-02-05","home_address":"Jalan Bukit Merah ","home_X":103.8264304940844,"home_Y":1.283260278519428,"working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":null,"work_Y":null,"":""},{"case_number":"30","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-06","home_address":"Shunfu Road","home_X":103.8374,"home_Y":1.351975,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Far East Square;Junction 8","Cluster":"Grand Hyatt ","work_X":null,"work_Y":null,"":""},{"case_number":"31","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-07","home_address":"Tampines Street 24","home_X":103.9517615,"home_Y":1.35540703,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Church;Malaysia","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"32","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-07","home_address":"Elias Road","home_X":103.9419669,"home_Y":1.37974843,"working_address":"Victoria Junior College","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Singapore Zoo;Singapore Changi Airport","Cluster":"","work_X":103.91999,"work_Y":1.30667,"":""},{"case_number":"34","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-09","home_address":"Sin Ming Road","home_X":103.8373123,"home_Y":1.355451703,"working_address":"Yong Thai Hang at Cavan Road","Type":"Domestic","Link":"19;20;34","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":103.86804,"work_Y":1.26606,"":""},{"case_number":"35","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-09","home_address":"Henderson Crescent","home_X":103.8205,"home_Y":1.286520062,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Redhill Market, Bukit Merah","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"36","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-09","home_address":"Bukit Batok 31","home_X":103.7515694,"home_Y":1.35892,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"37","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Jurong East 32","home_X":103.735817,"home_Y":1.3469583,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"38","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-09","home_address":"Choa Chu Kang 3","home_X":103.875625,"home_Y":1.346936,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Plaza Singapura;Marina Bay Sands;Chinatown:Church","Cluster":"Church","work_X":null,"work_Y":null,"":""},{"case_number":"39","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Jurong West","home_X":103.7435528,"home_Y":1.3329416,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Malaysia","Cluster":"Grand Hyatt","work_X":null,"work_Y":null,"":""},{"case_number":"40","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-09","home_address":"Bedok North","home_X":103.91865,"home_Y":1.33445,"working_address":"","Type":"Domestic","Link":"19;20;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":null,"work_Y":null,"":""},{"case_number":"41","nationality":"Singapore Citizen","age":">=70","gender":"male","date":"2020-02-09","home_address":"Serangoon Road","home_X":103.85215,"home_Y":1.31807,"working_address":"","Type":"Domestic","Link":"41;75","Hotel":"","Tag":"discharged","Visited":"Paya Lebar Methodist Church;Braddell Heights Residents�� Committee;Pat��s Schoolhouse Kovan","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"42","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-09","home_address":"25 Kaki Bukit Road","home_X":103.90917,"home_Y":1.3375,"working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"Mustafa Centre","Cluster":"","work_X":103.865336,"work_Y":1.406104,"":""},{"case_number":"43","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Fernvale Close","home_X":103.8801518,"home_Y":1.394428276,"working_address":"Resorts World Sentosa","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Malaysia","Cluster":"","work_X":103.82051,"work_Y":1.25619,"":""},{"case_number":"44","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-10","home_address":"Sembawan","home_X":103.81891,"home_Y":1.44794,"working_address":"20 Jalan Afifi","Type":"Domestic","Link":"2;13;26;44","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Jalan Afifi","work_X":103.892081,"work_Y":1.321812,"":""},{"case_number":"46","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-11","home_address":"Johor Bahru","home_X":103.75711,"home_Y":1.46478,"working_address":"8 Sentosa Gateway","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.82733,"work_Y":1.24901,"":""},{"case_number":"47","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-11","home_address":"Veerasamy Road","home_X":103.8544409,"home_Y":1.307380547,"working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.87088106377361,"work_Y":1.4086613202270954,"":""},{"case_number":"48","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-12","home_address":"Bukit Batok Street 25","home_X":103.7609726,"home_Y":1.342438679,"working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"68 Orchard Road;1 Vista Exchange Green;1 Fusionopolis Place;Malaysia","Cluster":"Grace Assembly of God","work_X":103.75277,"work_Y":1.34952,"":""},{"case_number":"49","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-12","home_address":"Toh Guan Road","home_X":103.7477642,"home_Y":1.336660786,"working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.76055994446591,"work_Y":1.3545486829780125,"":""},{"case_number":"50","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-12","home_address":"Mei Hwan Drive","home_X":103.8616545,"home_Y":1.353843241,"working_address":"12 Marina Boulevard","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.85238,"work_Y":1.28261,"":""},{"case_number":"51","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-13","home_address":"Bishan Street 13","home_X":103.8534228,"home_Y":1.350315478,"working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"51;73","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.75482166035947,"work_Y":1.3533286901127601,"":""},{"case_number":"52","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-13","home_address":"Campbell Lane","home_X":103.8522116,"home_Y":1.305538267,"working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Seletar Aerospace Heights construction site","work_X":103.86991277736963,"work_Y":1.4074220937854616,"":""},{"case_number":"53","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-13","home_address":"Hillview Avenue","home_X":103.7648341,"home_Y":1.36239959,"working_address":"National University of Singapore","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.7777499,"work_Y":1.297179989,"":""},{"case_number":"54","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-13","home_address":"Ang Mo Kio 5","home_X":103.84546,"home_Y":1.37161,"working_address":"355 Tanglin Road","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.81667,"work_Y":1.31667,"":""},{"case_number":"55","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-13","home_address":"Mei Hwan Drive","home_X":103.87001163031408,"home_Y":1.362658306918374,"working_address":"DBS Asia Central","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"Pulau Bukom;Church of Christ the King","Cluster":"","work_X":103.84621,"work_Y":1.28886,"":""},{"case_number":"57","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-13","home_address":"Senja Road","home_X":103.7588621,"home_Y":1.386744973,"working_address":"Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.746972,"work_Y":1.362712453,"":""},{"case_number":"58","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-13","home_address":"Jalan Kelicha","home_X":103.8681472,"home_Y":1.34687,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"59","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-14","home_address":"Wilkinson Road","home_X":103.89085,"home_Y":1.3026361,"working_address":"Anesthetist","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"60","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-14","home_address":"Ang Mo Kio Avenue 3","home_X":103.84835,"home_Y":1.38356,"working_address":"355 Tanglin Road","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.81670141340166,"work_Y":1.3204552240064815,"":""},{"case_number":"61","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 64","home_X":103.7037745,"home_Y":1.34210094,"working_address":"56 Senang Crescen","Type":"Domestic","Link":"61;67","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":1.3282333,"work_Y":103.9169833,"":""},{"case_number":"62","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-14","home_address":"Tanjong Pagar Road","home_X":103.84539,"home_Y":1.27889,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"63","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-14","home_address":"Potong Pasir Avenue 3","home_X":103.865247,"home_Y":1.332908182,"working_address":"Public Utilities Board","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"103 Beach Road","Cluster":"Grace Assembly of God","work_X":103.73433,"work_Y":1.43891,"":""},{"case_number":"64","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 81","home_X":103.6934296,"home_Y":1.347166299,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"65","nationality":"Singapore Citizen","age":"60-69","gender":"female","date":"2020-02-14","home_address":"Mei Hwan Drive","home_X":103.86828808046461,"home_Y":1.3574266806806596,"working_address":"","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"2221 Ang Mo Kio Avenue 8","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"66","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Mei Hwan Drive","home_X":103.86709992011359,"home_Y":1.360967982555884,"working_address":"Grace Assembly of God","Type":"Domestic","Link":"66;68;70;71;80;84;88;151","Hotel":"","Tag":"discharged","Visited":"37 Jalan Pemimpin","Cluster":"Grace Assembly of God","work_X":103.74712,"work_Y":1.36466,"":""},{"case_number":"67","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 64","home_X":103.70446430356989,"home_Y":1.349393756776287,"working_address":"","Type":"Domestic","Link":"61;67","Hotel":"","Tag":"discharged","Visited":"1 Bukit Batok West Avenue 4;Ng Teng Fong General Hospital;NUH","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"68","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-15","home_address":"Mei Hwan Drive","home_X":103.8693894512889,"home_Y":1.3567987363756622,"working_address":"","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"364A Paya Lebar Road","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"70","nationality":"Singapore Citizen","age":"20-29","gender":"female","date":"2020-02-15","home_address":"Mei Hwan Drive","home_X":103.86272492382845,"home_Y":1.3564667860240984,"working_address":"19 Kallang Avenue","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"37 Jalan Pemimpin","Cluster":"","work_X":103.86536,"work_Y":1.311130029,"":""},{"case_number":"71","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-15","home_address":"Fernvale Road","home_X":103.8756058,"home_Y":1.397080533,"working_address":"Fernvale Lane","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"God��s Kingdom Bread of Life Church","Cluster":"","work_X":103.8722103,"work_Y":1.389189844,"":""},{"case_number":"72","nationality":"Chinese","age":"40-49","gender":"male","date":"2020-02-15","home_address":"Woodlands Crescent","home_X":103.80404,"home_Y":1.4459,"working_address":"Woodlands Industrial Park","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"10 Bayfront Avenue","Cluster":"","work_X":103.7994,"work_Y":1.44935,"":""},{"case_number":"73","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-16","home_address":"Lorong 8 Toa Payoh","home_X":103.8593317,"home_Y":1.339381083,"working_address":"Singapore Armed Forces","Type":"Domestic","Link":"51;73","Hotel":"","Tag":"discharged","Visited":"355 Tanglin Road","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"74","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-16","home_address":"Mei Ling Street","home_X":103.804137,"home_Y":1.29337146,"working_address":"Hi-Yew Technology Pte Ltd","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.85325,"work_Y":1.30345,"":""},{"case_number":"75","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-16","home_address":"Serangoon Road","home_X":103.8615517978426,"home_Y":1.3238846693155397,"working_address":"","Type":"Domestic","Link":"41;75","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"77","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-17","home_address":"McNair Road","home_X":103.85848,"home_Y":1.32055,"working_address":"","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"78","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-18","home_address":"Dairy Farm area","home_X":103.90313,"home_Y":1.366075,"working_address":"VWO-run community hospital","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"79","nationality":"Malaysian","age":"30-39","gender":"female","date":"2020-02-18","home_address":"Woodlands Crescent","home_X":103.81365373874176,"home_Y":1.4470069744758611,"working_address":"8A Admiralty Street","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.80093,"work_Y":1.44069,"":""},{"case_number":"80","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-18","home_address":"Fernvale Link","home_X":103.8790715,"home_Y":1.393972805,"working_address":"NUH","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":103.78366,"work_Y":1.29513,"":""},{"case_number":"81","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-18","home_address":"Lower Delta Road","home_X":103.8238,"home_Y":1.28126,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"82","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-19","home_address":"Jurong West Street 41","home_X":103.7235837,"home_Y":1.346537096,"working_address":"","Type":"Domestic","Link":"82;86","Hotel":"","Tag":"discharged","Visited":"Ng Teng Fong General Hospital","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"83","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-19","home_address":"Rivervale Drive","home_X":103.90457,"home_Y":1.3873,"working_address":"16 Kallang Place","Type":"Domestic","Link":"83;91;138","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Church","work_X":103.86732,"work_Y":1.31648,"":""},{"case_number":"84","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-19","home_address":"Aljunied Road","home_X":103.879562,"home_Y":1.329278423,"working_address":"35 Tuas South Avenue 6","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"Bugis Junction","Cluster":"Grace Assembly of God","work_X":103.639527,"work_Y":1.299681,"":""},{"case_number":"85","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-02-20","home_address":"Woodlands Avenue 6","home_X":103.7964191,"home_Y":1.448519042,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"86","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-21","home_address":"Bukit Batok East Avenue 5","home_X":103.7549013,"home_Y":1.353992386,"working_address":"Singapore Institute of Technology","Type":"Domestic","Link":"82;86","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.78097,"work_Y":1.301059967,"":""},{"case_number":"88","nationality":"Singapore Citizen","age":"30-40","gender":"female","date":"2020-02-22","home_address":"Hougang Street 91","home_X":103.8816476,"home_Y":1.37704932,"working_address":"","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":null,"work_Y":null,"":""},{"case_number":"89","nationality":"Filipino","age":"40-49","gender":"male","date":"2020-02-22","home_address":"Serangoon Avenue 3","home_X":103.87036,"home_Y":1.35252,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"8 Temasek Boulevard;51 Bishan Street 13","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"90","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-24","home_address":"Bishan Street 12","home_X":103.850806,"home_Y":1.3462583,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"death","Visited":"","Cluster":"Church","work_X":null,"work_Y":null,"":""},{"case_number":"91","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-25","home_address":"Rivervale Drive","home_X":103.90668011631558,"home_Y":1.3900337246372525,"working_address":"","Type":"Domestic","Link":"83;91;138;151","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Church","work_X":null,"work_Y":null,"":""},{"case_number":"92","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-26","home_address":"Serangoon Avenue 3","home_X":103.87191804554055,"home_Y":1.3547094161127748,"working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":null,"work_Y":null,"":""},{"case_number":"93","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-26","home_address":"Bukit Batok Street 31","home_X":103.7490398,"home_Y":1.358794206,"working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.8019056,"work_Y":1.2903388,"":""},{"case_number":"94","nationality":"Singapore Citizen","age":"60-69","gender":"female","date":"2020-02-27","home_address":"Jalan Jurong Kechil","home_X":103.770751,"home_Y":1.342135483,"working_address":"","Type":"Domestic","Link":"94;96;107;112;148;161;196;520","Hotel":"","Tag":"discharged","Visited":"","Cluster":"SAFRA Jurong","work_X":null,"work_Y":null,"":""},{"case_number":"95","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-27","home_address":"Choa Chu Kang","home_X":103.74618,"home_Y":1.38616,"working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"3 Stadium Drive;1 Aviation Drive;490 Lorong 6 Toa Payoh;297 Lorong 6 Toa Payoh","Cluster":"","work_X":103.80942435810854,"work_Y":1.2966981552503791,"":""},{"case_number":"96","nationality":"Singapore Citizen","age":"<=12","gender":"male","date":"2020-02-27","home_address":"Jalan Jurong Kechil area","home_X":103.7739987918863,"home_Y":1.3511842912755159,"working_address":"Raffles Institution","Type":"Domestic","Link":"94;96;107;112;148;161;196","Hotel":"","Tag":"discharged","Visited":"","Cluster":"SAFRA Jurong","work_X":103.8432,"work_Y":1.34737,"":""},{"case_number":"97","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-28","home_address":"Choa Chu Kang North 5","home_X":103.7467806,"home_Y":1.39194,"working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"5 Maxwell Road","Cluster":"","work_X":103.80255426476775,"work_Y":1.2947464904771255,"":""},{"case_number":"98","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-28","home_address":"Jurong West Street 61","home_X":103.698476,"home_Y":1.33774912,"working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":103.81144828524437,"work_Y":1.3000855166050156,"":""},{"case_number":"99","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-29","home_address":"Jurong West Street 81","home_X":103.70324144162048,"home_Y":1.3544307469826136,"working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Wizlearn Technologies Pte Ltd","work_X":null,"work_Y":null,"":""},{"case_number":"100","nationality":"Malaysian","age":"20-29","gender":"male","date":"2020-02-29","home_address":"Holland Avenue","home_X":103.796717,"home_Y":1.309008,"working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Wizlearn Technologies Pte Ltd","work_X":null,"work_Y":null,"":""},{"case_number":"101","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-29","home_address":"Bukit Batok Street 24","home_X":103.7563864,"home_Y":1.342577973,"working_address":"Asia Asset Recovery Pte Ltd","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"NTFGH","Cluster":"Wizlearn Technologies Pte Ltd","work_X":103.75159,"work_Y":1.34274,"":""},{"case_number":"102","nationality":"Filipino ","age":"40-49","gender":"female","date":"2020-02-29","home_address":"Bukit Batok Street 24","home_X":103.76040297121266,"home_Y":1.3470406438938025,"working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"NTFGH","Cluster":"Wizlearn Technologies Pte Ltd","work_X":null,"work_Y":null,"":""}];

var data =[
    {"case_number":"1","nationality":"Chinese","age":"60-69","gender":"male","date":"2020-01-24","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"1;3","Hotel":"Shangri-La’s Rasa Sentosa Resort & Spa","Tag":"discgarged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"2","nationality":"Chinese","age":"50-59","gender":"female","date":"2020-01-24","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"2;13;26;44","Hotel":"Townshend Road(J8 Hotel)","Tag":"discharged","Visited":"Orchard;Marina Bay Sands;Gardens by the Bay","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"3","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-01-24","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"1;3","Hotel":"Shangri-La’s Rasa Sentosa Resort & Spa","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"4","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-01-26","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"4;11","Hotel":"Village Hotel Sentosa","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"5","nationality":"Chinese","age":"50-59","gender":"female","date":"2020-01-27","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"","Hotel":"Ceylon Road","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"6","nationality":"Chinese","age":"50-59","gender":"male","date":"2020-01-28","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"","Hotel":"Pasir Ris Grove","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"7","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-01-28","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"","Hotel":"Marina Bay Sands","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"8","nationality":"Chinese","age":"50-59","gender":"female","date":"2020-01-29","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"8;9","Hotel":"Lorong Lew Lian","Tag":"discharged","Visited":"","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"9","nationality":"Chinese","age":"50-59","gender":"male","date":"2020-01-29","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"8;9","Hotel":"Lorong Lew Lian","Tag":"discharged","Visited":"","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"10","nationality":"Chinese","age":"50-59","gender":"male","date":"2020-01-29","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"Marina South Pier","Type":"Import","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.86304","work_Y":"1.27106","":""},
    {"case_number":"11","nationality":"Chinese","age":"30-39","gender":"female","date":"2020-01-30","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"4;11","Hotel":"Village Hotel Sentosa","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"12","nationality":"Chinese","age":"30-39","gender":"female","date":"2020-01-30","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"12;18","Hotel":"Village Hotel Sentosa;HOTEL 81 Princess;Home Suite View Hotel","Tag":"discharged","Visited":"Orchard;Geylang","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"13","nationality":"Chinese","age":">=70","gender":"female","date":"2020-01-30","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"2;13;26;44","Hotel":"ParkRoyal Collection Pickering;Oasia Hotel Downtown","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"14","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-01-31","home_address":"Jurong East","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"15","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-01-31","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"16","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-01-31","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"17","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-01","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"18","nationality":"Chinese","age":"30-29","gender":"female","date":"2020-02-01","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"12;18","Hotel":"Home Suite View Hotel","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"19","nationality":"Singapore resident","age":"20-29","gender":"female","date":"2020-02-04","home_address":"Jalan Bukit Merah ","home_X":"103.81786","home_Y":"1.2828","working_address":"Yong Thai Hang at 24 Cavan Road","Type":"Domestic","Link":"19;20;21;24;27;28;34;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"103.861567","work_Y":"1.31095","":""},
    {"case_number":"20","nationality":"Singapore resident","age":"40-49","gender":"female","date":"2020-02-04","home_address":"Hougang Street 61","home_X":"103.8862692","home_Y":"1.374724615","working_address":"Yong Thai Hang at 25 Cavan Road","Type":"Domestic","Link":"19;20;24;34;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"103.86155","work_Y":"1.311033","":""},
    {"case_number":"21","nationality":"Indonesian","age":"40-49","gender":"female","date":"2020-02-04","home_address":"Jalan Bukit Merah","home_X":"103.81786","home_Y":"1.2828","working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"","work_Y":"","":""},
    {"case_number":"22","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-04","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"23","nationality":"Singapore Citizen","age":"12-19","gender":"male","date":"2020-02-04","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"24","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-04","home_address":"Buangkok Green","home_X":"103.88474","home_Y":"1.38165","working_address":"","Type":"Domestic","Link":"19;20;24","Hotel":"","Tag":"discharged","Visited":"Jalan Besar","Cluster":"Yong Thai Hang","work_X":"","work_Y":"","":""},
    {"case_number":"25","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-05","home_address":"Buangkok Green","home_X":"103.88474","home_Y":"1.38165","working_address":"Diamond Industries Jewellery Company at Harbour Drive","Type":"Domestic","Link":"24;25","Hotel":"","Tag":"discharged","Visited":"Pasir Panjang Hawker Centre","Cluster":"Yong Thai Hang","work_X":"103.7794083","work_Y":"1.28303056","":""},
    {"case_number":"26","nationality":"Chinese","age":"40-49","gender":"female","date":"2020-02-05","home_address":"Wuhan","home_X":"","home_Y":"","working_address":"","Type":"Import","Link":"2;13;26;44","Hotel":"ParkRoyal Collection Pickering;Oasia Hotel Downtown","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"27","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-05","home_address":"Jalan Bukit Merah ","home_X":"103.81786","home_Y":"1.2828","working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"Tiong Bahru Plaza;Beo Crescent","Cluster":"Yong Thai Hang","work_X":"","work_Y":"","":""},
    {"case_number":"28","nationality":"Singapore Citizen","age":"<=12","gender":"male","date":"2020-02-05","home_address":"Jalan Bukit Merah ","home_X":"103.81786","home_Y":"1.2828","working_address":"","Type":"Domestic","Link":"19;21;27;28","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"","work_Y":"","":""},
    {"case_number":"29","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-06","home_address":"","home_X":"0","home_Y":"0","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"30","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-06","home_address":"Shunfu Road","home_X":"103.8374","home_Y":"1.351975","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Far East Square;Junction 8","Cluster":"Grand Hyatt ","work_X":"","work_Y":"","":""},
    {"case_number":"31","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-07","home_address":"Tampines Street 24","home_X":"103.9517615","home_Y":"1.35540703","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Church;Malaysia","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"32","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-07","home_address":"Elias Road","home_X":"103.9419669","home_Y":"1.37974843","working_address":"Victoria Junior College","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Singapore Zoo;Singapore Changi Airport","Cluster":"","work_X":"103.91999","work_Y":"1.30667","":""},
    {"case_number":"33","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-07","home_address":"","home_X":"0","home_Y":"0","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Malaysia","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"34","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-09","home_address":"Sin Ming Road","home_X":"103.8373123","home_Y":"1.355451703","working_address":"Yong Thai Hang at Cavan Road","Type":"Domestic","Link":"19;20;34","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"103.86804","work_Y":"1.26606","":""},
    {"case_number":"35","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-09","home_address":"Henderson Crescent","home_X":"103.8205","home_Y":"1.286520062","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Redhill Market","Cluster":" Bukit Merah","work_X":"","work_Y":"","":"","undefined":""},
    {"case_number":"36","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-09","home_address":"Bukit Batok 31","home_X":"103.7515694","home_Y":"1.35892","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"37","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Jurong East 32","home_X":"103.735817","home_Y":"1.3469583","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"38","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-09","home_address":"Choa Chu Kang 3","home_X":"103.875625","home_Y":"1.346936","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Plaza Singapura;Marina Bay Sands;Chinatown:Church","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"39","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Jurong West","home_X":"103.7435528","home_Y":"1.3329416","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Malaysia","Cluster":"Grand Hyatt","work_X":"","work_Y":"","":""},
    {"case_number":"40","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-09","home_address":"Bedok North","home_X":"103.91865","home_Y":"1.33445","working_address":"","Type":"Domestic","Link":"19;20;40","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Yong Thai Hang","work_X":"","work_Y":"","":""},
    {"case_number":"41","nationality":"Singapore Citizen","age":">=70","gender":"male","date":"2020-02-09","home_address":"Serangoon Road","home_X":"103.85215","home_Y":"1.31807","working_address":"","Type":"Domestic","Link":"41;75","Hotel":"","Tag":"discharged","Visited":"Paya Lebar Methodist Church;Braddell Heights Residents’ Committee;Pat’s Schoolhouse Kovan","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"42","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-09","home_address":"25 Kaki Bukit Road","home_X":"103.90917","home_Y":"1.3375","working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"Mustafa Centre","Cluster":"","work_X":"103.865336","work_Y":"1.406104","":""},
    {"case_number":"43","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-09","home_address":"Fernvale Close","home_X":"103.8801518","home_Y":"1.394428276","working_address":"Resorts World Sentosa","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"Malaysia","Cluster":"","work_X":"103.82051","work_Y":"1.25619","":""},
    {"case_number":"44","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-10","home_address":"Sembawan","home_X":"103.81891","home_Y":"1.44794","working_address":"20 Jalan Afifi","Type":"Domestic","Link":"2;13;26;44","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Jalan Afifi","work_X":"103.892081","work_Y":"1.321812","":""},
    {"case_number":"45","nationality":"Singapore Citizen","age":"<=12","gender":"female","date":"2020-02-10","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"46","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-11","home_address":"Johor Bahru","home_X":"103.75711","home_Y":"1.46478","working_address":"8 Sentosa Gateway","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.82733","work_Y":"1.24901","":""},
    {"case_number":"47","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-11","home_address":"Veerasamy Road","home_X":"103.8544409","home_Y":"1.307380547","working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.865336","work_Y":"1.406104","":""},
    {"case_number":"48","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-12","home_address":"Bukit Batok Street 25","home_X":"103.7609726","home_Y":"1.342438679","working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"68 Orchard Road;1 Vista Exchange Green;1 Fusionopolis Place;Malaysia","Cluster":"Grace Assembly of God","work_X":"103.75277","work_Y":"1.34952","":""},
    {"case_number":"49","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-12","home_address":"Toh Guan Road","home_X":"103.7477642","home_Y":"1.336660786","working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.75277","work_Y":"1.34952","":""},
    {"case_number":"50","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-12","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"12 Marina Boulevard","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.85238","work_Y":"1.28261","":""},
    {"case_number":"51","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-13","home_address":"Bishan Street 13","home_X":"103.8534228","home_Y":"1.350315478","working_address":"355 Tanglin Road;1 Bukit Batok West Avenue 4","Type":"Domestic","Link":"51;73","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.75277","work_Y":"1.34952","":""},
    {"case_number":"52","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-13","home_address":"Campbell Lane","home_X":"103.8522116","home_Y":"1.305538267","working_address":"8 Seletar Aerospace Heights","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Seletar Aerospace Heights construction site","work_X":"103.865336","work_Y":"1.406104","":""},
    {"case_number":"53","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-13","home_address":"Hillview Avenue","home_X":"103.7648341","home_Y":"1.36239959","working_address":"National University of Singapore","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.7777499","work_Y":"1.297179989","":""},
    {"case_number":"54","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-13","home_address":"Ang Mo Kio 5","home_X":"103.84546","home_Y":"1.37161","working_address":"355 Tanglin Road","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.81667","work_Y":"1.31667","":""},
    {"case_number":"55","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-13","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"DBS Asia Central","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"Pulau Bukom;Church of Christ the King","Cluster":"","work_X":"103.84621","work_Y":"1.28886","":""},
    {"case_number":"56","nationality":"Bangladesh","age":"30-39","gender":"male","date":"2020-02-13","home_address":"","home_X":"0","home_Y":"0","working_address":"","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Seletar Aerospace Heights construction site","work_X":"","work_Y":"","":""},
    {"case_number":"57","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-13","home_address":"Senja Road","home_X":"103.7588621","home_Y":"1.386744973","working_address":"Bukit Batok West Avenue 4","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.746972","work_Y":"1.362712453","":""},
    {"case_number":"58","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-13","home_address":"Jalan Kelicha","home_X":"103.8681472","home_Y":"1.34687","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"59","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-14","home_address":"Wilkinson Road","home_X":"103.89085","home_Y":"1.3026361","working_address":"Anesthetist","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"60","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-14","home_address":"Ang Mo Kio Avenue 3","home_X":"103.84835","home_Y":"1.38356","working_address":"355 Tanglin Road","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.81667","work_Y":"1.31667","":""},
    {"case_number":"61","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 64","home_X":"103.7037745","home_Y":"1.34210094","working_address":"56 Senang Crescen","Type":"Domestic","Link":"61;67","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"1.3282333","work_Y":"103.9169833","":""},
    {"case_number":"62","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-14","home_address":"Tanjong Pagar Road","home_X":"103.84539","home_Y":"1.27889","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"63","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-14","home_address":"Potong Pasir Avenue 3","home_X":"103.865247","home_Y":"1.332908182","working_address":"Public Utilities Board","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"103 Beach Road","Cluster":"Grace Assembly of God","work_X":"103.73433","work_Y":"1.43891","":""},
    {"case_number":"64","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 81","home_X":"103.6934296","home_Y":"1.347166299","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"65","nationality":"Singapore Citizen","age":"60-69","gender":"female","date":"2020-02-14","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"2221 Ang Mo Kio Avenue 8","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"66","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"Grace Assembly of God","Type":"Domestic","Link":"66;68;70;71;80;84;88;151","Hotel":"","Tag":"discharged","Visited":"37 Jalan Pemimpin","Cluster":"Grace Assembly of God","work_X":"103.74712","work_Y":"1.36466","":""},
    {"case_number":"67","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-14","home_address":"Jurong West Street 64","home_X":"103.7037745","home_Y":"1.34210094","working_address":"","Type":"Domestic","Link":"61;67","Hotel":"","Tag":"discharged","Visited":"1 Bukit Batok West Avenue 4;Ng Teng Fong General Hospital;NUH","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"68","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-15","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"364A Paya Lebar Road","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"69","nationality":"Bangladesh","age":"20-29","gender":"male","date":"2020-02-15","home_address":"","home_X":"0","home_Y":"0","working_address":"","Type":"Domestic","Link":"42;47;52;56;69","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Seletar Aerospace Heights construction site","work_X":"","work_Y":"","":""},
    {"case_number":"70","nationality":"Singapore Citizen","age":"20-29","gender":"female","date":"2020-02-15","home_address":"Mei Hwan Drive","home_X":"103.8616545","home_Y":"1.353843241","working_address":"19 Kallang Avenue","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"37 Jalan Pemimpin","Cluster":"","work_X":"103.86536","work_Y":"1.311130029","":""},
    {"case_number":"71","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-15","home_address":"Fernvale Road","home_X":"103.8756058","home_Y":"1.397080533","working_address":"Fernvale Lane","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"God’s Kingdom Bread of Life Church","Cluster":"","work_X":"103.8722103","work_Y":"1.389189844","":""},
    {"case_number":"72","nationality":"Chinese","age":"40-49","gender":"male","date":"2020-02-15","home_address":"Woodlands Crescent","home_X":"103.80404","home_Y":"1.4459","working_address":"Woodlands Industrial Park","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"10 Bayfront Avenue","Cluster":"","work_X":"103.7994","work_Y":"1.44935","":""},
    {"case_number":"73","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-16","home_address":"Lorong 8 Toa Payoh","home_X":"103.8593317","home_Y":"1.339381083","working_address":"Singapore Armed Forces","Type":"Domestic","Link":"51;73","Hotel":"","Tag":"discharged","Visited":"355 Tanglin Road","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"74","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-16","home_address":"Mei Ling Street","home_X":"103.804137","home_Y":"1.29337146","working_address":"Hi-Yew Technology Pte Ltd","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.85325","work_Y":"1.30345","":""},
    {"case_number":"75","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-16","home_address":"Serangoon Road","home_X":"103.85215","home_Y":"1.31807","working_address":"","Type":"Domestic","Link":"41;75","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"76","nationality":"Singapore Citizen","age":"<=12","gender":"male","date":"2020-02-17","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"76;87","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"77","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-17","home_address":"McNair Road","home_X":"103.85848","home_Y":"1.32055","working_address":"","Type":"Domestic","Link":"50;55;65;77","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"78","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-18","home_address":"Dairy Farm area","home_X":"103.90313","home_Y":"1.366075","working_address":"VWO-run community hospital","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"79","nationality":"Malaysian","age":"30-39","gender":"female","date":"2020-02-18","home_address":"Woodlands Crescent","home_X":"103.80404","home_Y":"1.4459","working_address":"8A Admiralty Street","Type":"Domestic","Link":"59;72;79","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.80093","work_Y":"1.44069","":""},
    {"case_number":"80","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-18","home_address":"Fernvale Link","home_X":"103.8790715","home_Y":"1.393972805","working_address":"NUH","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"103.78366","work_Y":"1.29513","":""},
    {"case_number":"81","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-18","home_address":"Lower Delta Road","home_X":"103.8238","home_Y":"1.28126","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"82","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-19","home_address":"Jurong West Street 41","home_X":"103.7235837","home_Y":"1.346537096","working_address":"","Type":"Domestic","Link":"82;86","Hotel":"","Tag":"discharged","Visited":"Ng Teng Fong General Hospital","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"83","nationality":"Singapore Citizen","age":"50-59","gender":"male","date":"2020-02-19","home_address":"Rivervale Drive","home_X":"103.90457","home_Y":"1.3873","working_address":"16 Kallang Place","Type":"Domestic","Link":"83;91;138","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Church","work_X":"103.86732","work_Y":"1.31648","":""},
    {"case_number":"84","nationality":"Singapore Citizen","age":"30-39","gender":"female","date":"2020-02-19","home_address":"Aljunied Road","home_X":"103.879562","home_Y":"1.329278423","working_address":"35 Tuas South Avenue 6","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"Bugis Junction","Cluster":"Grace Assembly of God","work_X":"103.639527","work_Y":"1.299681","":""},
    {"case_number":"85","nationality":"Chinese","age":"30-39","gender":"male","date":"2020-02-20","home_address":"Woodlands Avenue 6","home_X":"103.7964191","home_Y":"1.448519042","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"86","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-21","home_address":"Bukit Batok East Avenue 5","home_X":"103.7549013","home_Y":"1.353992386","working_address":"Singapore Institute of Technology","Type":"Domestic","Link":"82;86","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.78097","work_Y":"1.301059967","":""},
    {"case_number":"87","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-22","home_address":"Singapore","home_X":"","home_Y":"","working_address":"","Type":"Evacuated from Wuhan","Link":"76;87","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"88","nationality":"Singapore Citizen","age":"30-40","gender":"female","date":"2020-02-22","home_address":"Hougang Street 91","home_X":"103.8816476","home_Y":"1.37704932","working_address":"","Type":"Domestic","Link":"66;68;70;71;80;84;88","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Grace Assembly of God","work_X":"","work_Y":"","":""},
    {"case_number":"89","nationality":"Filipino","age":"40-49","gender":"male","date":"2020-02-22","home_address":"Serangoon Avenue 3","home_X":"103.87036","home_Y":"1.35252","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"8 Temasek Boulevard;51 Bishan Street 13","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"90","nationality":"Singapore Citizen","age":">=70","gender":"female","date":"2020-02-24","home_address":"Bishan Street 12","home_X":"103.850806","home_Y":"1.3462583","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"death","Visited":"","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"91","nationality":"Singapore Citizen","age":"50-59","gender":"female","date":"2020-02-25","home_address":"Rivervale Drive","home_X":"103.90457","home_Y":"1.3873","working_address":"","Type":"Domestic","Link":"83;91;138;151","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Church","work_X":"","work_Y":"","":""},
    {"case_number":"92","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-26","home_address":"Serangoon Avenue 3","home_X":"103.87036","home_Y":"1.35252","working_address":"","Type":"Domestic","Link":"","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"","work_Y":"","":""},
    {"case_number":"93","nationality":"Singapore Citizen","age":"30-39","gender":"male","date":"2020-02-26","home_address":"Bukit Batok Street 31","home_X":"103.7490398","home_Y":"1.358794206","working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.8019056","work_Y":"1.2903388","":""},
    {"case_number":"94","nationality":"Singapore Citizen","age":"60-69","gender":"female","date":"2020-02-27","home_address":"Jalan Jurong Kechil","home_X":"103.770751","home_Y":"1.342135483","working_address":"","Type":"Domestic","Link":"94;96;107;112;148;161;196;520","Hotel":"","Tag":"discharged","Visited":"","Cluster":"SAFRA Jurong","work_X":"","work_Y":"","":""},
    {"case_number":"95","nationality":"Singapore Citizen","age":"40-49","gender":"male","date":"2020-02-27","home_address":"Choa Chu Kang","home_X":"103.74618","home_Y":"1.38616","working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"3 Stadium Drive;1 Aviation Drive;490 Lorong 6 Toa Payoh;297 Lorong 6 Toa Payoh","Cluster":"","work_X":"103.8019056","work_Y":"1.2903388","":""},
    {"case_number":"96","nationality":"Singapore Citizen","age":"<=12","gender":"male","date":"2020-02-27","home_address":"Jalan Jurong Kechil area","home_X":"103.770751","home_Y":"1.342135483","working_address":"Raffles Institution","Type":"Domestic","Link":"94;96;107;112;148;161;196","Hotel":"","Tag":"discharged","Visited":"","Cluster":"SAFRA Jurong","work_X":"103.8432","work_Y":"1.34737","":""},
    {"case_number":"97","nationality":"Singapore Citizen","age":"40-49","gender":"female","date":"2020-02-28","home_address":"Choa Chu Kang North 5","home_X":"103.7467806","home_Y":"1.39194","working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"5 Maxwell Road","Cluster":"","work_X":"103.8019056","work_Y":"1.2903388","":""},
    {"case_number":"98","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-28","home_address":"Jurong West Street 61","home_X":"103.698476","home_Y":"1.33774912","working_address":"Wizlearn Technologies","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"","work_X":"103.8019056","work_Y":"1.2903388","":""},
    {"case_number":"99","nationality":"Singapore Citizen","age":"20-29","gender":"male","date":"2020-02-29","home_address":"Jurong West Street 81","home_X":"103.6934296","home_Y":"1.347166299","working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Wizlearn Technologies Pte Ltd","work_X":"","work_Y":"","":""},
    {"case_number":"100","nationality":"Malaysian","age":"20-29","gender":"male","date":"2020-02-29","home_address":"Holland Avenue","home_X":"103.796717","home_Y":"1.309008","working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"","Cluster":"Wizlearn Technologies Pte Ltd","work_X":"","work_Y":"","":""},
    {"case_number":"101","nationality":"Singapore Citizen","age":"60-69","gender":"male","date":"2020-02-29","home_address":"Bukit Batok Street 24","home_X":"103.7563864","home_Y":"1.342577973","working_address":"Asia Asset Recovery Pte Ltd","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"NTFGH","Cluster":"Wizlearn Technologies Pte Ltd","work_X":"103.75159","work_Y":"1.34274","":""},
    {"case_number":"102","nationality":"Filipino ","age":"40-49","gender":"female","date":"2020-02-29","home_address":"Bukit Batok Street 24","home_X":"103.7563864","home_Y":"1.342577973","working_address":"","Type":"Domestic","Link":"93;95;97;98;99;100;101;102;103;104;105;106;108;110","Hotel":"","Tag":"discharged","Visited":"NTFGH","Cluster":"Wizlearn Technologies Pte Ltd","work_X":"","work_Y":"","":""},

]

var colors3 = {"Domestic":'#fbb4ae',"Import":'#b3cde3',"Evacuated from Wuhan":'#ccebc5'}
var colors7 = {"Mon":'#8dd3c7',"Tue":'#e5d8bd',"Wed":'#bebada',"Thu":'#fb8072',"Fri":'#80b1d3',"Sat":'#fdb462',"Sun":'#b3de69'}
//load the base map from mapbox
var map = L.map('map').setView([1.35, 103.85], 10);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     maxZoom: 15,
//     minZoom: 10,
//     id: 'mapbox.light',
//     accessToken: 'pk.eyJ1IjoiemJ4eXoiLCJhIjoiY2szMDhlZnVxMDJibzNjcG0yMWJqMG1wZCJ9.Z0W1zf6xvp0WfeHx6SqVdg'
// }).addTo(map);
L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 15,
        minZoom: 10,
    }
).addTo(map);

var parseDate = d3.timeParse("%Y-%m-%d");

data.forEach(function (d) {  // clean up data
    d.date = parseDate(d.date);
});

var domestic = data.filter(item => {
    return item.Type == 'Domestic'
});

var imported = data.filter(item => {
    return item.Type == 'Import'
});

var evacuate = data.filter(item => {
    return item.Type == "Evacuated from Wuhan"
});

var layerscontrol;

function formatDate(value) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[value.getMonth()] + " " + value.getDate();
}

var barChart1 = new dc.BarChart("#barChart1");
var pieChart1 = new dc.PieChart("#pieChart1");

var hotelLayer = L.layerGroup();
var domesticHomeLayer = L.layerGroup();
var overlayMaps1 = {
    "Domestic home address": domesticHomeLayer,
    "Import hotel address": hotelLayer,
};

var domesticHomeLayer2 = L.layerGroup();
var linksLayer = L.layerGroup()
var heatLayer = L.layerGroup();
var dbscanLayer = L.layerGroup();
var overlayMaps2 = {
    "Domestic home address": domesticHomeLayer2,
    "Domestic flow map": linksLayer,
    "Domestic home address spatial clustering": dbscanLayer,
    "Domestic home address heat map": heatLayer
}

var hotelLayer2 = L.layerGroup();
var overlayMaps3 = {
    "Import hotel address": hotelLayer2,
};

window.onload = function () {
    $("input:radio[name='Type'][value = 'All cases']").attr("checked", "checked");
    loadAll();
};

$(document).ready(function () {
    $("input[type=radio][name='Type']").change(function () {
        layerscontrol.remove(map)
        var type = $("input[name='Type']:checked").val();
        if (type == "All cases") {
            $("span[id='spanTotalNum']").text("102")
            $("#pieTitle").html("Type (Filterable):");
            barChart1.filterAll()
            hotelLayer.clearLayers()
            domesticHomeLayer.clearLayers()
            domesticHomeLayer2.clearLayers()
            linksLayer.clearLayers()
            heatLayer.clearLayers()
            dbscanLayer.clearLayers()
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            loadAll();
        }
        else if (type == "Domestic") {
            $("span[id='spanTotalNum']").text("78")
            $("#pieTitle").html("Week (Filterable):");
            barChart1.filterAll()
            hotelLayer.clearLayers()
            domesticHomeLayer.clearLayers()
            domesticHomeLayer2.clearLayers()
            linksLayer.clearLayers()
            heatLayer.clearLayers()
            dbscanLayer.clearLayers()
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            loadDomestic();
        }
        else if (type == "Imported") {
            $("span[id='spanTotalNum']").text("17")
            barChart1.filterAll()
            hotelLayer.clearLayers()
            domesticHomeLayer.clearLayers()
            domesticHomeLayer2.clearLayers()
            linksLayer.clearLayers()
            heatLayer.clearLayers()
            dbscanLayer.clearLayers()
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            loadImported();
        }
        else if (type == "Imported") {
            $("span[id='spanTotalNum']").text("17")
            barChart1.filterAll()
            hotelLayer.clearLayers()
            domesticHomeLayer.clearLayers()
            domesticHomeLayer2.clearLayers()
            linksLayer.clearLayers()
            heatLayer.clearLayers()
            dbscanLayer.clearLayers()
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            loadImported();
        }
        else if(type == "Evacuated from Wuhan"){
            $("span[id='spanTotalNum']").text("7")
            barChart1.filterAll()
            hotelLayer.clearLayers()
            domesticHomeLayer.clearLayers()
            domesticHomeLayer2.clearLayers()
            linksLayer.clearLayers()
            heatLayer.clearLayers()
            dbscanLayer.clearLayers()
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            loadEvacuate();
        }
    });
});

function loadAll() {
    var pie = document.getElementsByClassName("pie");
    pie[0].style.visibility = "visible";

    var all = document.getElementsByClassName("all");
    all[0].style.visibility = "visible";

    var dom = document.getElementsByClassName("domestic");
    dom[0].style.visibility = "hidden";
    dom[1].style.visibility = "hidden";

    var imp = document.getElementsByClassName("import");
    imp[0].style.visibility = "hidden";


    var ndx = crossfilter(data)
    domesticHomeLayer.clearLayers();
    hotelLayer.clearLayers();

    addLayer1(data)

    var caseAll = ndx.groupAll();
    dc.dataCount('#caseNum1')
        .dimension(ndx)
        .group(caseAll);

    var dateDim = ndx.dimension(function (d) {
        return d.date;
    });
    var dateGroup = dateDim.group().reduceCount(function (d) {
        return d.date;
    });
    var dateScale = d3.scaleTime()
        .domain([new Date(2020, 0, 23), new Date(2020, 2, 1)])
    var numScale = d3.scaleLinear()
        .domain([0, 10]);

    barChart1
        .x(dateScale)
        .y(numScale)
        .yAxisLabel("Cases")
        .xAxisLabel("Date")
        .dimension(dateDim)
        .centerBar(true)
        .group(dateGroup)
        .controlsUseVisibility(true)
        .on('filtered', function (chart, filter) {
                console.log(dateDim.top(200))
                domesticHomeLayer.clearLayers();
                hotelLayer.clearLayers();
                layerscontrol.remove(map)
                addLayer1(dateDim.top(200))
                if (filter != null) {
                    var from_date = formatDate(filter[0])
                    var to_date = formatDate(filter[1])
                    $('#dateFilter').html(from_date + " - " + to_date);
                } else {
                    $('#dateFilter').html("Jan 24 - Feb 29");
                }
            }
        );

    barChart1.xAxis()
        .tickFormat(d3.timeFormat("%b %d"))
        .tickValues(
            [new Date(2020, 0, 24),
                new Date(2020, 0, 26),
                new Date(2020, 0, 28),
                new Date(2020, 0, 30),
                new Date(2020, 1, 1),
                new Date(2020, 1, 3),
                new Date(2020, 1, 5),
                new Date(2020, 1, 7),
                new Date(2020, 1, 9),
                new Date(2020, 1, 11),
                new Date(2020, 1, 13),
                new Date(2020, 1, 15),
                new Date(2020, 1, 17),
                new Date(2020, 1, 19),
                new Date(2020, 1, 21),
                new Date(2020, 1, 23),
                new Date(2020, 1, 25),
                new Date(2020, 1, 27),
                new Date(2020, 1, 29)]);

    barChart1.render()

    var typeDim = ndx.dimension(function (d) {
        return d.Type;
    });
    var typeGroup = typeDim.group().reduceCount(function (d) {
        return d.Type;
    });

    pieChart1
        .dimension(typeDim)
        .group(typeGroup)
        .slicesCap(3)
        .radius(80)
        .innerRadius(20)
        .controlsUseVisibility(true)
        .renderLabel(true)
        .colors(function (d) {return colors3[d]})
        .legend(dc.legend().x(0).y(110).highlightSelected(true));

    pieChart1.render();


}

function addLayer1(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].Type == "Domestic") {
            for (var m = 0; m < home.length; m++) {
                if (home[m].case_number == data[i].case_number)
                    var circle = L.circle([home[m].home_Y, home[m].home_X], 15, {
                        color: '#fbb4ae',
                        fillColor: '#fbb4ae',
                        fillOpacity: 1
                    }).addTo(domesticHomeLayer);
            }

        } else if (data[i].Type == "Import") {
            for (var n = 0; n < hotelData.length; n++) {
                if (hotelData[n].case_number == data[i].case_number && hotelData[n].hotel_Y != null && hotelData[n].hotel_X != null) {
                    var circle = L.circle([hotelData[n].hotel_Y, hotelData[n].hotel_X], 15, {
                        color: '#b3cde3',
                        fillColor: '#b3cde3',
                        fillOpacity: 1
                    }).addTo(hotelLayer);
                }
            }
        }

    }


    layerscontrol = L.control.layers(null, overlayMaps1).addTo(map);
}

function loadDomestic() {
    var pie = document.getElementsByClassName("pie");
    pie[0].style.visibility = "visible";

    var all = document.getElementsByClassName("all");
    all[0].style.visibility = "hidden";

    var dom = document.getElementsByClassName("domestic");
    dom[0].style.visibility = "visible";
    dom[1].style.visibility = "visible";
    var imp = document.getElementsByClassName("import");
    imp[0].style.visibility = "hidden";

    addLayer2(domestic)
    var ndx1 = crossfilter(domestic)
    var caseAll = ndx1.groupAll();
    dc.dataCount('#caseNum1')
        .dimension(ndx1)
        .group(caseAll);

    var dateDim = ndx1.dimension(function (d) {
        return d.date;
    });
    var dateGroup = dateDim.group().reduceCount(function (d) {
        return d.date;
    });
    var dateScale = d3.scaleTime()
        .domain([new Date(2020, 0, 23), new Date(2020, 2, 1)])
    var numScale = d3.scaleLinear()
        .domain([0, 10]);
    barChart1
        .x(dateScale)
        .y(numScale)
        .yAxisLabel("Cases")
        .xAxisLabel("Date")
        .dimension(dateDim)
        .centerBar(true)
        .group(dateGroup)
        .controlsUseVisibility(true)
        .on('filtered', function (chart, filter) {
                domesticHomeLayer2.clearLayers()
                heatLayer.clearLayers()
                linksLayer.clearLayers()
                dbscanLayer.clearLayers()
                layerscontrol.remove(map)
                addLayer2(dateDim.top(200))
                if (filter != null) {
                    var from_date = formatDate(filter[0])
                    var to_date = formatDate(filter[1])
                    $('#dateFilter').html(from_date + " - " + to_date);
                } else {
                    $('#dateFilter').html("Jan 24 - Feb 29");
                }
            }
        );


    barChart1.xAxis()
        .tickFormat(d3.timeFormat("%b %d"))
        .tickValues(
            [new Date(2020, 0, 24),
                new Date(2020, 0, 26),
                new Date(2020, 0, 28),
                new Date(2020, 0, 30),
                new Date(2020, 1, 1),
                new Date(2020, 1, 3),
                new Date(2020, 1, 5),
                new Date(2020, 1, 7),
                new Date(2020, 1, 9),
                new Date(2020, 1, 11),
                new Date(2020, 1, 13),
                new Date(2020, 1, 15),
                new Date(2020, 1, 17),
                new Date(2020, 1, 19),
                new Date(2020, 1, 21),
                new Date(2020, 1, 23),
                new Date(2020, 1, 25),
                new Date(2020, 1, 27),
                new Date(2020, 1, 29)]);
    barChart1.render()


    domestic.forEach(function (d) {  // clean up data
        var week = d.date.getDay()
        var dayCycleArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (var i = 0; i < 7; i++) {
            if (week == i) {
                d.nationality = dayCycleArray[i];
            }
        }
    });


    var weekDim = ndx1.dimension(function (d) {
        return d.nationality;
    });
    var weekGroup = weekDim.group().reduceCount(function (d) {
        return d.nationality;
    });

    pieChart1
        .dimension(weekDim)
        .group(weekGroup)
        .slicesCap(7)
        .radius(80)
        .colors(function (d) {return colors7[d]})
        .innerRadius(20)
        .controlsUseVisibility(true)
        .renderLabel(true)
        .legend(dc.legend().x(5).y(50).highlightSelected(true))
    pieChart1.render();


}

function addLayer2(data) {
    var heat = new Array();
    var geoJsonFeatureCollection = {}
    geoJsonFeatureCollection.type = 'FeatureCollection'
    geoJsonFeatureCollection.features = []
    for (var n = 0; n < data.length; n++) {
        for (var i = 0; i < home.length; i++) {
            if (home[i].case_number == data[n].case_number) {
                var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                    color: '#fbb4ae',
                    fillColor: '#fbb4ae',
                    fillOpacity: 1
                }).addTo(domesticHomeLayer2);
                var heatPoint = new Array(home[i].home_Y, home[i].home_X, 1.5)
                heat.push(heatPoint);
                for (var j = 0; j < links.length; j++) {
                    if (links[j].Child == home[i].case_number && links[j].Parent != '0') {

                        for (var m = 0; m < home.length; m++) {
                            if (home[m].case_number == links[j].Parent) {


                                //var arc = calcCoorArr(home[m].home_X + ',' + home[m].home_Y, home[i].home_X + ',' + home[i].home_Y, 30)
                                var point =
                                    {
                                        'type': 'Feature',
                                        'geometry': {
                                            'type': 'Point',
                                            'coordinates': [home[m].home_X, home[m].home_Y]
                                        },
                                        'properties': {
                                            'original_ID': home[m].case_number,
                                            'original_lon': home[m].home_X,
                                            'original_lat': home[m].home_Y,
                                            'destination_ID': home[i].case_number,
                                            'destination_lon': home[i].home_X,
                                            'destination_lat': home[i].home_Y
                                        }
                                    }
                                geoJsonFeatureCollection.features.push(point)
                            }
                        }

                    }
                }

                for (var k = 0; k < dbscanData.length; k++) {
                    if (dbscanData[k].user_cases == home[i].case_number) {
                        if (dbscanData[k].CLUSTER_ID == -1) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#868282',
                                fillColor: '#868282',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 1) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#e41a1c',
                                fillColor: '#e41a1c',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 2) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#377eb8',
                                fillColor: '#377eb8',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 3) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#4daf4a',
                                fillColor: '#4daf4a',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 4) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#984ea3',
                                fillColor: '#984ea3',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 5) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#ff7f00',
                                fillColor: '#ff7f00',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 6) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#ffff33',
                                fillColor: '#ffff33',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 7) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#a65628',
                                fillColor: '#a65628',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 8) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#f781bf',
                                fillColor: '#f781bf',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        } else if (dbscanData[k].CLUSTER_ID == 9) {
                            var circle = L.circle([home[i].home_Y, home[i].home_X], 15, {
                                color: '#585c0b',
                                fillColor: '#585c0b',
                                fillOpacity: 1
                            }).addTo(dbscanLayer);
                        }

                    }

                }


            }


        }

    }
    var flowmapLayer = L.canvasFlowmapLayer(geoJsonFeatureCollection, {
        originAndDestinationFieldIds: {
            originUniqueIdField: 'original_ID',
            originGeometry: {
                x: 'original_lon',
                y: 'original_lat'
            },
            destinationUniqueIdField: 'destination_ID',
            destinationGeometry: {
                x: 'destination_lon',
                y: 'destination_lat'
            }
        },
        animationStarted: true,
        animationEasingFamily: 'Cubic',
        animationEasingType: 'In',
        animationDuration: 5000
    }).addTo(linksLayer);
    var heatlay = L.heatLayer(
        heat,
        {radius: 25, gradient: {0.2: '#fee391', 0.4: '#fec44f', 0.6: '#fe9929', 0.8: '#d95f0e',1:'#993404'}},
    ).addTo(heatLayer);


    layerscontrol = L.control.layers(null, overlayMaps2).addTo(map);

}

function loadImported() {
    var pie = document.getElementsByClassName("pie");
    pie[0].style.visibility = "hidden";
    var all = document.getElementsByClassName("all");
    all[0].style.visibility = "hidden";
    var dom = document.getElementsByClassName("domestic");
    dom[0].style.visibility = "hidden";
    dom[1].style.visibility = "hidden";
    var imp = document.getElementsByClassName("import");
    imp[0].style.visibility = "visible";
    addLayer3(imported)
    var ndx2 = crossfilter(imported)
    var caseAll = ndx2.groupAll();
    dc.dataCount('#caseNum1')
        .dimension(ndx2)
        .group(caseAll);

    var dateDim = ndx2.dimension(function (d) {
        return d.date;
    });
    var dateGroup = dateDim.group().reduceCount(function (d) {
        return d.date;
    });
    var dateScale = d3.scaleTime()
        .domain([new Date(2020, 0, 23), new Date(2020, 2, 1)])
    var numScale = d3.scaleLinear()
        .domain([0, 10]);
    barChart1
        .x(dateScale)
        .y(numScale)
        .yAxisLabel("Cases")
        .xAxisLabel("Date")
        .dimension(dateDim)
        .centerBar(true)
        .group(dateGroup)
        .controlsUseVisibility(true)
        .on('filtered', function (chart, filter) {
            hotelLayer2.clearLayers()
            layerscontrol.remove(map)
            addLayer3(dateDim.top(200))
                if (filter != null) {
                    var from_date = formatDate(filter[0])
                    var to_date = formatDate(filter[1])
                    $('#dateFilter').html(from_date + " - " + to_date);
                } else {
                    $('#dateFilter').html("Jan 24 - Feb 29");
                }
            }
        );


    barChart1.xAxis()
        .tickFormat(d3.timeFormat("%b %d"))
        .tickValues(
            [new Date(2020, 0, 24),
                new Date(2020, 0, 26),
                new Date(2020, 0, 28),
                new Date(2020, 0, 30),
                new Date(2020, 1, 1),
                new Date(2020, 1, 3),
                new Date(2020, 1, 5),
                new Date(2020, 1, 7),
                new Date(2020, 1, 9),
                new Date(2020, 1, 11),
                new Date(2020, 1, 13),
                new Date(2020, 1, 15),
                new Date(2020, 1, 17),
                new Date(2020, 1, 19),
                new Date(2020, 1, 21),
                new Date(2020, 1, 23),
                new Date(2020, 1, 25),
                new Date(2020, 1, 27),
                new Date(2020, 1, 29)]);
    barChart1.render()

}

function addLayer3(data) {
    for (var i = 0; i < data.length; i++) {
        for (var n = 0; n < hotelData.length; n++) {
            if (hotelData[n].case_number == data[i].case_number && hotelData[n].hotel_Y != null && hotelData[n].hotel_X != null) {
                var circle = L.circle([hotelData[n].hotel_Y, hotelData[n].hotel_X], 15, {
                    color: '#b3cde3',
                    fillColor: '#b3cde3',
                    fillOpacity: 1
                }).addTo(hotelLayer2);
            }
        }
    }


    layerscontrol = L.control.layers(null, overlayMaps3).addTo(map);
}

function loadEvacuate() {
    var pie = document.getElementsByClassName("pie");
    pie[0].style.visibility = "hidden";
    var all = document.getElementsByClassName("all");
    all[0].style.visibility = "hidden";
    var dom = document.getElementsByClassName("domestic");
    dom[0].style.visibility = "hidden";
    dom[1].style.visibility = "hidden";
    var imp = document.getElementsByClassName("import");
    imp[0].style.visibility = "hidden";
    var ndx3 = crossfilter(evacuate)
    var caseAll = ndx3.groupAll();
    dc.dataCount('#caseNum1')
        .dimension(ndx3)
        .group(caseAll);

    var dateDim = ndx3.dimension(function (d) {
        return d.date;
    });
    var dateGroup = dateDim.group().reduceCount(function (d) {
        return d.date;
    });
    var dateScale = d3.scaleTime()
        .domain([new Date(2020, 0, 23), new Date(2020, 2, 1)])
    var numScale = d3.scaleLinear()
        .domain([0, 10]);
    barChart1
        .x(dateScale)
        .y(numScale)
        .yAxisLabel("Cases")
        .xAxisLabel("Date")
        .dimension(dateDim)
        .centerBar(true)
        .group(dateGroup)
        .controlsUseVisibility(true)
        .on('filtered', function (chart, filter) {
                if (filter != null) {
                    var from_date = formatDate(filter[0])
                    var to_date = formatDate(filter[1])
                    $('#dateFilter').html(from_date + " - " + to_date);
                } else {
                    $('#dateFilter').html("Jan 24 - Feb 29");
                }
            }
        );


    barChart1.xAxis()
        .tickFormat(d3.timeFormat("%b %d"))
        .tickValues(
            [new Date(2020, 0, 24),
                new Date(2020, 0, 26),
                new Date(2020, 0, 28),
                new Date(2020, 0, 30),
                new Date(2020, 1, 1),
                new Date(2020, 1, 3),
                new Date(2020, 1, 5),
                new Date(2020, 1, 7),
                new Date(2020, 1, 9),
                new Date(2020, 1, 11),
                new Date(2020, 1, 13),
                new Date(2020, 1, 15),
                new Date(2020, 1, 17),
                new Date(2020, 1, 19),
                new Date(2020, 1, 21),
                new Date(2020, 1, 23),
                new Date(2020, 1, 25),
                new Date(2020, 1, 27),
                new Date(2020, 1, 29)]);
    barChart1.render()

}