const events = [
  { id:"c-yuanmou", sort:-1700000, year:"距今约170万年", region:"china", title:"元谋人", summary:"中国境内目前已确认的最早古人类之一，体现中国是远古人类的重要起源地。", topics:["civilization"], source:"上册第1课；上册附录·中国古代史大事年表" },
  { id:"c-neolithic", sort:-10000, year:"距今约1万年", region:"china", title:"进入新石器时代", summary:"磨制石器、陶器和原始农业发展，定居生活逐渐形成，中华文明多元一体的基础逐步奠定。", topics:["civilization","economy"], source:"上册第1课；下册附录·中外历史大事年表" },
  { id:"w-agriculture", sort:-9999, year:"距今约1万年", region:"world", title:"原始农业产生", summary:"人类由食物采集者转变为食物生产者，社会分工和阶级分化推动文明与国家产生。", topics:["civilization","economy"], source:"下册第1课；下册附录·中外历史大事年表" },
  { id:"w-egypt", sort:-3100, year:"约公元前3100年", region:"world", title:"埃及初步统一", summary:"尼罗河流域形成统一国家，法老掌握政治、经济和军事等大权。", topics:["civilization","state"], source:"下册第1课；下册附录·中外历史大事年表" },
  { id:"w-sumer", sort:-2900, year:"约公元前2900年", region:"world", title:"苏美尔城市国家", summary:"两河流域出现一系列城市国家，楔形文字等文明成果逐步形成。", topics:["civilization","state","thought"], source:"下册第1课；下册附录·中外历史大事年表" },
  { id:"c-xia", sort:-2070, year:"约公元前2070年", region:"china", title:"夏朝建立", summary:"禹建立我国最早的奴隶制国家，启继位后世袭制取代禅让制。", topics:["civilization","state"], source:"上册第1课；上册附录·中国古代朝代表" },
  { id:"w-babylon", sort:-1800, year:"约公元前18世纪", region:"world", title:"古巴比伦统一两河流域", summary:"汉谟拉比基本统一两河流域并颁布法典，反映奴隶主阶级维护统治的需要。", topics:["civilization","state"], source:"下册第1课；下册附录·中外历史大事年表" },
  { id:"c-shang", sort:-1600, year:"约公元前1600年", region:"china", title:"商朝建立", summary:"汤灭夏建商，内外服制、甲骨文和发达的青铜文化体现早期国家的发展。", topics:["civilization","state","thought"], source:"上册第1课；上册附录·中国古代史大事年表" },
  { id:"c-zhou", sort:-1046, year:"公元前1046年", region:"china", title:"西周建立", summary:"周武王伐纣灭商；分封制与宗法制相互补充，形成等级秩序。", topics:["state","civilization"], source:"上册第1课；上册附录·中国古代史大事年表" },
  { id:"w-greek-city", sort:-800, year:"公元前8世纪", region:"world", title:"希腊城邦兴起", summary:"小国寡民、独立自治的城邦逐渐兴起，雅典民主政治和斯巴达寡头政治各具特点。", topics:["civilization","state"], source:"下册第1课；下册附录·中外历史大事年表" },
  { id:"c-spring-autumn", sort:-770, year:"公元前770—前221年", region:"china", title:"春秋战国大变革", summary:"王室衰微、诸侯争霸兼并；铁犁牛耕、变法运动与百家争鸣共同推动社会转型。", topics:["state","economy","thought"], source:"上册第2课；下册附录·中外历史大事年表" },
  { id:"w-persia", sort:-550, year:"公元前6世纪", region:"world", title:"波斯帝国兴起", summary:"波斯建立地跨亚非欧的大帝国，实行行省制并修建交通网络，促进区域联系。", topics:["state","civilization"], source:"下册第2课；下册附录·中外历史大事年表" },
  { id:"c-shangyang", sort:-356, year:"公元前356年", region:"china", title:"商鞅变法", summary:"废井田、奖励耕战、推行县制，使秦国国富兵强，为统一奠定基础。", topics:["state","economy"], source:"上册第2课；上册附录·中国古代史大事年表" },
  { id:"w-alexander", sort:-330, year:"公元前4世纪晚期", region:"world", title:"亚历山大帝国", summary:"亚历山大灭亡波斯帝国，推动希腊文化与西亚、北非文化的交流融合。", topics:["civilization","order"], source:"下册第2课；下册附录·中外历史大事年表" },
  { id:"c-qin", sort:-221, year:"公元前221年", region:"china", title:"秦统一六国", summary:"建立统一多民族封建国家，确立皇帝制、三公九卿制和郡县制，统一文字、货币与度量衡。", topics:["state","civilization"], source:"上册第3课；上册附录·中国古代史大事年表" },
  { id:"c-han", sort:-202, year:"公元前202年", region:"china", title:"西汉建立", summary:"刘邦建立西汉；文景之治、汉武帝加强中央集权，统一多民族国家得到巩固。", topics:["state","civilization","economy"], source:"上册第4课；上册附录·中国古代史大事年表" },
  { id:"w-rome", sort:-27, year:"公元前1世纪末", region:"world", title:"罗马帝国建立", summary:"罗马统一地中海地区，奴隶制经济和道路体系促进帝国内部及欧亚间联系。", topics:["state","civilization","order"], source:"下册第2课；下册附录·中外历史大事年表" },
  { id:"c-east-han", sort:25, year:"25年", region:"china", title:"东汉建立", summary:"刘秀重建汉朝，前期出现“光武中兴”，后期外戚宦官交替专权、豪强势力发展。", topics:["state"], source:"上册第4课；上册附录·中国古代史大事年表" },
  { id:"w-rome-peak", sort:100, year:"1—2世纪", region:"world", title:"罗马帝国繁荣", summary:"帝国空前繁荣，丝绸之路使汉朝与罗马之间建立间接的经济文化联系。", topics:["civilization","economy"], source:"下册第2课；下册附录·中外历史大事年表" },
  { id:"c-three-kingdoms", sort:220, year:"220年起", region:"china", title:"三国两晋南北朝", summary:"政权更迭频繁，江南得到开发，北方民族交融加强，为隋唐统一繁荣准备条件。", topics:["state","civilization","economy"], source:"上册第5课；上册附录·中国古代史大事年表" },
  { id:"w-gupta", sort:320, year:"4世纪初", region:"world", title:"笈多帝国兴起", summary:"恒河中游的笈多帝国一度强盛，印度教逐渐发展为主要宗教。", topics:["civilization","state","thought"], source:"下册第4课；下册附录·中外历史大事年表" },
  { id:"w-west-rome", sort:476, year:"5世纪后期", region:"world", title:"西罗马帝国灭亡", summary:"西欧开始进入封建社会，封君封臣制度、庄园与农奴制逐渐形成。", topics:["state","economy"], source:"下册第3课；下册附录·中外历史大事年表" },
  { id:"w-roman-law", sort:529, year:"6世纪", region:"world", title:"《罗马民法大全》", summary:"拜占庭皇帝查士丁尼时期编订，是古罗马法律的总结和后世大陆法系的重要基础。", topics:["state","thought"], source:"下册第3课；下册附录·中外历史大事年表" },
  { id:"c-sui", sort:581, year:"581年", region:"china", title:"隋朝建立", summary:"隋结束长期分裂，开通大运河，制度建设为唐朝繁荣奠定基础。", topics:["state","economy"], source:"上册第6、7课；上册附录·中国古代史大事年表" },
  { id:"c-tang", sort:618, year:"618年", region:"china", title:"唐朝建立", summary:"三省六部制、科举制趋于完善；贞观之治与开元盛世体现统一王朝的繁荣开放。", topics:["state","economy","civilization","thought"], source:"上册第6—8课；下册附录·中外历史大事年表" },
  { id:"w-islam", sort:622, year:"7世纪初", region:"world", title:"伊斯兰教创立", summary:"穆罕默德创立伊斯兰教，阿拉伯半岛逐渐统一，随后形成地跨三洲的帝国。", topics:["civilization","thought","order"], source:"下册第4课；下册附录·中外历史大事年表" },
  { id:"w-taika", sort:646, year:"646年", region:"world", title:"日本大化改新", summary:"日本模仿隋唐制度实行改革，建立中央集权国家。", topics:["state","civilization"], source:"下册第4课；下册附录·中外历史大事年表" },
  { id:"c-anlushan", sort:755, year:"755—763年", region:"china", title:"安史之乱", summary:"唐朝由盛转衰，藩镇割据、宦官专权和朋党之争加剧。", topics:["state"], source:"上册第6课；上册附录·中国古代史大事年表" },
  { id:"w-arab", sort:750, year:"8世纪中期", region:"world", title:"阿拉伯帝国鼎盛", summary:"帝国地跨亚非欧，阿拉伯商人和学者成为东西方文化交流的重要桥梁。", topics:["civilization","economy","thought"], source:"下册第4课；下册附录·中外历史大事年表" },
  { id:"c-song", sort:960, year:"960年", region:"china", title:"北宋建立", summary:"宋初强化中央集权；商品经济、城市和海外贸易发展，文化科技成就突出。", topics:["state","economy","thought"], source:"上册第9、11课；下册附录·中外历史大事年表" },
  { id:"w-city", sort:1000, year:"10—11世纪", region:"world", title:"西欧城市兴起", summary:"工商业发展推动城市自治和市民阶层壮大，为王权强化和资本主义萌芽创造条件。", topics:["economy","state"], source:"下册第3课；下册附录·中外历史大事年表" },
  { id:"c-jin", sort:1115, year:"1115年", region:"china", title:"金朝建立", summary:"女真族建立金朝，先后灭辽和北宋；各民族政权并立、交往与交融持续发展。", topics:["state","civilization"], source:"上册第10课；下册附录·中外历史大事年表" },
  { id:"w-kamakura", sort:1192, year:"12世纪末", region:"world", title:"日本镰仓幕府", summary:"日本进入幕府统治时期，天皇保留名义地位，武士集团掌握实权。", topics:["state"], source:"下册第4课；下册附录·中外历史大事年表" },
  { id:"c-yuan", sort:1271, year:"1271年", region:"china", title:"元朝建立", summary:"忽必烈定国号为元，实行行省制，加强对西藏、台湾等地区的管辖。", topics:["state","civilization"], source:"上册第10课；下册附录·中外历史大事年表" },
  { id:"c-ming", sort:1368, year:"1368年", region:"china", title:"明朝建立", summary:"废除宰相、设内阁，中央集权进一步加强；经济文化出现新变化。", topics:["state","economy","thought"], source:"上册第12、14课；下册附录·中外历史大事年表" },
  { id:"w-renaissance", sort:1400, year:"14世纪—17世纪初", region:"world", title:"文艺复兴", summary:"以人文主义为精神内核，肯定人的价值，为资本主义制度建立作思想解放准备。", topics:["thought","capitalism"], source:"下册第8课；下册附录·中外历史大事年表" },
  { id:"c-zhenghe", sort:1405, year:"1405—1433年", region:"china", title:"郑和下西洋", summary:"七次远航最远到达非洲东海岸和红海沿岸，展示明朝国力并扩大海外影响。", topics:["civilization","economy"], source:"上册第12课；上册附录·中国古代史大事年表" },
  { id:"w-columbus", sort:1492, year:"1492年", region:"world", title:"哥伦布到达美洲", summary:"新航路开辟的重要节点，推动世界由分散走向整体，也开启殖民扩张与掠夺。", topics:["economy","capitalism","order","globalization"], source:"下册第6、7课；下册附录·中外历史大事年表" },
  { id:"w-voyage", sort:1522, year:"1522年", region:"world", title:"首次环球航行完成", summary:"麦哲伦船队完成环球航行，证明了地圆说，全球海路联系进一步形成。", topics:["economy","globalization","thought"], source:"下册第6课；下册附录·中外历史大事年表" },
  { id:"w-reformation", sort:1517, year:"1517年", region:"world", title:"宗教改革开始", summary:"马丁·路德发布《九十五条论纲》，打破天主教会的精神垄断，推动思想解放。", topics:["thought","capitalism"], source:"下册第8课；下册附录·中外历史大事年表" },
  { id:"c-qing", sort:1636, year:"1636年", region:"china", title:"清朝国号确立", summary:"皇太极改国号为大清；清军入关后建立全国性政权，统一多民族国家进一步巩固。", topics:["state","civilization"], source:"上册第12、13课；下册附录·中外历史大事年表" },
  { id:"w-english-rev", sort:1640, year:"1640年", region:"world", title:"英国资产阶级革命", summary:"革命与“光荣革命”后，议会通过《权利法案》，君主立宪制逐步确立。", topics:["capitalism","state"], source:"下册第9课；下册附录·中外历史大事年表" },
  { id:"c-taiwan", sort:1662, year:"1662年", region:"china", title:"郑成功收复台湾", summary:"郑成功驱逐荷兰殖民者；1684年清朝设置台湾府，加强东南海疆治理。", topics:["state","national"], source:"上册第13课；下册附录·中外历史大事年表" },
  { id:"c-nerchinsk", sort:1689, year:"1689年", region:"china", title:"《尼布楚条约》", summary:"中俄双方签订边界条约，从法律上肯定黑龙江和乌苏里江流域包括库页岛在内是中国领土。", topics:["state","order"], source:"上册第13课；下册附录·中外历史大事年表" },
  { id:"w-enlightenment", sort:1750, year:"17—18世纪", region:"world", title:"启蒙运动", summary:"理性主义高扬，天赋人权、权力制衡、社会契约等主张为资产阶级革命提供思想武器。", topics:["thought","capitalism"], source:"下册第8课；下册附录·中外历史大事年表" },
  { id:"w-industry1", sort:1760, year:"18世纪中期—19世纪中期", region:"world", title:"第一次工业革命", summary:"机器生产取代手工劳动，工厂制度形成，工业化和城市化加快，资本主义世界市场扩大。", topics:["economy","capitalism","globalization"], source:"下册第10课；下册附录·中外历史大事年表" },
  { id:"w-america", sort:1776, year:"1775—1787年", region:"world", title:"美国独立与1787年宪法", summary:"美国摆脱英国殖民统治，并依据分权制衡原则建立联邦制共和国。", topics:["capitalism","state","national"], source:"下册第9课；下册附录·中外历史大事年表" },
  { id:"w-france", sort:1789, year:"1789年", region:"world", title:"法国大革命", summary:"沉重打击欧洲封建制度，传播自由、平等思想，推动资本主义制度扩展。", topics:["capitalism","state","thought"], source:"下册第9课；下册附录·中外历史大事年表" },
  { id:"c-opium", sort:1840, year:"1840—1842年", region:"china", title:"鸦片战争", summary:"中国开始沦为半殖民地半封建社会，近代史开端；民族危机与救亡图存成为时代主题。", topics:["national","order","economy"], source:"上册第15课；上册附录·中国近代史大事年表" },
  { id:"w-communist-manifesto", sort:1848, year:"1848年", region:"world", title:"《共产党宣言》发表", summary:"标志马克思主义诞生，社会主义理论从空想走向科学。", topics:["socialism","thought"], source:"下册第11课；下册附录·中外历史大事年表" },
  { id:"c-taiping", sort:1851, year:"1851—1864年", region:"china", title:"太平天国运动", summary:"规模宏大的农民战争，沉重打击清王朝统治，但受农民阶级局限最终失败。", topics:["national","state"], source:"上册第16课；上册附录·中国近代史大事年表" },
  { id:"c-selfstrength", sort:1861, year:"19世纪60—90年代", region:"china", title:"洋务运动", summary:"以“自强”“求富”为口号创办近代企业、海军和新式学堂，是中国早期现代化尝试。", topics:["national","economy","thought"], source:"上册第16课；上册附录·中国近代史大事年表" },
  { id:"w-reform-1860", sort:1861, year:"1861—1871年", region:"world", title:"资本主义制度扩展", summary:"俄国农奴制改革、美国内战、德意志与意大利统一、日本明治维新推动资本主义扩展。", topics:["capitalism","state","economy"], source:"下册第9课；下册附录·中外历史大事年表" },
  { id:"w-paris", sort:1871, year:"1871年", region:"world", title:"巴黎公社", summary:"无产阶级建立政权的第一次伟大尝试，为国际工人运动提供宝贵经验。", topics:["socialism","state"], source:"下册第11课；下册附录·中外历史大事年表" },
  { id:"c-sinojapanese", sort:1894, year:"1894—1895年", region:"china", title:"甲午中日战争", summary:"清政府战败并签订《马关条约》，民族危机加深，列强掀起瓜分中国狂潮。", topics:["national","order"], source:"上册第16课；上册附录·中国近代史大事年表" },
  { id:"c-reform1898", sort:1898, year:"1898年", region:"china", title:"戊戌变法", summary:"维新派试图通过自上而下改革救亡图存，推动新思想传播，但很快失败。", topics:["national","thought","state"], source:"上册第17课；上册附录·中国近代史大事年表" },
  { id:"w-colonial-system", sort:1900, year:"19世纪末20世纪初", region:"world", title:"世界殖民体系形成", summary:"资本主义世界经济体系和殖民体系最终形成，主要资本主义国家进入帝国主义阶段。", topics:["capitalism","order","globalization","national"], source:"下册第12课；下册附录·中外历史大事年表" },
  { id:"c-boxer", sort:1900, year:"1900—1901年", region:"china", title:"义和团与八国联军侵华", summary:"义和团运动具有强烈反帝爱国倾向；《辛丑条约》使中国完全陷入半殖民地半封建社会深渊。", topics:["national","order"], source:"上册第17课；上册附录·中国近代史大事年表" },
  { id:"c-1911", sort:1911, year:"1911—1912年", region:"china", title:"辛亥革命与中华民国", summary:"推翻清王朝统治，结束君主专制制度，建立共和政体，传播民主共和理念。", topics:["national","state","thought"], source:"上册第18课；上册附录·中国近代史大事年表" },
  { id:"w-ww1", sort:1914, year:"1914—1918年", region:"world", title:"第一次世界大战", summary:"帝国主义国家之间的战争造成巨大灾难，削弱欧洲力量并推动国际格局变化。", topics:["order","national"], source:"下册第14课；下册附录·中外历史大事年表" },
  { id:"w-october", sort:1917, year:"1917年", region:"world", title:"俄国十月革命", summary:"建立世界上第一个社会主义国家，开辟人类探索社会主义道路的新纪元。", topics:["socialism","order"], source:"下册第15课；下册附录·中外历史大事年表" },
  { id:"c-may4", sort:1919, year:"1919年", region:"china", title:"五四运动", summary:"彻底反帝反封建的伟大爱国革命运动，促进马克思主义传播，是新民主主义革命开端。", topics:["national","thought","socialism"], source:"上册第20课；上册附录·中国近代史大事年表" },
  { id:"w-versailles", sort:1919.1, year:"1919—1922年", region:"world", title:"凡尔赛—华盛顿体系", summary:"战胜国通过巴黎和会、华盛顿会议建立战后国际秩序，但内部矛盾孕育新的冲突。", topics:["order"], source:"下册第14课；下册附录·中外历史大事年表" },
  { id:"c-ccp", sort:1921, year:"1921年", region:"china", title:"中国共产党成立", summary:"中国出现以马克思主义为指导、勇担民族复兴使命的新型政党，中国革命面貌焕然一新。", topics:["national","socialism","thought"], source:"上册第20课；上册附录·中国近代史大事年表" },
  { id:"w-nep", sort:1921.1, year:"1921年", region:"world", title:"苏俄新经济政策", summary:"利用市场和商品货币关系恢复经济，是向社会主义过渡道路的重要探索。", topics:["socialism","economy"], source:"下册第15课；下册附录·中外历史大事年表" },
  { id:"c-national-rev", sort:1924, year:"1924—1927年", region:"china", title:"国共合作与国民革命", summary:"第一次国共合作形成，北伐取得重大进展；国民党右派叛变革命导致失败。", topics:["national","state"], source:"上册第21课；上册附录·中国近代史大事年表" },
  { id:"c-new-road", sort:1927.1, year:"1927年起", region:"china", title:"革命新道路", summary:"南昌起义、八七会议、秋收起义后，中国共产党探索农村包围城市、武装夺取政权道路。", topics:["national","socialism"], source:"上册第21课；上册附录·中国近代史大事年表" },
  { id:"w-depression", sort:1929, year:"1929—1933年", region:"world", title:"资本主义经济大危机", summary:"危机席卷资本主义世界，美国实行罗斯福新政，德日法西斯势力扩张。", topics:["capitalism","economy","order"], source:"下册第17、19课；下册附录·中外历史大事年表" },
  { id:"c-september18", sort:1931, year:"1931年", region:"china", title:"九一八事变", summary:"日本侵占中国东北，中国人民局部抗战开始，民族危机空前加深。", topics:["national","order"], source:"上册第22课；上册附录·中国近代史大事年表" },
  { id:"c-longmarch", sort:1934, year:"1934—1936年", region:"china", title:"长征与遵义会议", summary:"遵义会议开始确立以毛泽东为主要代表的马克思主义正确路线在党中央的领导地位，长征实现战略转移。", topics:["national","socialism"], source:"上册第21课；上册附录·中国近代史大事年表" },
  { id:"c-war-resistance", sort:1937, year:"1937—1945年", region:"china", title:"全民族抗战", summary:"七七事变后全民族抗战开始，抗日民族统一战线形成；中国战场是世界反法西斯战争东方主战场。", topics:["national","order"], source:"上册第22、23课；上册附录·中国近代史大事年表" },
  { id:"w-ww2", sort:1939, year:"1939—1945年", region:"world", title:"第二次世界大战", summary:"法西斯侵略给人类带来空前灾难，世界反法西斯同盟最终取得胜利，联合国成立。", topics:["order","national"], source:"下册第17课；下册附录·中外历史大事年表" },
  { id:"c-liberation", sort:1946, year:"1946—1949年", region:"china", title:"人民解放战争", summary:"土地改革赢得民心，三大战役基本摧毁国民党主要军事力量，渡江战役结束国民党大陆统治。", topics:["national","socialism","state"], source:"上册第24课；上册附录·中国近代史大事年表" },
  { id:"w-coldwar", sort:1947, year:"1947年起", region:"world", title:"冷战开始", summary:"杜鲁门主义出台，美苏在政治、经济、军事和意识形态领域全面对抗，两极格局逐步形成。", topics:["order","socialism","capitalism"], source:"下册第18课；下册附录·中外历史大事年表" },
  { id:"c-prc", sort:1949, year:"1949年10月1日", region:"china", title:"中华人民共和国成立", summary:"结束帝国主义、封建主义和官僚资本主义长期压迫，人民真正成为国家主人。", topics:["state","national","socialism"], source:"上册第25课；上册附录·中国现代史大事年表" },
  { id:"c-transition", sort:1953, year:"1953—1956年", region:"china", title:"过渡时期总路线与三大改造", summary:"实施“一五”计划，工业化起步；社会主义改造基本完成，社会主义基本制度建立。", topics:["economy","socialism","state"], source:"上册第25课；上册附录·中国现代史大事年表" },
  { id:"w-decolonization", sort:1960, year:"20世纪50—60年代", region:"world", title:"殖民体系走向瓦解", summary:"亚非拉民族解放运动高涨，1960年被称为“非洲年”，世界殖民体系迅速崩溃。", topics:["national","order"], source:"下册第21课；下册附录·中外历史大事年表" },
  { id:"c-construction", sort:1964, year:"1956—1976年", region:"china", title:"社会主义建设探索", summary:"虽经历曲折，仍建立独立、较完整的工业体系和国民经济体系，国防科技取得突破。", topics:["economy","socialism"], source:"上册第26课；上册附录·中国现代史大事年表" },
  { id:"c-un", sort:1971, year:"1971年", region:"china", title:"恢复联合国合法席位", summary:"中华人民共和国恢复在联合国的一切合法权利，外交空间进一步打开。", topics:["order","national"], source:"上册第26课；上册附录·中国现代史大事年表" },
  { id:"c-diplomacy72", sort:1972, year:"1972年", region:"china", title:"中美关系正常化与中日建交", summary:"中美发表联合公报，中日正式建交，中国外交打开新局面。", topics:["order","national"], source:"上册第26课；上册附录·中国现代史大事年表" },
  { id:"c-reform", sort:1978, year:"1978年12月", region:"china", title:"中共十一届三中全会", summary:"实现新中国成立以来党的历史上具有深远意义的伟大转折，开启改革开放和社会主义现代化建设新时期。", topics:["economy","socialism","state","globalization"], source:"上册第27课；上册附录·中国现代史大事年表" },
  { id:"w-soviet-reform", sort:1985, year:"1985年起", region:"world", title:"戈尔巴乔夫改革", summary:"改革背离社会主义方向，未能解决深层矛盾，最终加剧苏联危机。", topics:["socialism","state"], source:"下册第20课；下册附录·中外历史大事年表" },
  { id:"w-soviet-collapse", sort:1991, year:"1991年", region:"world", title:"苏联解体", summary:"两极格局瓦解，世界多极化趋势继续发展，但美国单边主义一度突出。", topics:["order","socialism"], source:"下册第18、20、22课；下册附录·中外历史大事年表" },
  { id:"c-market", sort:1992, year:"1992年", region:"china", title:"社会主义市场经济目标", summary:"中共十四大明确提出建立社会主义市场经济体制的目标，改革开放进入新阶段。", topics:["economy","socialism","globalization"], source:"上册第27课；上册附录·中国现代史大事年表" },
  { id:"w-wto", sort:1995, year:"1995年", region:"world", title:"世界贸易组织成立", summary:"世界贸易规则进一步制度化，经济全球化深入发展，同时也带来利益失衡等问题。", topics:["globalization","economy","order"], source:"下册第22课；下册附录·中外历史大事年表" },
  { id:"c-return", sort:1997, year:"1997、1999年", region:"china", title:"香港、澳门回归", summary:"“一国两制”由构想变为实践，祖国统一大业向前迈出重要一步。", topics:["national","state"], source:"上册第28课；上册附录·中国现代史大事年表" },
  { id:"c-wto", sort:2001, year:"2001年", region:"china", title:"中国加入世界贸易组织", summary:"中国更深层次参与经济全球化，对外开放进入新阶段。", topics:["globalization","economy"], source:"上册第28课；下册附录·中外历史大事年表" },
  { id:"w-911", sort:2001.1, year:"2001年", region:"world", title:"“9·11”事件", summary:"国际恐怖主义威胁上升，美国随后发动阿富汗战争，世界和平与安全面临新挑战。", topics:["order","globalization"], source:"下册第23课；下册附录·中外历史大事年表" },
  { id:"c-new-era", sort:2012, year:"2012年起", region:"china", title:"中国特色社会主义新时代", summary:"中共十八大以来，中国特色社会主义进入新时代，中华民族伟大复兴进入新阶段。", topics:["socialism","state","national"], source:"上册第29、30课；上册附录·中国现代史大事年表" },
  { id:"c-community", sort:2013, year:"2013年起", region:"china", title:"人类命运共同体理念", summary:"中国倡导共商共建共享，推动建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。", topics:["globalization","order"], source:"下册活动课；上册第30课" },
  { id:"w-brexit", sort:2016, year:"2016年", region:"world", title:"英国脱欧公投", summary:"经济全球化在深入发展的同时遭遇逆流，全球治理体系面临调整。", topics:["globalization","order"], source:"下册第22课；下册附录·中外历史大事年表" },
  { id:"c-poverty", sort:2021, year:"2021年", region:"china", title:"全面建成小康社会", summary:"中国实现第一个百年奋斗目标，历史性解决绝对贫困问题。", topics:["economy","socialism","national"], source:"上册第30课；上册附录·中国现代史大事年表" },
  { id:"c-20th", sort:2022, year:"2022年", region:"china", title:"中共二十大", summary:"对全面建设社会主义现代化国家、全面推进中华民族伟大复兴作出战略谋划。", topics:["socialism","state","national"], source:"上册第29课；下册附录·中外历史大事年表" }
];

