let data = {
    name: 'Cindy Chi',
    skill: ['企劃', '資料庫規劃', 'Vue.js', 'JavaScript', 'JQuery', 'HTML5', 'CSS3'],
    school: ['2013年畢業　國立高雄第一科技大學　資訊管理系', '2009年畢業　高雄高級商業職業學校　商業經營科'],
    experience: [
        {
            period: '2016/7-2020/7',
            howlong: '4年',
            company: '晨星網路科技股份有限公司',
            title:'PM'
        },
        {
            period: '2015/7-2016/2',
            howlong: '8個月',
            company: '蝴蝶數位娛樂有限公司',
            title:'遊戲營運企劃'
        },
        {
            period: '2013/7-2015/2',
            howlong: '1年8個月',
            company: '傳奇網路股份有限公司',
            title:'遊戲研發企劃'
        }
    ],
    autobiography:['求職者紀馨婷，畢業於國立高雄第一科技大學資訊管理系，個性活潑外向、熱心助人。我出生於平凡和樂的家庭，從國中開始，爸媽對小孩採開放式教育，於是養成我自動自發且刻苦耐勞的好習慣，也讓我學會為自己的未來努力。','大學四年級的專題製作是與同學一起開發手機遊戲APP，負責的部分為規劃整個遊戲內容與架構，最終的遊戲畫面設計也是由自己操刀製作，此手機遊戲APP還在校內專題發表會上得到佳作。此外本人好於社交，不時會相約好友一起出遠門，在大學期間承諾帶好友一起韓國自助行，本身對企劃相當感興趣，所以主動扛起了擬定行程規劃與交通辦法等工作，吸收網路上的資訊並加以規畫、統整，讓我們的自助行更加順利。','畢業後的第一份工作是傳奇網路股份有限公司，是台灣自製線上遊戲公司並參與專案「聖境傳說」，工作內容不外乎是要在有限的在時間內想出有趣且可行的企劃文案並順利的執行製作，也要為了提升玩家留存、營收等定時開會討論，開發新的程式功能，並撰寫企劃案供程式製作，工作上手後也同時接任了該案的美術窗口、日本窗口等。企劃除了要會撰寫企劃案之外，溝通協調也是相當重要的，在工作中也接觸到了美術、程式、海外、客服、行銷等。學習有效的時程控管與溝通協調等經驗讓我在就職的過程中受益良多也感到生活充實。','為了更多元的充實自己，我進入了代理且營運遊戲的蝴蝶數位娛樂有限公司。希望可以多方面的了解營運一款遊戲所需要的相關知識，營運商與研發商的工作內容幾乎完全不同，從這份工作中也學習到了許多在研發公司所學習不到的工作技能。例如：與原廠的溝通協調、遊戲營運排程規劃、營運數據統計分析等營運方面的知識。最後在父母的期盼下，我離開了台北回鄉打拼。','回高雄後進入晨星網路科技擔任PM，工作內容與以往更加不同，不僅要規劃、設計、建置網站，還需要分配程式與美術的工作內容及控時程，在有限的時間內爭取最大的產出。另外也因為美術人力的不足，在工作中學習了一些美術技能，像是設計與切版(html、CSS)，在切版過程中讓我更增添了對程式的興趣。為了更增進自己的實力，也考慮到即將要滿30歲，所以離職去報名資策會的課程，目前已錄取資策會全端工程師就業養成班(課程時間2020/8/17-2020/12/11)，待未來修成後投入程式設計師的行列。目前課程也將接近尾聲，目前正在進行期末專題的製作，被分配到的工作內容為：網站規劃設計及前端網頁製作。','未來想要轉行從事程式設計師相關工作，希望可以從工作中學習到更多，並激發自己的潛能與提升這方面的能力。對我來說，做任何事情最重要的就是態度。感謝您閱讀我的自傳，若貴公司對我個人經歷感興趣，需等到資策會課程結束後才能進行進一步的面談，若未來有機會進入貴公司，馨婷必定將所學發揮到最大的效用。']
};

let vm = new Vue({
    el: '#app',
    data: data
});