// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "My baby, my baby momma, my love, my Adri",

    pageTitle: "Will you be my valentine? 🥺❤️",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '🍆', '💦', '😺'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you love me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "yes, I di dead up fi you babes 😏"
        },
        second: {
    text: "How much do you love me?",
    minText: "A little 🤏",
    maxText: "Too damn much ❤️",
    buttonText: "This much!"
}

    },

    celebration: {
        title: "Lucky me! 😍😘",
        message: "Can't wait to eat that 🐱 real good 😉. I love you Mrs Novelo",
        emojis: "❤️😍💕😈😚"
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dl8daidfy/video/upload/v1769747818/I_Wanna_Be_Yours_kow0m9.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
