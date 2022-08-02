module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/modules/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkish: "#1a1a1a",
                dark: "#000",
                light: "#fff",
                primary: "#f8f8f8",
                accent: "#017BFE",
                "accent-light": "#1a88fe",
                "accent-dark": "#016fe5",
                "accent-transparent": "rgba(1,111,229,.1)",
                "almost-transparent": "rgba(255,255,255,.2)",
                "almost-transparent-black": "rgba(0,0,0,.1)",
                "price": "#e40003",
                "footer": "#a5c6e8",
                "footer-bg": "#4d97e2"
            },
            fontFamily: {
                primary: ["'Ubuntu Mono'", "monospace"],
            },
            zIndex: {
                header: 2000,
            },
        },
    }
};
