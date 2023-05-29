import Navbar from "@/components/layouts/Navbar";
import { FC, ReactNode } from "react";
import "server-only";
import "./globals.css";

export const metadata = {
	title: "BatchBook",
	description:
		"Open-source collaboration tool for agile developer teams to work together efficiently with features like kanban board and chat discussion room",
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<div className="h-screen bg-gradient-to-b from-shade-blue to-navy-blue pt-12">
					<Navbar />
					{props.children}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
