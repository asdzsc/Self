/*1. 工作分类选项卡，默认第一个分类的所有职位名称显示/第一个职位是选中状态/第一个职位内容是显示状态。
2. loadJobName函数负责生成职位名称列表，getNameList函数负责职位名称切换,loadData函数负责生成职位内容*/
// ！注意点：loadData函数必须在getNameList函数内部，因为loadData中的数据 data 只有在getNameList函数中才能拿到。

handleJob();

function handleJob() {
    var oJob = document.querySelector('.content .jobInfo');
    var aJobTitle = Array.prototype.slice.call(document.querySelectorAll('.content .job_title li'), 0);
    var oJobList = document.querySelector('.content .job_list');

    //1. 工作分类选项卡
    aJobTitle.forEach(function(value, index) {
        aJobTitle[index].onclick = function() {
            aJobTitle.forEach(function(value, index) {
                aJobTitle[index].className = '';
            })
            this.className = 'active';
            loadJobName(index);
            getNameList(index);
        }
    })

    // 2. 生成职位名称列表
    loadJobName(0);

    function loadJobName(index) {
        var html = '<li>';
        var data = job[index];
        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                html += `<p class="show">${data[i].attr3}</p>`
            } else {
                html += `<p>${data[i].attr3}</p>`
            }
        }
        html += '</li>';
        oJobList.innerHTML = html;
    }
    // 3.实现职位名称选项卡并根据选项卡生成对应的职位内容
    getNameList(0);

    function getNameList(index) {
        //首先生成职位名称列表的DOM节点，然后才能获取。
        var ajobName = Array.prototype.slice.call(document.querySelectorAll('.content .job_list li p'), 0);
        var data = job[index];

        ajobName.forEach(function(value, index) {
            ajobName[index].onclick = function() {
                ajobName.forEach(function(value, index) {
                    ajobName[index].className = '';
                });
                this.className = 'show';
                // 选项卡的下标作为参数传入loadData函数生成对应的职位内容。
                loadData(index);
            }
        })

        // 生成职位内容
        loadData(0);

        function loadData(index) {
            var html = '<li>';
            html += `<ul class="title1">
	                    <li>
	                        <p class="name">一级机构</p>
	                        <p>${data[index].name}
	                        </p>
	                    </li>
	                    <li>
	                        <p class="name">二级机构
	                        </p>
	                        <p>${data[index].value}</p>
	                    </li>
	                    <li>
	                        <p class="name">部门
	                        </p>
	                        <p>${data[index].attr3}</p>
	                    </li>
	                </ul>
	                <div class="cont">
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            岗位职责 Responsibilities
	                            Job Description
	                        </div>
	                        <div class="down">
	                            ${data[index].attr5}
	                        </div>
	                    </div>
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            岗位要求 Qualifications
	                
	                        </div>
	                        <div class="down">
	                            ${data[index].attr6}
	                        </div>
	                    </div>
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            需求专业 Professional
	                
	                        </div>
	                        <div class="down">
	                            ${data[index].attr7}
	                        </div>
	                    </div>
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            学历要求 Education Required
	                        </div>
	                        <div class="down">
	                            ${data[index].attr8}
	                        </div>
	                    </div>
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            需求人数 Number of people
	                        </div>
	                        <div class="down">
	                            ${data[index].attr9}
	                        </div>
	                    </div>
	                    <div class="jd">
	                        <div class="up">
	                            <img src="images/icon.png" alt="">
	                            工作地点 Location
	                        </div>
	                        <div class="down">
	                            ${data[index].attr10}
	                        </div>
	                    </div>
	                    <a class="apply" target="blank"
	                        href="${data[index].link}"><img
	                            src="images/apply.png" alt=""></a>
	                </div>`
            html += '</li>';
            oJob.innerHTML = html;
        }
    }
}