import { Blocks, Categories, db } from 'astro:db';

export default async function seed() {
	await db.insert(Categories).values([
		{
			ID: "signal_transmission",
			Name: "Signal Transmission",
		},
		{
			ID: "movement",
			Name: "Movement",
		},
	]);

	await db.insert(Blocks).values([
		{
			ID: "redstone_dust",
			Name: "Redstone Dust",
			BlastResistance: 0,
			CategoryID: "signal_transmission",
			Hardness: 0,
			HasEfficientTool: false,
			IsTransparent: true,
			StackSize: 64,
		},
		{
			ID: "repeater",
			Name: "Repeater",
			BlastResistance: 5,
			CategoryID: "signal_transmission",
			Hardness: 0,
			HasEfficientTool: false,
			IsTransparent: true,
			StackSize: 64,
		},
		{
			ID: "sticky_piston",
			Name: "Sticky Piston",
			BlastResistance: 10,
			CategoryID: "movement",
			Hardness: 30,
			HasEfficientTool: false,
			IsTransparent: false,
			StackSize: 64,
		},
	]);
}
