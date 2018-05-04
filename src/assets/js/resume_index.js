
$(document).ready(function($) { 
    scrollgoTop();
 	var _top;
    var top1 = $("#page2").offset().top - 70;
    var top2 = $("#page3").offset().top - 70;
    var top3 = $("#page4").offset().top - 70;
    var top4 = $("#page5").offset().top - 70;
    var top5 = $("#page6").offset().top - 70;
    var top6 = $("#page7").offset().top - 70;
    var tops = [top1,top2,top3,top4,top5,top6];
    $(window).resize();
    $("#goTop").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();
        $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    });
    //关于我
    $("#tAbout").bind("click", function () {
       $(".nav-ul li:nth-child(1)").click();
    });
    //工作经历
    $("#tWork").bind("click", function () {
        $(".nav-ul li:nth-child(4)").click();
    });
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();//获取序号
        _top = $(".section").eq(index+1).offset().top - 70; //获取对应div距顶高度
        moveTo();
    });
    $(".more-nav").bind("click", function () {
        $(".nav-ul.nav-xs-ul").stop().slideToggle(300);
    });
    function moveTo(){
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }
    $(".nav-xs-ul li").click(function () {
       $(".nav-xs-ul").slideUp(300)
    });
    $(window).scroll(function () {
        //导航fixed
        var _scroolTop = $(window).scrollTop();
        _scroolTop > top1 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
        if((_scroolTop > top1) && (_scroolTop < top2)){
            $(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#page2").addClass("active");
        }else if((_scroolTop > top2) && (_scroolTop < top3)){
            $(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#page3").addClass("active");
        }else if((_scroolTop > top3) && (_scroolTop < top4)){
            $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#page4").addClass("active");
        }else if((_scroolTop > top4) && (_scroolTop < top5)){
            $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#page5").addClass("active");
        }else if((_scroolTop > top5) && (_scroolTop <= top6)){
            $(".nav-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $("#page6").addClass("active");
        }else if(_scroolTop > top6){
            $(".nav-ul li").eq(5).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(5).addClass("active").siblings().removeClass("active");
            $("#page7").addClass("active");
        }
    });

});

$(window).resize(function (){
    var wid = $(window).width();
    if(wid>768){
        $(".nav-xs-ul").hide();
    }
});
function scrollgoTop() {
    var min_height = document.documentElement.clientHeight /2;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        scrollTop > min_height ? $('#goTop').fadeIn() : $('#goTop').fadeOut();
    });
}
function skillsIconsInfo(){
	var _html = '';
	var _list = data.skills.list;
	for (var i=0; i<_list.length; i++) {
		_html += '<li><span>'+ (i+1) +'、</span> '+ _list[i] +'</li>'
	}
	$('.skillsIconsInfo').append(_html);
}
var data = {
    status: 200,
    jobList: [
        {
            img: 'qzyx_icon_1.gif',
            title: 'PS切图',
            detail: '从PSD上切出页面需要的图片将小图标合成spirts优化。'
        },
        {
            img: 'qzyx_icon_2.gif',
            title: '前端制作',
            detail: '从PSD上切出页面需要的图片将小图标合成spirts优化。'
        },
        {
            img: 'qzyx_icon_3.gif',
            title: '功能开发',
            detail: '从PSD上切出页面需要的图片将小图标合成spirts优化。'
        },
        {
            img: 'qzyx_icon_4.gif',
            title: '移动开发',
            detail: '从PSD上切出页面需要的图片将小图标合成spirts优化。'
        },
        {
            img: 'qzyx_icon_5.gif',
            title: '微信小程序',
            detail: '从PSD上切出页面需要的图片将小图标合成spirts优化。'
        }
    ],
    skills:{
        icons: ['zyjn_icon_1.png','zyjn_icon_2.png','zyjn_icon_3.png'],
        list: [
            '精通DIV+CSS(HTML5+CSS3)页面布局, 能够手写符合w3c标准的页面代码，熟悉w3c标准，熟悉HTML语义化并掌握处理浏览器兼容性问题的方法；',
            '熟悉主流JS库/框架的使用，如jQuery/Zepto/Swiper/iScroll/BootStrap/Vue等，了解新技术框架（ES6，Babel）并具备实践经验；',
            '熟练掌握HTML5的移动端Web开发, 具备Hybrid开发经验, 能够完成微信小程序开发相关项目；',
            '熟练使用Ajax/Json等与后端开发工程师进行协同开发，能够快速定位和解决工作中遇到的各类技术问题；',
            '熟悉Echarts数据化图表，Handlebars.js 模板引擎',
            '对NodeJs/Express/KOA/Mongodb有一定的了解和工作实践；',
            '熟练使用PHPCMS管理系统，TRS WCM管理系统，对PHP语言，JAVA语言有初步了解；',
            '熟练使用Webstorm/Nodepad++/Sublime/Photoshop/Myeclipse等相关开发工具；',
            '对前端工程化有初步见解，熟悉Git/Svn/Gulp/Webpack等工作流管理以及打包工具。'

        ]
    },
    workExperience:{
        list: [
            {
                time: '2016/02— 至今',
                title: '金银岛（北京）网络科技股份有限公司 ／Web前端开发工程师',
                workContent: [
                    '独立负责金银岛网络融资后台系统/数据统计系统/交易追踪管理系统日常需求的前端开发和维护；',
                    '根据产品设计需求，配合后台开发人员实现公司产品界面和功能，维护及优化前端页面性能；',
                    '独立负责公司产业链金融平台微信WebApp开发、App嵌入式HTML5页面开发；',
                    '独立负责微信小程序相关产品开发工作；',
                    '负责制定JS、CSS、Html开发规范并在公司内部推进执行。',
                ],
                workLinks: [
                    'http://scf.315.com.cn/jydIcm/manage/www/login.html http://scf.315.com.cn/updateAdmin/indexAction_index.action ',
                    'http://scf.315.com.cn/iftjh/staffinfoservlet?action=adminStaffLogon ',
                    'http://data.meitan315.cn/JydDataPlatform/login/validate ',
                    'http://scf.315.com.cn/jydIcm/staffinfoservlet?action=adminStaffLogon ',
                    'http://124.42.9.89/IcmDataPlatform/login/index',
                    '“微信小程序 -- 金银岛产业链金融“'
                ]
            },
            {
                time: '2015/08—2016/02',
                title: '北京惠世达信息科技有限公司／Web前端开发工程师',
                workContent: [
                    '与项目经理与技术团队等进行充分的沟通，开发创建性高，高可用性的Web网页制作、移动端的WebApp；', 
                    '充分理解项目需求：包括产品的目标，可用性标准以及时间要求；参与移动产品和项目制作，配合后台开发人员实现产品前端界面效果与功能；',
                    '负责移动产品HTML5、CSS3的编写，解决Web端和移动端适配问题等工作；',
                    '实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验。'
                ],
                workLinks: [
                    'http://m.dyw365.cn/',  
                    'http://www.dyw365.cn/',  
                    'http://supply.dyw365.cn/', 
                    'http://admin.dyw365.cn/'
                ]
            },
            {
                time: '2013/03 -- 2015/08',
                title: '北京百会纵横科技有限公司／Web前端开发工程师',
                workContent: [
                    '负责微信端，移动端，PC端页面的制作；', 
                    '参与产品和项目制作，配合后台开发人员实现产品前端界面效果功能；', 
                    '负责移动产品HTML5、CSS3的编写，AJAX数据交互，解决移动端适配问题；', 
                    '实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验；', 
                    '日常网站的维护更新，测试等工作。',
                ],
                workLinks: [
                    'http://m.dyw365.cn/',  
                    'http://www.bangongyi.com/',
                    'http://www.qiangdawei.com/',
                    'http://www.baihui.com/crm/2019.html',
                    'http://m.bangongyi.com/',
                    'http://118.102.27.181/weixin/baihui_introduce/',
                    'http://118.102.27.181/weixin/baihui_product/',
                    'http://www.baihui.com/baidusem/crmwap.html'
                ]
            },
            {
                time: '2011/06-2013./02 ',
                title: '爱丽国际科技(北京)有限公司／web前端工程师',
                workContent: [
                    '负责微信端，移动端，PC端页面的制作；', 
                    '负责专题页面，PC端页面的制作；', 
                    '参与产品和项目制作，配合后台开发人员实现产品前端界面的交互效果功能；', 
                    '全站的各模块、频道、专题个页面PHPCMS程序模版的制作；', 
                    '实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验；', 
                    '日常网站的维护更新，测试等工作。'
                ],
                workLinks: [
                    'www.kanglu.com',
                    'http://www.qilincar.com/'
                ]
            }
        ]
    } 
}