events.forEach(event => Object.assign(event, eventDetails[event.id] || {}));

const topics = [
  {
    id:"civilization", title:"文明起源与交流", subtitle:"从多元发生到彼此连接", color:"#76513d",
    intro:"农业、城市、文字和国家标志着文明时代到来。中华文明多元一体，世界古代文明多元发展；交通、战争、迁徙和贸易又使不同文明不断交流互鉴。",
    logic:["农业和畜牧业产生，剩余产品、社会分工与阶级分化出现","早期国家和文字形成，多个文明中心独立发展","帝国扩张、丝绸之路与海上交通推动区域文明连接","民族交融和文化互鉴成为历史发展的长期动力"],
    keywords:["多元一体","早期国家","丝绸之路","民族交融","文明互鉴"],
    lessons:"上册第1、5、8、10—14课；下册第1—7课"
  },
  {
    id:"state", title:"国家制度与治理", subtitle:"权力如何组织与运行", color:"#383f3b",
    intro:"从早期国家到中央集权，从封建制度到近代民主制度，制度变化始终与社会经济、阶级关系和国家治理需要相联系。",
    logic:["早期国家以血缘、神权和军事力量维系统治","中国古代中央集权不断发展，统一多民族国家持续巩固","中古世界形成封君封臣、庄园、幕府等不同治理形态","近代资产阶级革命推动君主立宪制、共和制等制度确立"],
    keywords:["分封制","郡县制","三省六部制","行省制","君主立宪","民主共和"],
    lessons:"上册第1—4、7、9—13、18、25、27、29课；下册第1—4、9课"
  },
  {
    id:"economy", title:"经济发展与社会变迁", subtitle:"生产方式塑造历史", color:"#8b6532",
    intro:"生产工具、土地制度、商业网络和工业技术的变化，不断重塑社会结构。理解经济史，要抓住生产力与生产关系、国内发展与世界市场之间的联系。",
    logic:["农业革命带来定居、分工和国家","中国古代农耕经济发展，商品经济与城市持续繁荣","新航路和殖民扩张推动世界市场形成","工业革命改变生产方式，全球化使各国相互依存加深"],
    keywords:["铁犁牛耕","重农抑商","商品经济","工业革命","世界市场","改革开放"],
    lessons:"上册第2、4、7、11、14、19、25—28、30课；下册第6、7、10、19、22课"
  },
  {
    id:"thought", title:"思想文化与科技", subtitle:"观念改变人与世界", color:"#5f4b66",
    intro:"思想文化既是社会变动的反映，也会反过来推动政治和社会转型。复习时注意思想主张、时代背景与历史影响三者的对应。",
    logic:["轴心时代的思想家回应社会转型问题","中华优秀传统文化在传承中发展并影响周边","文艺复兴、宗教改革、科学革命和启蒙运动冲击旧秩序","马克思主义与中国实际结合，深刻改变中国历史进程"],
    keywords:["百家争鸣","儒学","人文主义","理性主义","马克思主义","科技革命"],
    lessons:"上册第2、4、8、11、14、19、20课；下册第8、11课"
  },
  {
    id:"national", title:"民族危机与复兴道路", subtitle:"从救亡图存到民族复兴", color:"#963b32",
    intro:"近代中国的核心线索是列强侵略与中国人民的抗争探索。不同阶级提出不同方案，历史最终选择了中国共产党领导的新民主主义革命道路。",
    logic:["列强侵略使中国逐步沦为半殖民地半封建社会","农民阶级、地主阶级洋务派和资产阶级先后探索国家出路","中国共产党成立后探索适合国情的革命道路","抗日战争、解放战争取得胜利，新中国开启民族复兴新纪元"],
    keywords:["救亡图存","洋务运动","辛亥革命","新民主主义革命","抗日战争","民族复兴"],
    lessons:"上册第15—30课；下册第12、13、16、17、21课"
  },
  {
    id:"capitalism", title:"资本主义形成与发展", subtitle:"思想、制度、技术的合流", color:"#47616d",
    intro:"资本主义兴起不是单一事件，而是思想解放、殖民扩张、资产阶级革命和工业革命共同作用的结果，同时伴随剥削、危机和制度调整。",
    logic:["新航路开辟与殖民扩张加速资本原始积累","思想解放运动冲击封建神学和专制秩序","资产阶级革命确立资本主义政治制度","两次工业革命推动生产力飞跃，也带来阶级矛盾和经济危机"],
    keywords:["资本原始积累","资产阶级革命","工业革命","自由主义","经济危机","国家干预"],
    lessons:"下册第6—10、12、14、17、19课"
  },
  {
    id:"socialism", title:"社会主义理论与实践", subtitle:"从科学理论到中国道路", color:"#8c302d",
    intro:"马克思主义揭示资本主义社会矛盾；十月革命使社会主义从理论变为现实。中国共产党把马克思主义基本原理同中国具体实际结合，开辟中国道路。",
    logic:["工业革命推动无产阶级壮大，工人运动兴起","《共产党宣言》发表，马克思主义诞生","十月革命和苏联建设展开社会主义实践","中国共产党领导革命、建设与改革，发展中国特色社会主义"],
    keywords:["科学社会主义","十月革命","新经济政策","苏联模式","社会主义改造","中国特色社会主义"],
    lessons:"上册第20—30课；下册第11、15、18、20课"
  },
  {
    id:"order", title:"战争与国际秩序", subtitle:"冲突之后如何重建规则", color:"#314e54",
    intro:"大国力量对比变化往往引起国际秩序调整。两次世界大战、冷战和多极化趋势，是理解20世纪以来世界史的关键骨架。",
    logic:["帝国主义政治经济发展不平衡导致第一次世界大战","凡尔赛—华盛顿体系未能消除矛盾，法西斯扩张引发二战","战后雅尔塔体系与联合国建立，美苏冷战形成两极格局","苏联解体后多极化深入发展，全球治理面临新挑战"],
    keywords:["凡尔赛体系","雅尔塔体系","联合国","冷战","两极格局","多极化"],
    lessons:"上册第15—17、22—24、26、28、30课；下册第14、17、18、22、23课"
  },
  {
    id:"globalization", title:"世界市场与全球化", subtitle:"世界从分散走向整体", color:"#176b68",
    intro:"新航路开辟后，全球联系逐步建立；工业革命推动世界市场形成；20世纪后科技与制度安排使全球化加速，同时产生发展失衡与治理难题。",
    logic:["新航路开辟打破相对隔绝状态","殖民扩张和工业革命推动资本主义世界市场形成","二战后国际组织、科技革命和跨国公司加速全球化","全球化与逆全球化并存，人类需要合作应对共同挑战"],
    keywords:["新航路","世界市场","布雷顿森林体系","世界贸易组织","一带一路","人类命运共同体"],
    lessons:"上册第12、14、28、30课；下册第6、7、10、19、22、23课"
  }
];

