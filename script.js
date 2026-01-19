document.addEventListener('DOMContentLoaded', () => {
    const profileItems = document.querySelectorAll('.profile img');
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeButton = modal.querySelector('.close');

    const profileExplanation = [
        ['ブロック崩し', '2023年6月~', 'Unityで初めて作ったゲームです。ギミックに力を入れました。'],
        ['GOLFINONE', '2024年8月~', '一打(ホールインワン)でカップインを目指す手軽に遊べるゲームです。'],
        ['作品3', '2025年11月~', '制作中'],
        ['Unity', '2023年4月~', 'ゲーム制作'],
        ['Github', '2024年4月~', 'ゲーム制作、共同開発'],
        ['Sourcetree','2024年4月~','共同開発'],
        ['C#', '2023年4月~', 'スクリプト'],
        ['VisualStudio', '2023年4月~2024年8月', ''],
        ['Rider', '2024年8月~', ''],
        
    ];

    profileItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const [title, period, description] = profileExplanation[index];
            modalContent.querySelector('h2').textContent = title;
            modalContent.querySelector('h3').textContent = period;
            modalContent.querySelector('p').textContent = description;
            if(title === "Rider") {
                const copyRight = document.createElement('a');
                copyRight.textContent = "Copyright © 2025 JetBrains s.r.o. [JETBRAINS PRODUCT NAME - e.g PyCharm] and the [PyCharm] logo are trademarks of JetBrains s.r.o."
                copyRight.href = "https://www.jetbrains.com"
                copyRight.style.fontSize = "8px";
                modalContent.appendChild(copyRight);
            }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            modalContent.querySelector('img').setAttribute('src', item.src);
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            document.body.style.overflow = "auto";
            modal.style.display = 'none';
        }
    });
});
