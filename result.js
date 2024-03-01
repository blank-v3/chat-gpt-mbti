document.addEventListener('DOMContentLoaded', function () {
    // id="result" 요소를 찾음
    const resultElement = document.getElementById('result');

    // id="restart-button" 요소를 찾음
    const restartButton = document.getElementById('restart-button');

    // 로컬스토리지에서 mbti_result 값을 가져옴
    const mbtiResult = localStorage.getItem('mbti_result');

    // 결과가 있으면 결과를 표시하고, 없으면 기본 텍스트를 표시
    if (mbtiResult) {
        resultElement.textContent = `${mbtiResult}입니다!`;
        restartButton.textContent = '테스트 하러 가기';
        // 여기에서 다른 동작 수행 가능
    } else {
        resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
        restartButton.textContent = '테스트 하러 가기';
        // 여기에서 다른 동작 수행 가능
    }
});