function loadMastered() {
  try {
    return new Set(JSON.parse(localStorage.getItem("history-mastered") || "[]"));
  } catch {
    return new Set();
  }
}

function loadStudyData() {
  try {
    const stored = JSON.parse(localStorage.getItem("history-study-data") || "{}");
    return {
      views: Number(stored.views) || 0,
      viewedEvents: stored.viewedEvents && typeof stored.viewedEvents === "object" ? stored.viewedEvents : {},
      studyDays: Array.isArray(stored.studyDays) ? stored.studyDays : [],
      masteredAt: stored.masteredAt && typeof stored.masteredAt === "object" ? stored.masteredAt : {}
    };
  } catch {
    return { views:0, viewedEvents:{}, studyDays:[], masteredAt:{} };
  }
}

const state = {
  mode: "timeline",
  period: "all",
  search: "",
  zoom: 1,
  activeTopic: topics[0].id,
  mastered: loadMastered(),
  studyData: loadStudyData()
};

const els = {
  timelineView: document.querySelector("#timelineView"),
  topicsView: document.querySelector("#topicsView"),
  profileView: document.querySelector("#profileView"),
  profileDashboard: document.querySelector("#profileDashboard"),
  toolbar: document.querySelector(".toolbar"),
  timelineCanvas: document.querySelector("#timelineCanvas"),
  timelineScroll: document.querySelector("#timelineScroll"),
  timelineEmpty: document.querySelector("#timelineEmpty"),
  topicNav: document.querySelector("#topicNav"),
  topicDetail: document.querySelector("#topicDetail"),
  topicCount: document.querySelector("#topicCount"),
  searchInput: document.querySelector("#searchInput"),
  zoomLabel: document.querySelector("#zoomLabel"),
  eventDialog: document.querySelector("#eventDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  studySuggestion: document.querySelector("#studySuggestion")
};

const periodOf = (event) => {
  if (event.sort < 1840) return "ancient";
  if (event.sort < 1949) return "modern";
  return "contemporary";
};

const eventMatches = (event) => {
  const matchesPeriod = state.period === "all" || periodOf(event) === state.period;
  const query = state.search.trim().toLowerCase();
  if (!query) return matchesPeriod;
  const topicNames = event.topics.map(id => topics.find(topic => topic.id === id)?.title || "").join(" ");
  const haystack = [
    event.year, event.title, event.summary, event.source, event.timeDetail,
    event.background, event.location, event.textbook, topicNames,
    ...(event.people || []), ...(event.process || []), ...(event.impacts || [])
  ].join(" ").toLowerCase();
  return matchesPeriod && haystack.includes(query);
};

function renderTimeline() {
  const filtered = events.filter(eventMatches).sort((a, b) => a.sort - b.sort);
  els.timelineEmpty.hidden = filtered.length > 0;
  els.timelineScroll.hidden = filtered.length === 0;
  if (!filtered.length) return;

  const groups = [];
  filtered.forEach(event => {
    const last = groups[groups.length - 1];
    if (last && Math.abs(last.sort - event.sort) < 0.01) last.events.push(event);
    else groups.push({ sort:event.sort, year:event.year, events:[event] });
  });

  // Keep cards readable even at the smallest zoom level.
  const spacing = 220 + state.zoom * 80;
  const width = Math.max(980, groups.length * spacing + 260);
  const eraStarts = [
    { label:"古代文明", test:value => value < 500 },
    { label:"中古世界", test:value => value >= 500 && value < 1500 },
    { label:"走向近代", test:value => value >= 1500 && value < 1840 },
    { label:"近代巨变", test:value => value >= 1840 && value < 1914 },
    { label:"战争与革命", test:value => value >= 1914 && value < 1949 },
    { label:"战后世界", test:value => value >= 1949 && value < 1991 },
    { label:"全球化时代", test:value => value >= 1991 }
  ];

  const positioned = groups.map((group, index) => ({...group, x:130 + index * spacing}));
  let html = `<div class="timeline-axis"></div>`;

  eraStarts.forEach((era, eraIndex) => {
    const matching = positioned.filter(group => era.test(group.sort));
    if (!matching.length) return;
    const start = Math.max(0, matching[0].x - spacing / 2);
    const nextEra = eraStarts.slice(eraIndex + 1).find(next => positioned.some(group => next.test(group.sort)));
    const nextGroup = nextEra ? positioned.find(group => nextEra.test(group.sort)) : null;
    const end = nextGroup ? nextGroup.x - spacing / 2 : width;
    html += `<div class="era-band" style="left:${start}px;width:${end-start}px"><span>${era.label}</span></div>`;
  });

  positioned.forEach((group, groupIndex) => {
    html += `<span class="time-point" style="left:${group.x}px"></span>`;
    html += `<time class="time-label" style="left:${group.x}px">${group.year}</time>`;
    const regionCounts = { china:0, world:0 };
    group.events.forEach(event => {
      const laneIndex = regionCounts[event.region]++;
      const baseLane = event.region === "china" ? 44 : 432;
      const lane = baseLane + laneIndex * (event.region === "china" ? 142 : 142);
      const mastered = state.mastered.has(event.id) ? " mastered" : "";
      html += `
        <article class="event-card ${event.region}${mastered}" style="left:${group.x}px;--lane:${lane}px"
          tabindex="0" role="button" data-event-id="${event.id}" aria-label="${event.year} ${event.title}">
          <div class="event-meta"><span>${event.region === "china" ? "中国" : "世界"} · ${String(groupIndex + 1).padStart(2,"0")}</span><span class="mastered-mark">已掌握</span></div>
          <h3>${event.title}</h3>
          <p>${event.summary}</p>
        </article>`;
    });
  });

  els.timelineCanvas.style.width = `${width}px`;
  els.timelineCanvas.innerHTML = html;
  els.zoomLabel.textContent = `${Math.round(state.zoom * 100)}%`;
  bindEventOpeners(els.timelineCanvas);
}

function renderTopics() {
  const visibleTopics = topics.filter(topic => {
    if (!state.search.trim()) return true;
    const query = state.search.toLowerCase();
    return [topic.title, topic.subtitle, topic.intro, ...topic.keywords, ...topic.logic]
      .join(" ").toLowerCase().includes(query)
      || events.some(event => event.topics.includes(topic.id) && eventMatches(event));
  });

  if (!visibleTopics.some(topic => topic.id === state.activeTopic)) {
    state.activeTopic = visibleTopics[0]?.id || topics[0].id;
  }

  els.topicCount.textContent = `${visibleTopics.length} 个专题`;
  els.topicNav.innerHTML = visibleTopics.map((topic, index) => {
    const count = events.filter(event => event.topics.includes(topic.id) && eventMatches(event)).length;
    return `
      <button class="topic-nav-button ${topic.id === state.activeTopic ? "active" : ""}" data-topic-id="${topic.id}">
        <span class="topic-number">${String(index + 1).padStart(2,"0")}</span>
        <strong>${topic.title}</strong>
        <small>${count}</small>
      </button>`;
  }).join("") || `<p class="empty-state">没有匹配的专题。</p>`;

  const topic = topics.find(item => item.id === state.activeTopic);
  if (!topic || !visibleTopics.length) {
    els.topicDetail.innerHTML = `<p class="empty-state">没有匹配的专题，换个关键词试试。</p>`;
    return;
  }

  const topicEvents = events
    .filter(event => event.topics.includes(topic.id) && eventMatches(event))
    .sort((a,b) => a.sort - b.sort);

  els.topicDetail.style.setProperty("--topic-color", topic.color);
  els.topicDetail.innerHTML = `
    <section class="topic-hero" style="--topic-color:${topic.color}" data-number="${String(topics.indexOf(topic)+1).padStart(2,"0")}">
      <p class="section-index">${topic.subtitle}</p>
      <h3>${topic.title}</h3>
      <p>${topic.intro}</p>
    </section>
    <div class="topic-grid">
      <section class="knowledge-card">
        <h4>主线梳理</h4>
        <ol class="logic-chain">${topic.logic.map(item => `<li>${item}</li>`).join("")}</ol>
      </section>
      <section class="knowledge-card">
        <h4>核心关键词</h4>
        <div class="keyword-list">${topic.keywords.map(word => `<button data-keyword="${word}">${word}</button>`).join("")}</div>
        <div class="lesson-reference">
          <strong>教材关联</strong>
          <p>${topic.lessons}</p>
        </div>
      </section>
    </div>
    <section class="topic-events">
      <h4>关键事件 · ${topicEvents.length}</h4>
      <div class="topic-event-list">
        ${topicEvents.map(event => `
          <button class="topic-event" data-event-id="${event.id}">
            <time>${event.year}</time>
            <strong>${event.title}</strong>
            <i class="region-badge ${event.region}"></i>
          </button>`).join("") || `<p class="empty-state">当前筛选下暂无事件。</p>`}
      </div>
    </section>`;

  els.topicNav.querySelectorAll("[data-topic-id]").forEach(button => {
    button.addEventListener("click", () => {
      state.activeTopic = button.dataset.topicId;
      renderTopics();
      document.querySelector("#topicsTitle").scrollIntoView({ block:"start", behavior:"smooth" });
    });
  });

  els.topicDetail.querySelectorAll("[data-keyword]").forEach(button => {
    button.addEventListener("click", () => {
      state.search = button.dataset.keyword;
      els.searchInput.value = state.search;
      renderTopics();
    });
  });
  bindEventOpeners(els.topicDetail);
}

function bindEventOpeners(container) {
  container.querySelectorAll("[data-event-id]").forEach(element => {
    element.addEventListener("click", () => openEvent(element.dataset.eventId));
    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEvent(element.dataset.eventId);
      }
    });
  });
}

