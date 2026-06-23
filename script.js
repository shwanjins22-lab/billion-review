const campaigns = [
    
    {
    title: "성수동 파스타 맛집 체험단",
    category: "맛집",
    recruit: "10명",
    status: "마감임박",
    image: "https://picsum.photos/400/260?random=1"
},
    {
        title: "가평 감성 펜션 체험단",
        category: "숙박",
        recruit: "3명",
        status: "마감임박",
        image: "https://picsum.photos/400/260?random=2"
    },
    {
        title: "프리미엄 스킨케어 체험단",
        category: "뷰티",
        recruit: "20명",
        status: "마감임박",
        image: "https://picsum.photos/400/260?random=3"
    },
    {
        title: "홍대 감성 카페 체험단",
        category: "카페",
        recruit: "8명",
        status: "마감임박",
        image: "https://picsum.photos/400/260?random=4"
    }
];

const campaignList = document.getElementById("campaignList");

function renderCampaign(list) {
    if (!campaignList) return;

    campaignList.innerHTML = "";

    list.forEach(campaign => {
        campaignList.innerHTML += `
            <div class="card">
                <img src="${campaign.image}" alt="">
                <div class="card-content">
                    <span class="badge">${campaign.category}</span>
                    <span class="status-badge">
    ${campaign.status}
</span>
                    <h3>${campaign.title}</h3>
                    <p>모집인원 ${campaign.recruit}</p>
                    <a href="detail.html" class="apply-btn">신청하기</a>
                </div>
            </div>
        `;
    });
}

function filterCampaign(category) {
    if (category === "전체") {
        renderCampaign(campaigns);
    } else {
        const filtered = campaigns.filter(campaign => campaign.category === category);
        renderCampaign(filtered);
    }
}

renderCampaign(campaigns);

function searchCampaign() {
    const keyword = document.getElementById("searchInput").value;

    const searched = campaigns.filter(campaign =>
        campaign.title.includes(keyword) ||
        campaign.category.includes(keyword)
    );

    renderCampaign(searched);
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchCampaign();
        }
    });
}