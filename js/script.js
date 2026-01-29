// HEROクリック時の役職選択機能
function navigateToRole() {
    const input = prompt('役職名を入力してください（スプリンター / タンク / アタッカー / ガンナー）:');

    if (input === null) {
        // キャンセルされた場合
        return;
    }

    const roleName = input.trim();

    // 役職名とファイル名
    const roleMap = {
        'スプリンター': 'sprinter/sprinter.html',
        'タンク': 'tank/tank.html',
        'アタッカー': 'attacker/attacker.html',
        'ガンナー': 'gunner/gunner.html'
    };

    if (roleMap[roleName]) {
        window.location.href = roleMap[roleName];
    } else {
        alert('正しい役職名を入力してください（スプリンター / タンク / アタッカー / ガンナー）');
    }
}

// Secret Menu Handler
function handleSecretClick() {
    const answer = prompt("ニコニコを数字に変えると...?");
    if (answer === '2525') {
        alert("URLの「最終課題.html」を「secret/最終課題00.html」に変えると...?");
    }
}

// 役職フィルター
document.addEventListener('DOMContentLoaded', function () {
    const roleButton = document.querySelectorAll('.role-btn');
    const srcImg = document.querySelectorAll('.gallery img');


    roleButton.forEach(loopButton => {
        loopButton.addEventListener('click', function () {
            const selectRole = this.dataset.role;
            roleButton.forEach(loopBtn => loopBtn.classList.remove('active'));

            if (selectRole === 'reset') {
                // リセット
                srcImg.forEach(loopImg => {
                    loopImg.classList.remove('dimmed', 'highlighted');
                });
            }
            else {
                this.classList.add('active');

                // 画像のフィルタリング
                srcImg.forEach(loopImg => {
                    if (loopImg.dataset.role === selectRole) {
                        // 該当する役職：光らせる
                        loopImg.classList.remove('dimmed');
                        loopImg.classList.add('highlighted');
                    }
                    else {
                        // 該当しない役職：暗くする
                        loopImg.classList.remove('highlighted');
                        loopImg.classList.add('dimmed');
                    }
                });
            }
        });
    });
});