function saveStudyData() {
  try {
    localStorage.setItem("history-study-data", JSON.stringify(state.studyData));
  } catch {
    // Learning data remains available for the current session.
  }
}

function recordEventView(id) {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  state.studyData.views += 1;
  state.studyData.viewedEvents[id] = (state.studyData.viewedEvents[id] || 0) + 1;
  if (!state.studyData.studyDays.includes(today)) state.studyData.studyDays.push(today);
  saveStudyData();
}

function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);
}

function renderStudyMap(map) {
  if (!map?.points?.length) return "";
  const bounds = {
    china:[70, 140, 15, 56],
    asia:[20, 150, -10, 65],
    europe:[-15, 45, 25, 72],
    world:[-180, 180, -60, 82]
  }[map.scope] || [-180, 180, -60, 82];
  const [minLon, maxLon, minLat, maxLat] = bounds;
  const width = 800;
  const height = 380;
  const padding = 34;
  const project = (lon, lat) => [
    padding + (lon - minLon) / (maxLon - minLon) * (width - padding * 2),
    padding + (maxLat - lat) / (maxLat - minLat) * (height - padding * 2)
  ];
  const polygons = {
    china:[
      [[73,39],[79,48],[88,49],[96,44],[108,42],[119,53],[134,48],[131,42],[122,39],[124,31],[121,23],[113,22],[109,18],[103,22],[98,24],[92,28],[82,30],[79,35],[73,39]],
      [[121,25],[122,24],[121,22],[120,23],[121,25]]
    ],
    europe:[
      [[-10,36],[-9,43],[-5,48],[-8,54],[-3,59],[5,58],[10,64],[18,70],[28,66],[34,60],[41,55],[40,47],[31,43],[28,36],[18,39],[10,36],[-10,36]],
      [[-8,50],[-4,58],[0,59],[1,51],[-8,50]]
    ],
    asia:[
      [[22,36],[30,46],[40,55],[60,70],[90,72],[120,62],[145,50],[140,38],[125,30],[122,18],[110,10],[100,2],[82,7],[70,22],[55,25],[40,30],[22,36]],
      [[95,20],[105,10],[115,5],[120,18],[110,25],[95,20]]
    ],
    world:[
      [[-168,70],[-135,72],[-105,55],[-82,50],[-60,28],[-82,10],[-100,18],[-120,32],[-150,55],[-168,70]],
      [[-82,12],[-70,5],[-50,-10],[-38,-32],[-56,-55],[-72,-42],[-82,12]],
      [[-10,36],[10,60],[35,70],[85,75],[145,55],[150,35],[120,20],[105,5],[80,8],[55,25],[35,30],[20,35],[-10,36]],
      [[-18,35],[10,37],[35,22],[42,-10],[25,-35],[5,-35],[-12,-5],[-18,35]],
      [[112,-10],[145,-12],[153,-30],[132,-42],[113,-25],[112,-10]]
    ]
  }[map.scope] || [];
  const polygonMarkup = polygons.map(polygon => {
    const points = polygon.map(point => project(point[0], point[1]).join(",")).join(" ");
    return `<polygon points="${points}" class="map-land"></polygon>`;
  }).join("");
  const graticule = [0.25,0.5,0.75].map(position => `
    <line x1="${padding}" y1="${padding + position * (height-padding*2)}" x2="${width-padding}" y2="${padding + position * (height-padding*2)}"></line>
    <line x1="${padding + position * (width-padding*2)}" y1="${padding}" x2="${padding + position * (width-padding*2)}" y2="${height-padding}"></line>
  `).join("");
  const pointPositions = map.points.map(point => project(point[1], point[2]));
  const routes = (map.routes || []).map(route => {
    const points = route.map(index => pointPositions[index]).filter(Boolean).map(point => point.join(",")).join(" ");
    return points ? `<polyline points="${points}" class="map-route"></polyline>` : "";
  }).join("");
  const pointMarkup = map.points.map((point, index) => {
    const [x,y] = pointPositions[index];
    const anchor = x > width - 150 ? "end" : "start";
    const textX = anchor === "end" ? x - 9 : x + 9;
    return `
      <g class="map-point">
        <circle cx="${x}" cy="${y}" r="5"></circle>
        <circle cx="${x}" cy="${y}" r="10" class="map-pulse"></circle>
        <text x="${textX}" y="${y - 9}" text-anchor="${anchor}">${escapeMarkup(point[0])}</text>
      </g>`;
  }).join("");
  return `
    <figure class="study-map">
      <figcaption><span>空间定位图</span><strong>${escapeMarkup(map.title)}</strong></figcaption>
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeMarkup(map.title)}">
        <rect x="0" y="0" width="${width}" height="${height}" rx="18" class="map-sea"></rect>
        <g class="map-grid">${graticule}</g>
        <g>${polygonMarkup}</g>
        <g>${routes}</g>
        <g>${pointMarkup}</g>
      </svg>
      <p>复习定位示意图，仅表示事件地点与大致路线，不表示精确历史疆界。</p>
    </figure>`;
}

