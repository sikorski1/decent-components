import "./page.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Page() {
	return (
		<div className="p-10">
			<Card className="min-h-100">
				<CardHeader>
					<CardTitle className="font-rotonto text-6xl text-center">BUTTONS</CardTitle>
				</CardHeader>
				<CardContent>
					<button className="btn-fancy">
                        <span className="glass"></span>
						<span className="text">+ Add to cart</span>
					</button>
				</CardContent>
			</Card>
		</div>
	);
}
