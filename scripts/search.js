"use strict";
const inputQuery = document.getElementById("input-query");
const submitBtn = document.getElementById("btn-submit");
const newsContainer = document.getElementById("news-container");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
//
const renderNews = function (news) {
  newsContainer.innerHTML = "";
  news.articles.forEach((element) => {
    if (!element.urlToImage) {
      element.urlToImage = "../no_image_available.jpeg";
    }
    newsContainer.innerHTML += `
    <div class="card flex-row flex-wrap">
					<div class="card mb-3" style="">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img src="${element.urlToImage}"
									class="card-img"
									alt="${element.title}">
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">${element.title}</h5>
									<p class="card-text">${element.description}</p>
									<a href="${element.url}"
										class="btn btn-primary">View</a>
								</div>
							</div>
						</div>
					</div>
				</div>`;
  });
  const total = news.totalResults;
  if (pageNum.textContent === String(Math.ceil(total / currentUser.pageSize))) {
    //nextBtn.style.display = "none";
    nextBtn.disabled = true; // Vô hiệu hóa nút
    nextBtn.style.opacity = "0.5"; // Làm mờ nút
  } else {
    //nextBtn.style.display = "block";
    nextBtn.disabled = false; // Nút hoạt động trở lại
    nextBtn.style.opacity = "1"; // Hiện rõ nút
  }
  if (pageNum.textContent < 2) {
    //prevBtn.style.display = "none";
    prevBtn.disabled = true; // Vô hiệu hóa nút
    prevBtn.style.opacity = "0.5"; // Làm mờ nút
  } else {
    //prevBtn.style.display = "block";
    prevBtn.disabled = false; // Nút hoạt động trở lại
    prevBtn.style.opacity = "1"; // Hiện rõ nút
  }
};
//
const getDataNews = async function (page) {
  try {
    //console.log(page);
    //console.log(currentUser.pageSize);
    //Kết nối với API và lấy dữ liệu
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${inputQuery.value}&pagesize=${currentUser.pageSize}&page=${page}&apiKey=e2dadb7dec7c46fc9dece4ee15f77703`
    );

    //Chuyển API về dạng json
    const data = await res.json();
    console.log(data);
    renderNews(data);
  } catch (err) {
    console.error("Error: " + err.message);
  }
};

submitBtn.addEventListener("click", function () {
  if (currentUser) {
    if (inputQuery.value) {
      //Hien thi tin tuc
      getDataNews(1);
      //Nut chuyen trang
      prevBtn.addEventListener("click", function () {
        getDataNews(--pageNum.textContent);
      });
      nextBtn.addEventListener("click", function () {
        getDataNews(++pageNum.textContent);
      });
    } else {
      alert("Fill in the blank.");
    }
  } else {
    alert("Please login!");
  }
});