function openEvent(id, recordView = true) {
  const event = events.find(item => item.id === id);
  if (!event) return;
  if (recordView) recordEventView(id);
  const relatedTopics = event.topics.map(topicId => topics.find(topic => topic.id === topicId)).filter(Boolean);
  const mastered = state.mastered.has(event.id);
  const regionColor = event.region === "china" ? "var(--china)" : "var(--world)";
  const people = event.people || [];
  const process = event.process || [event.summary];
  const impacts = event.impacts || [event.summary];
  els.dialogContent.innerHTML = `
    <div class="dialog-body" style="--region-color:${regionColor}">
      <header class="dialog-event-header">
        <span class="dialog-region"><i class="region-badge ${event.region}"></i>${event.region === "china" ? "中国历史" : "外国历史"}</span>
        <time>${event.timeDetail || event.year}</time>
        <h2>${event.title}</h2>
        <p class="dialog-summary">${event.summary}</p>
        <div class="dialog-tags">${relatedTopics.map(topic => `<span>${topic.title}</span>`).join("")}</div>
      </header>

      <section class="event-facts">
        <article>
          <p class="dialog-label">重要人物</p>
          <div class="people-list">${people.map(person => `<span>${person}</span>`).join("") || "<span>相关社会群体</span>"}</div>
        </article>
        <article>
          <p class="dialog-label">时间</p>
          <p>${event.timeDetail || event.year}</p>
        </article>
        <article>
          <p class="dialog-label">地点</p>
          <p>${event.location || "见事件过程"}</p>
        </article>
      </section>

      <section class="review-section">
        <div class="review-section-title"><span>01</span><div><p class="dialog-label">BACKGROUND</p><h3>背景与原因</h3></div></div>
        <p class="review-prose">${event.background || event.summary}</p>
      </section>

      <section class="review-section">
        <div class="review-section-title"><span>02</span><div><p class="dialog-label">PROCESS</p><h3>过程与关键节点</h3></div></div>
        <ol class="event-process">${process.map(item => `<li>${item}</li>`).join("")}</ol>
      </section>

      <section class="review-section">
        <div class="review-section-title"><span>03</span><div><p class="dialog-label">IMPACT</p><h3>影响与评价</h3></div></div>
        <ul class="event-impact">${impacts.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>

      ${renderStudyMap(event.map)}

      <section class="textbook-reference">
        <div>
          <p class="dialog-label">教材核对</p>
          <p class="dialog-source">${event.textbook || event.source}</p>
        </div>
        <span>内容依据教材正文与附录大事年表整理</span>
      </section>

      <div class="dialog-action-bar">
        <span>读完后，用自己的话复述“背景—过程—影响”再标记掌握。</span>
        <button class="master-button ${mastered ? "mastered" : ""}" data-master-id="${event.id}">
          ${mastered ? "✓ 已掌握，点击取消" : "标记为已掌握"}
        </button>
      </div>
    </div>`;

  els.dialogContent.querySelector("[data-master-id]").addEventListener("click", () => {
    toggleMastered(event.id);
    openEvent(event.id, false);
  });

  if (!els.eventDialog.open) els.eventDialog.showModal();
}

