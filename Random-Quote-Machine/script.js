var quotes = [
	{	
		title:"悯农",
		quote:"锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。",
		author:"李绅",
	},
	{	
		title:"新嫁娘词",
		quote:"三日入厨下，洗手作羹汤。未谙姑食性，先遣小姑尝。",
		author:"王建",
	},
	{
		title:"春望",
		quote:"国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。",
		author:"杜甫",
	},
	{	
		title:"十一月四日风雨大作",
		quote:"僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。",
		author:"陆游",
	},
	{	
		title:"静夜思",
		quote:"床前明月光，疑是地上霜。举头望明月，低头思故乡。",
		author:"李白",
	},
	{
		title:"春日",
		quote:"胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。",
		author:"朱熹",
	},
	{	
		title:"望岳",
		quote:"岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。",
		author:"杜甫",
	},
	{	
		title:"题西林壁",
		quote:"横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。",
		author:"苏轼",
	},
	{
		title:"次北固山下",
		quote:"客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。",
		author:"王湾",
	},
	{	
		title:"滁州西涧",
		quote:"独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。",
		author:"韦应物",
	},
	{	
		title:"江畔独步寻花",
		quote:"黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。",
		author:"杜甫",
	},
	{
		title:"竹石",
		quote:"咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。",
		author:"郑燮",
	},
	{	
		title:"观书有感",
		quote:"半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许？为有源头活水来。",
		author:"朱熹",
	},
	{	
		title:"离思五首·其四",
		quote:"曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。",
		author:"元稹",
	},
	{
		title:"凉州词二首·其一",
		quote:"葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？",
		author:"王翰",
	},
	{	
		title:"登乐游原",
		quote:"向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。",
		author:"白居易",
	},
	{	
		title:"少年行四首·其三",
		quote:"弓背霞明剑照霜，秋风走马出咸阳。未收天子河湟地，不拟回头望故乡。",
		author:"令狐楚",
	},
	{
		title:"钗头凤·红酥手",
		quote:"红酥手，黄縢酒，满城春色宫墙柳。东风恶，欢情薄。一怀愁绪，几年离索。错、错、错。春如旧，人空瘦，泪痕红浥鲛绡透。桃花落，闲池阁。山盟虽在，锦书难托。莫、莫、莫！",
		author:"陆游",
	},
	{	
		title:"锦瑟",
		quote:"锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。",
		author:"李商隐",
	},
	{	
		title:"题乌江亭",
		quote:"胜败兵家事不期，包羞忍耻是男儿。江东子弟多才俊，卷土重来未可知。",
		author:"杜牧",
	},
	{
		title:"临江仙",
		quote:"梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。记得小蘋初见，两重心字罗衣。琵琶弦上说相思。当时明月在，曾照彩云归。",
		author:"晏几道",
	},
	{	
		title:"西江月",
		quote:"宝髻松松挽就，铅华淡淡妆成。青烟翠雾罩轻盈，飞絮游丝无定。相见争如不见，多情何似无情。笙歌散后酒初醒，深院月斜人静。",
		author:"司马光",
	},
	{	
		title:"虞美人",
		quote:"曲阑深处重相见，匀泪偎人颤。凄凉别后两应同，最是不胜清怨月明中。半生已分孤眠过，山枕檀痕涴。忆来何事最销魂，第一折枝花样画罗裙。",
		author:"李煜",
	},
	{
		title:"江城子·乙卯正月二十日夜记梦",
		quote:"十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。",
		author:"苏轼",
	},
	{	
		title:"卜算子",
		quote:"我住长江头，君住长江尾。日日思君不见君，共饮长江水。此水几时休，此恨何时已。只愿君心似我心，定不负相思意。",
		author:"李之仪",
	},
	{	
		title:"古怨别",
		quote:"飒飒秋风生，愁人怨离别。含情两相向，欲语气先咽。心曲千万端，悲来却难说。别后唯所思，天涯共明月。",
		author:"孟郊",
	},
	{
		title:"遣怀",
		quote:"落魄江湖载酒行，楚腰纤细掌中轻。十年一觉扬州梦，赢得青楼薄幸名。",
		author:"杜牧",
	},
	{	
		title:"春宫怨",
		quote:"早被婵娟误，欲归临镜慵。承恩不在貌，教妾若为容。风暖鸟声碎，日高花影重。年年越溪女，相忆采芙蓉。",
		author:"杜荀鹤",
	},
	{	
		title:"贫女",
		quote:"蓬门未识绮罗香，拟托良媒益自伤。谁爱风流高格调，共怜时世俭梳妆。敢将十指夸针巧，不把双眉斗画长。苦恨年年压金线，为他人作嫁衣裳。",
		author:"秦韬玉",
	},
	{
		title:"春思",
		quote:"莺啼燕语报新年，马邑龙堆路几千。家住层城临汉苑，心随明月到胡天。机中锦字论长恨，楼上花枝笑独眠。为问元戎窦车骑，何时返旆勒燕然。",
		author:"皇甫冉",
	},
	{	
		title:"金陵图",
		quote:"江雨霏霏江草齐，六朝如梦鸟空啼。无情最是台城柳，依旧烟笼十里堤。",
		author:"韦庄",
	},
	{	
		title:"桃花溪",
		quote:"隐隐飞桥隔野烟，石矾西畔问渔船。桃花尽日随流水，洞在清溪何处边。",
		author:"张旭"
	},
	{
		title:"夜雨寄北",
		quote:"君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。",
		author:"李商隐"
	},
	{	
		title:"闺怨",
		quote:"闺中少妇不知愁，春日凝妆上翠楼。忽见陌头杨柳色，悔教夫婿觅封侯。",
		author:"王昌龄"
	},
	{	
		title:"乌衣巷",
		quote:"朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。",
		author:"刘禹锡"
	},
	{
		title:"宫词",
		quote:"故国三千里，深宫二十年。一声何满子，双泪落君前。",
		author:"张祜"
	},
	{	
		title:"鹊桥仙",
		quote:"纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。柔情似水，佳期如梦，忍顾鹊桥归路。两情若是久长时，又岂在朝朝暮暮。",
		author:"秦观"
	},
	{
		title:"无题",
		quote:"昨夜星辰昨夜风，画楼西畔桂堂东。身无彩凤双飞翼，心有灵犀一点通。隔座送钩春酒暖，分曹射覆蜡灯红。嗟余听鼓应官去，走马兰台类转蓬。",
		author:"李商隐"
	},
	{	
		title:"蝶恋花·春暮",
		quote:"遥夜亭皋闲信步。才过清明，渐觉伤春暮。数点雨声风约住。朦胧淡月云来去。桃杏依稀香暗渡。谁在秋千，笑里轻轻语。一寸相思千万绪。人间没个安排处。",
		author:"李冠"
	},
	{
		title:"涉江采芙蓉",
		quote:"涉江采芙蓉，兰泽多芳草。采之欲遗谁，所思在远道。还顾望旧乡，长路漫浩浩。同心而离居，忧伤以终老。",
		author:"佚名"
	}
]
var color = ["#56A36C","#5E8579","#77C34F","#2E68AA","#7E884F","#57D2F7","#726DD1","#00B38C","#00B0F0","#82ABBA","#58D2E8","#B3D1C1","#DBD9B7","#BAD4AA","#96C4E6","#BCD0C5","#767ec7","#48A7C2"];
console.log(color.length);
console.log(quotes.length);
var title = document.getElementById('title');
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var wrap = document.getElementById('quoteWrapper');
var share = document.getElementById('share');
var getQuote = document.getElementById('getQuote');
var shareLink = document.querySelector('#share a'); 
getQuote.addEventListener('click',function(){
	var index = Math.floor(Math.random()*40);
	var colorindex=Math.floor(Math.random()*18);
	quote.innerHTML = quotes[index].quote.replace(/[\u3002]/g,'。<br>');
	title.textContent = quotes[index].title;
	author.textContent = quotes[index].author;
	title.style.color = color[colorindex];
	author.style.color = color[colorindex];
	quote.style.color = color[colorindex];
	wrap.style.backgroundColor = color[colorindex];
	share.style.backgroundColor = color[colorindex];
	shareLink.setAttribute('href','https://twitter.com/intent/tweet?text='+quote.textContent+'——'+author.textContent+'《'+title.textContent+'》');
	console.log(shareLink.getAttribute('href'));
	getQuote.style.backgroundColor = color[colorindex];

});
