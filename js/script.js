document.addEventListener('DOMContentLoaded', () => {
    // 각 페이지 요소 가져오기
    const introPage = document.getElementById('intro-page');
    const mission1Page = document.getElementById('mission1-page');
    const mission2Page = document.getElementById('mission2-page');
    const mission3Page = document.getElementById('mission3-page');
    const proposePage = document.getElementById('propose-page');

    // 버튼 요소 가져오기
    const startButton = document.getElementById('startButton');
    const mission1Button = document.getElementById('mission1Button');
    const mission1Input = document.getElementById('mission1Input');
    const choiceAButton = document.getElementById('choiceA');
    const choiceBButton = document.getElementById('choiceB');
    const choiceResult = document.getElementById('choiceResult');
    const mission3Button = document.getElementById('mission3Button');
    const mission3Input = document.getElementById('mission3Input');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // 페이지 전환 함수
    const showPage = (pageToShow) => {
        const allPages = [introPage, mission1Page, mission2Page, mission3Page, proposePage];
        allPages.forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });
        pageToShow.classList.remove('hidden');
        pageToShow.classList.add('active');
    };

    // 1. 인트로 페이지 -> 미션 1 페이지
    startButton.addEventListener('click', () => {
        showPage(mission1Page);
    });

    // 2. 미션 1 페이지 로직 (예: 간단한 퀴즈)
    mission1Button.addEventListener('click', () => {
        const answer = mission1Input.value.trim().toLowerCase();
        // 여기에 실제 정답을 입력하세요.
        const correctAnswer = "스타벅스"; // 예시 정답: 두 분의 첫 만남 장소 이름 등
        if (answer === correctAnswer) {
            alert("정답입니다! 다음 미션으로 이동합니다.");
            showPage(mission2Page);
        } else {
            alert("틀렸습니다. 다시 생각해 보세요.");
            // 힌트를 주거나, 시도 횟수를 제한할 수 있습니다.
        }
    });

    // 3. 미션 2 페이지 로직 (선택)
    choiceAButton.addEventListener('click', () => {
        choiceResult.textContent = "현명한 선택입니다! 우리의 길은 언제나 함께하는 길이었지.";
        setTimeout(() => {
            showPage(mission3Page);
        }, 1500); // 1.5초 후 다음 페이지로 이동
    });

    choiceBButton.addEventListener('click', () => {
        choiceResult.textContent = "잠시 솔깃했나요? 하지만 결국 우리의 운명은 하나로 이어집니다! 다음 미션으로!";
        setTimeout(() => {
            showPage(mission3Page);
        }, 2500); // 2.5초 후 다음 페이지로 이동 (메시지 읽을 시간)
    });

    // 4. 미션 3 페이지 로직 (진심 입력)
    mission3Button.addEventListener('click', () => {
        const truth = mission3Input.value.trim();
        if (truth.length > 5) { // 최소 5글자 이상 입력하도록
            alert("당신의 진심이 전달되었습니다. 이제 최후의 순간입니다!");
            // 카운트다운 타이머 시작
            let countdown = 3;
            const countdownInterval = setInterval(() => {
                alert(`${countdown}초 후, 당신의 운명이 결정됩니다...`);
                countdown--;
                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    showPage(proposePage);
                    startSlideshow(); // 프러포즈 페이지에서 슬라이드쇼 시작
                    // 여기에 프로포즈 배경 음악 재생 코드 추가 가능
                    // const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // 예시 음악 URL
                    // audio.play();
                }
            }, 1000); // 1초마다 실행
        } else {
            alert("조금 더 솔직한 마음을 보여주세요. (5글자 이상 입력해주세요)");
        }
    });

    // 5. 최종 프러포즈 페이지 로직 (YES/NO 버튼 및 슬라이드쇼)
    yesButton.addEventListener('click', () => {
        alert("🎉 사랑해요! 평생 행복하게 해줄게요! 🎉");
        // 여기에 추가적인 애니메이션이나 축하 메시지 등을 넣을 수 있습니다.
    });

    noButton.addEventListener('click', () => {
        alert("응? 다시 생각해봐! 당신은 나에게서 벗어날 수 없어! 😉 (장난)");
        // NO를 눌러도 결국 YES로 유도하는 재치 있는 메시지
    });

    // 사진 슬라이드쇼 기능 (최종 프러포즈 페이지)
    const slideshowImages = document.querySelectorAll('.photo-slideshow img');
    let currentSlide = 0;

    const startSlideshow = () => {
        if (slideshowImages.length === 0) return;

        // 초기 이미지 설정
        slideshowImages[currentSlide].classList.add('active');

        setInterval(() => {
            slideshowImages[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slideshowImages.length;
            slideshowImages[currentSlide].classList.add('active');
        }, 4000); // 4초마다 이미지 변경
    };

    // 초기 로드 시 인트로 페이지 표시
    showPage(introPage);
});