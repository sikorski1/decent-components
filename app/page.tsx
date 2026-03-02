import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./gradient-button.css";
import "./btn.css";
export default function Page() {
	return (
		<div className="p-10">
			<Card>
				<CardHeader>
					<CardTitle className="font-rotonto text-6xl text-center">BUTTONS</CardTitle>
				</CardHeader>
				<CardContent className="grid grid-cols-4 gap-4 grid-rows-[repeat(2,minmax(150px,auto))]">
					<div className="flex items-center justify-center bg-gray-100 rounded-xl aspect-square">
						<button className="btn-fancy max-w-50">
							<span className="glass"></span>
							<span className="text">+ Add to cart</span>
						</button>
					</div>
					<div className="flex items-center justify-center bg-gray-100 rounded-xl aspect-square">
						<button className="btn-1 max-w-50">
							<span className="text">+ Add to cart</span>
						</button>
					</div>
					<div className="flex items-center justify-center bg-gray-100 rounded-xl aspect-square">
						<button className="btn-1-clip-path max-w-50">
							<span className="text">+ Add to cart</span>
						</button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