function toggleMastered(id) {
  if (state.mastered.has(id)) {
    state.mastered.delete(id);
    delete state.studyData.masteredAt[id];
  } else {
    state.mastered.add(id);
    state.studyData.masteredAt[id] = new Date().toISOString();
  }
  try {
    localStorage.setItem("history-mastered", JSON.stringify([...state.mastered]));
  } catch {
    // The page remains fully usable when browser storage is unavailable.
  }
  saveStudyData();
  updateProgress();
  renderTimeline();
  if (state.mode === "topics") renderTopics();
  if (state.mode === "profile") renderProfile();
}

function updateProgress() {
  const percent = Math.round(state.mastered.size / events.length * 100);
  els.progressRing.style.setProperty("--progress", `${percent}%`);
  els.progressPercent.textContent = `${percent}%`;
  const remaining = events.length - state.mastered.size;
  els.studySuggestion.textContent = remaining
    ? `已掌握 ${state.mastered.size} 个关键事件，尚有 ${remaining} 个。建议用时间线定位，再到专题中串联。`
    : "关键事件已全部标记掌握。可以清空搜索后，按专题进行一次完整串讲。";
}

function renderProfile() {
  const masteredEvents = events.filter(event => state.mastered.has(event.id));
  const percent = Math.round(masteredEvents.length / events.length * 100);
  const regionStats = ["china", "world"].map(region => {
    const total = events.filter(event => event.region === region).length;
    const mastered = masteredEvents.filter(event => event.region === region).length;
    return { region, total, mastered, percent:Math.round(mastered / total * 100) };
  });
  const periods = [
    { id:"ancient", label:"古代" },
    { id:"modern", label:"近代" },
    { id:"contemporary", label:"现代" }
  ].map(period => {
    const total = events.filter(event => periodOf(event) === period.id).length;
    const mastered = masteredEvents.filter(event => periodOf(event) === period.id).length;
    return {...period, total, mastered, percent:Math.round(mastered / total * 100)};
  });
  const topicStats = topics.map(topic => {
    const related = events.filter(event => event.topics.includes(topic.id));
    const mastered = related.filter(event => state.mastered.has(event.id)).length;
    return {...topic, total:related.length, mastered, percent:Math.round(mastered / related.length * 100)};
  }).sort((a,b) => b.percent - a.percent);
  const weakestTopic = topicStats.slice().sort((a,b) => a.percent - b.percent)[0];
  const mostViewedEntry = Object.entries(state.studyData.viewedEvents).sort((a,b) => b[1] - a[1])[0];
  const mostViewed = mostViewedEntry ? events.find(event => event.id === mostViewedEntry[0]) : null;
  const orderedMastered = masteredEvents.sort((a,b) => {
    const aTime = state.studyData.masteredAt[a.id] || "";
    const bTime = state.studyData.masteredAt[b.id] || "";
    return bTime.localeCompare(aTime) || b.sort - a.sort;
  });

  els.profileDashboard.innerHTML = `
    <section class="profile-overview">
      <div class="profile-score">
        <div class="profile-score-ring" style="--score:${percent}%">
          <strong>${percent}%</strong>
          <span>总掌握率</span>
        </div>
        <div>
          <p class="section-index">LEARNING PORTRAIT</p>
          <h3>${masteredEvents.length ? "你的历史脉络正在成形。" : "从第一个事件开始，建立你的历史坐标。"}</h3>
          <p>${masteredEvents.length ? `已掌握 ${masteredEvents.length} 个关键事件，下一步建议加强“${weakestTopic.title}”。` : "点击时间线或专题中的事件，阅读后标记为已掌握，数据会自动汇总到这里。"}</p>
          <button class="profile-primary" id="continueStudyButton">继续复习 <span>→</span></button>
        </div>
      </div>
      <div class="profile-stat-grid">
        <article><strong>${masteredEvents.length}</strong><span>已掌握事件</span><small>共 ${events.length} 个</small></article>
        <article><strong>${state.studyData.views}</strong><span>事件浏览次数</span><small>${mostViewed ? `最常看：${mostViewed.title}` : "尚无浏览记录"}</small></article>
        <article><strong>${state.studyData.studyDays.length}</strong><span>累计学习天数</span><small>记录在当前浏览器</small></article>
      </div>
    </section>

    <div class="profile-data-grid">
      <section class="profile-panel">
        <div class="profile-panel-heading"><div><p class="section-index">DISTRIBUTION</p><h3>知识分布</h3></div><span>中国与世界</span></div>
        <div class="distribution-list">
          ${regionStats.map(item => `
            <div class="distribution-item">
              <div><span><i class="dot ${item.region}"></i>${item.region === "china" ? "中国历史" : "外国历史"}</span><b>${item.mastered} / ${item.total}</b></div>
              <div class="data-bar"><i class="${item.region}" style="width:${item.percent}%"></i></div>
            </div>`).join("")}
        </div>
        <div class="period-summary">
          ${periods.map(item => `
            <button data-profile-period="${item.id}">
              <strong>${item.percent}%</strong><span>${item.label}</span><small>${item.mastered}/${item.total}</small>
            </button>`).join("")}
        </div>
      </section>

      <section class="profile-panel">
        <div class="profile-panel-heading"><div><p class="section-index">TOPICS</p><h3>专题掌握度</h3></div><span>按掌握率排序</span></div>
        <div class="topic-progress-list">
          ${topicStats.map(topic => `
            <button data-profile-topic="${topic.id}">
              <span class="topic-progress-name"><i style="background:${topic.color}"></i>${topic.title}</span>
              <span class="topic-progress-bar"><i style="width:${topic.percent}%;background:${topic.color}"></i></span>
              <strong>${topic.percent}%</strong>
            </button>`).join("")}
        </div>
      </section>
    </div>

    <section class="profile-panel mastered-panel">
      <div class="profile-panel-heading">
        <div><p class="section-index">MASTERED</p><h3>已掌握事件</h3></div>
        <span>${orderedMastered.length} 个事件</span>
      </div>
      <div class="mastered-event-grid">
        ${orderedMastered.length ? orderedMastered.map(event => `
          <button class="mastered-event" data-event-id="${event.id}">
            <i class="region-badge ${event.region}"></i>
            <time>${event.year}</time>
            <strong>${event.title}</strong>
            <span>查看 →</span>
          </button>`).join("") : `
          <div class="profile-empty">
            <strong>这里还没有记录</strong>
            <p>读完一个事件后点击“标记为已掌握”，它就会出现在这里。</p>
          </div>`}
      </div>
    </section>`;

  bindEventOpeners(els.profileDashboard);
  els.profileDashboard.querySelector("#continueStudyButton").addEventListener("click", () => {
    const unmastered = events.find(event => !state.mastered.has(event.id));
    setMode("timeline");
    if (unmastered) openEvent(unmastered.id);
  });
  els.profileDashboard.querySelectorAll("[data-profile-period]").forEach(button => {
    button.addEventListener("click", () => {
      state.period = button.dataset.profilePeriod;
      document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.period === state.period));
      renderTimeline();
      setMode("timeline");
      els.timelineScroll.scrollLeft = 0;
    });
  });
  els.profileDashboard.querySelectorAll("[data-profile-topic]").forEach(button => {
    button.addEventListener("click", () => {
      state.activeTopic = button.dataset.profileTopic;
      state.search = "";
      els.searchInput.value = "";
      setMode("topics");
    });
  });
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-button").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  els.timelineView.classList.toggle("active", mode === "timeline");
  els.topicsView.classList.toggle("active", mode === "topics");
  els.profileView.classList.toggle("active", mode === "profile");
  els.toolbar.hidden = mode === "profile";
  if (mode === "topics") renderTopics();
  if (mode === "profile") renderProfile();
}

