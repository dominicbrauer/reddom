import { defineDb, defineTable, column } from 'astro:db';

const Categories = defineTable({
	columns: {
		// category ID
		ID: column.text({ primaryKey: true }),
		// category name
		Name: column.text(),
	}
});

const Blocks = defineTable({
	columns: {
		// block ID
		ID: column.text({ primaryKey: true }),
		// block name
		Name: column.text(),
		// stack size (1 / 16 / 64)
		StackSize: column.number(),
		// constant for how easy the block is destructable by explosions
		BlastResistance: column.number(),
		// constant for how easy the block is breakable
		Hardness: column.number(),
		// false if the block fully covers a block
		IsTransparent: column.boolean(),
		// block category ID
		CategoryID: column.text({ references: () => Categories.columns.ID }),
		// true if the block can be broken faster with a certain tool
		HasEfficientTool: column.boolean(),
	}
});

const IntendedToolProperty = defineTable({
	columns: {
		// block ID
		BlockID: column.text({ references: () => Blocks.columns.ID }),
		// tool name
		Tool: column.text(),
	}
});

export default defineDb({
	tables: {
		Blocks,
		Categories,
		IntendedToolProperty
	}
});
