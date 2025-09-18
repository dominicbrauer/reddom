import { db, Block } from 'astro:db';

export default async function seed() {
	await db.insert(Block).values([
		{ name: "redstone_dust", formated_name: "Redstone Dust" },
		{ name: "sticky_piston", formated_name: "Sticky Piston" },
		{ name: "repeater", formated_name: "Repeater" },
		{ name: "crafter", formated_name: "Crafter" },
		{ name: "redstone_torch", formated_name: "Redstone Torch" },
	]);
}
