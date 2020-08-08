var msg =''
 for (let i = 0; i < job1.length; i++) {
      msg += `
             <li class="info">
                <ul class="title1">
                    <li>
                        <p class="name">一级机构</p>
                        <p>${job1[i].attr1}
                        </p>
                    </li>
                    <li>
                        <p class="name">二级机构
                        </p>
                        <p>${job1[i].attr2}</p>
                    </li>
                    <li>
                        <p class="name">部门
                        </p>
                        <p>${job1[i].attr3}
                        </p>
                    </li>
                </ul>
                <div class="cont">
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 岗位职责 Responsibilities Job Description
                        </div>
                        <div class="down">
                            ${job1[i].attr5}
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 岗位要求 Qualifications

                        </div>
                        <div class="down">
                            ${job1[i].attr6}
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 需求专业 Professional

                        </div>
                        <div class="down">
                            <p>  ${job1[i].attr7}
                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 学历要求 Education Required


                        </div>
                        <div class="down">
                            <p>  ${job1[i].attr8}

                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 需求人数 Number of people
                        </div>
                        <div class="down">
                            <p>  ${job1[i].attr9}

                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 工作地点 Location
                        </div>
                        <div class="down">
                            <p>  ${job1[i].attr10}


                            </p>
                        </div>
                    </div>
                    <a class="apply" target="blank" href=" ${job1[i].link}"><img src="images/apply.png" alt=""></a>
                </div>
            </li>`
 }
 var msg1 =''
 for (let i = 0; i < job.length; i++) {
      msg1 += `
             <li class="info">
                <ul class="title1">
                    <li>
                        <p class="name">一级机构</p>
                        <p>${job[i].attr1}
                        </p>
                    </li>
                    <li>
                        <p class="name">二级机构
                        </p>
                        <p>${job[i].attr2}</p>
                    </li>
                    <li>
                        <p class="name">部门
                        </p>
                        <p>${job[i].attr3}
                        </p>
                    </li>
                </ul>
                <div class="cont">
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 岗位职责 Responsibilities Job Description
                        </div>
                        <div class="down">
                            ${job[i].attr5}
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 岗位要求 Qualifications

                        </div>
                        <div class="down">
                            ${job[i].attr6}
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 需求专业 Professional

                        </div>
                        <div class="down">
                            <p>  ${job[i].attr7}
                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 学历要求 Education Required


                        </div>
                        <div class="down">
                            <p>  ${job[i].attr8}

                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 需求人数 Number of people
                        </div>
                        <div class="down">
                            <p>  ${job[i].attr9}

                            </p>
                        </div>
                    </div>
                    <div class="jd">
                        <div class="up">
                            <img src="images/icon.png" alt=""> 工作地点 Location
                        </div>
                        <div class="down">
                            <p>  ${job[i].attr10}


                            </p>
                        </div>
                    </div>
                    <a class="apply" target="blank" href=" ${job[i].link}"><img src="images/apply.png" alt=""></a>
                </div>
            </li>`
 }

 $(".tab_info1").html(msg)
 $(".tab_info2").html(msg1)

$("#show1").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").show() 
    $(".tab_cont2").hide() 
    $(".tab_cont3").hide() 
    $(".tab_cont4").hide() 
    $(".tab_cont5").hide() 
    $(".tab_cont6").hide() 
})

$("#show2").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").hide() 
    $(".tab_cont2").show() 
    $(".tab_cont3").hide() 
    $(".tab_cont4").hide() 
    $(".tab_cont5").hide() 
    $(".tab_cont6").hide() 
})
$("#show3").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").hide() 
    $(".tab_cont2").hide() 
    $(".tab_cont3").show() 
    $(".tab_cont4").hide() 
    $(".tab_cont5").hide() 
    $(".tab_cont6").hide() 
})
$("#show4").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").hide() 
    $(".tab_cont2").hide() 
    $(".tab_cont3").hide() 
    $(".tab_cont4").show() 
    $(".tab_cont5").hide() 
    $(".tab_cont6").hide() 
})
$("#show5").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").hide() 
    $(".tab_cont2").hide() 
    $(".tab_cont3").hide() 
    $(".tab_cont4").hide() 
    $(".tab_cont5").show() 
    $(".tab_cont6").hide() 
})

$("#show6").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
    $(".tab_cont1").hide() 
    $(".tab_cont2").hide() 
    $(".tab_cont3").hide() 
    $(".tab_cont4").hide() 
    $(".tab_cont5").hide() 
    $(".tab_cont6").show() 
})
 $(".tab_cont1 .tab_container li").eq(0).addClass("show")
    $(".tab_cont1 .tab_container li").click(function() {
	    var id = $(this).index()
        // 切换选中的 tab 项
        $(this).addClass('show').siblings().removeClass('show');
        $('.tab_info1').children().eq(id).show().siblings().hide();
})
    $(".tab_cont2 .tab_container li").click(function() {
        var id = $(this).index()
        // 切换选中的 tab 项
        $(this).addClass('show').siblings().removeClass('show');
        $('.tab_info2').children().eq(id).show().siblings().hide();
})