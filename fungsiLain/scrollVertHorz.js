import { driver } from '@wdio/globals'

async function scrollVert (fromY, toY) {
	await driver.pause(1000)

	await driver
		.action('pointer')
		.move({ x: 250, y: fromY })
		.down()
		.pause(100)
		.move({ duration: 200, x: 250, y: toY })
		.up()
		.perform();
}

async function scrollHorz (fromX, toX) {
	await driver.pause(1000)

	await driver
		.action('pointer')
		.move({ x: fromX, y: 250 })
		.down()
		.pause(100)
		.move({ duration: 200, x: toX, y: 250 })
		.up()
		.perform();
}
export {scrollVert, scrollHorz}