import { Vollkorn } from 'next/font/google';

const vollkorn = Vollkorn({
    subsets: ['latin'],
    weight: ['400', '600', '900'],
});

export const metadata = {
    title: 'post',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={`w-full flex`}>{children}</div>;
}
