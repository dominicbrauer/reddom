import { defineDb, defineTable, column } from 'astro:db';

const Block = defineTable({
	columns: {
		name: column.text({ primaryKey: true }),
		formated_name: column.text(),
	}
});

export default defineDb({
	tables: { Block }
});
