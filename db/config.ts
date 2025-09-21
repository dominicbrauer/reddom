import { defineDb, defineTable, column } from 'astro:db';

const Block = defineTable({
	columns: {
		// block ID
		id_name: column.text({ primaryKey: true }),
		// block name
		name: column.text(),
		// can be stacked to bundles of 16/64
		is_stackable: column.boolean(),
		// exact stack size if stackable
		stack_size: column.number(),
		// constant for how easy the block is destructable by explosions
		blast_resistance: column.number(),
		// constant for how easy the block is breakable
		hardness: column.number(),
		// covers a whole block without see-through
		is_transparent: column.boolean(),
		// required tool for breaking
		tool: column.text(),
	}
});

export default defineDb({
	tables: { Block }
});