document.querySelectorAll(".mode-button").forEach(button => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    state.period = button.dataset.period;
    document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderTimeline();
    renderTopics();
    els.timelineScroll.scrollLeft = 0;
  });
});

els.searchInput.addEventListener("input", event => {
  state.search = event.target.value;
  renderTimeline();
  renderTopics();
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    els.searchInput.focus();
  }
  if (event.key === "Escape" && els.eventDialog.open) els.eventDialog.close();
});

document.querySelector("#zoomIn").addEventListener("click", () => {
  state.zoom = Math.min(1.5, state.zoom + .25);
  renderTimeline();
});

document.querySelector("#zoomOut").addEventListener("click", () => {
  state.zoom = Math.max(.5, state.zoom - .25);
  renderTimeline();
});

document.querySelector("#jumpToday").addEventListener("click", () => {
  els.timelineScroll.scrollTo({ left:els.timelineScroll.scrollWidth, behavior:"smooth" });
});

document.querySelector("#randomEventButton").addEventListener("click", () => {
  const pool = events.filter(eventMatches);
  const event = pool[Math.floor(Math.random() * pool.length)] || events[0];
  openEvent(event.id);
});

document.querySelector("#resetProgressButton").addEventListener("click", () => {
  if (!window.confirm("确定清空全部掌握标记和学习记录吗？此操作无法撤销。")) return;
  state.mastered.clear();
  state.studyData = { views:0, viewedEvents:{}, studyDays:[], masteredAt:{} };
  try {
    localStorage.removeItem("history-mastered");
    localStorage.removeItem("history-study-data");
  } catch {
    // State has already been cleared for the current session.
  }
  updateProgress();
  renderTimeline();
  renderTopics();
  renderProfile();
});

document.querySelector("#dialogClose").addEventListener("click", () => els.eventDialog.close());
els.eventDialog.addEventListener("click", event => {
  if (event.target === els.eventDialog) els.eventDialog.close();
});

let drag = { active:false, x:0, left:0 };
els.timelineScroll.addEventListener("pointerdown", event => {
  if (event.target.closest(".event-card")) return;
  drag = { active:true, x:event.clientX, left:els.timelineScroll.scrollLeft };
  els.timelineScroll.setPointerCapture(event.pointerId);
});
els.timelineScroll.addEventListener("pointermove", event => {
  if (!drag.active) return;
  els.timelineScroll.scrollLeft = drag.left - (event.clientX - drag.x);
});
els.timelineScroll.addEventListener("pointerup", () => drag.active = false);
els.timelineScroll.addEventListener("pointercancel", () => drag.active = false);

renderTimeline();
renderTopics();
renderProfile();
updateProgress();
