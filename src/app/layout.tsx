import "./globals.css";
import localFont from "next/font/local";

const grift = localFont({
    src: [
        { path: "../../public/fonts/grift/grift-regular.woff2", weight: "400", style: "normal" },
        { path: "../../public/fonts/grift/grift-medium.woff2", weight: "500", style: "normal" },
        { path: "../../public/fonts/grift/grift-semibold.woff2", weight: "600", style: "normal" },
        { path: "../../public/fonts/grift/grift-bold.woff2", weight: "700", style: "normal" },
        { path: "../../public/fonts/grift/grift-extrabold.woff2", weight: "800", style: "normal" },
        { path: "../../public/fonts/grift/grift-black.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-grift",
    display: "swap",
});

export const metadata = {
    title: "Growth Partner | Restaurant Marketing Agency",
    description:
        "Data-driven growth systems for the modern hospitality industry. Stop burning cash on vanity metrics — we engineer revenue engines.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={grift.variable} suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans" suppressHydrationWarning style={{ margin: 0, padding: 0 }}>
                {children}
            </body>
        </html>
    );
}
