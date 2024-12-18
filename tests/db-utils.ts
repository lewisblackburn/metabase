import fs from 'node:fs'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcryptjs'
import { UniqueEnforcer } from 'enforce-unique'
import { AGE_RATINGS, LANGUAGES, STATUSES } from '#app/utils/constants.js'

const uniqueUsernameEnforcer = new UniqueEnforcer()

export function createUser() {
	const firstName = faker.person.firstName()
	const lastName = faker.person.lastName()

	const username = uniqueUsernameEnforcer
		.enforce(() => {
			return (
				faker.string.alphanumeric({ length: 2 }) +
				'_' +
				faker.internet.username({
					firstName: firstName.toLowerCase(),
					lastName: lastName.toLowerCase(),
				})
			)
		})
		.slice(0, 20)
		.toLowerCase()
		.replace(/[^a-z0-9_]/g, '_')
	return {
		username,
		name: `${firstName} ${lastName}`,
		email: `${username}@example.com`,
	}
}

export function createPassword(password: string = faker.internet.password()) {
	return {
		hash: bcrypt.hashSync(password, 10),
	}
}

let noteImages: Array<Awaited<ReturnType<typeof img>>> | undefined
export async function getNoteImages() {
	if (noteImages) return noteImages

	noteImages = await Promise.all([
		img({
			altText: 'a nice country house',
			filepath: './tests/fixtures/images/notes/0.png',
		}),
		img({
			altText: 'a city scape',
			filepath: './tests/fixtures/images/notes/1.png',
		}),
		img({
			altText: 'a sunrise',
			filepath: './tests/fixtures/images/notes/2.png',
		}),
		img({
			altText: 'a group of friends',
			filepath: './tests/fixtures/images/notes/3.png',
		}),
		img({
			altText: 'friends being inclusive of someone who looks lonely',
			filepath: './tests/fixtures/images/notes/4.png',
		}),
		img({
			altText: 'an illustration of a hot air balloon',
			filepath: './tests/fixtures/images/notes/5.png',
		}),
		img({
			altText:
				'an office full of laptops and other office equipment that look like it was abandoned in a rush out of the building in an emergency years ago.',
			filepath: './tests/fixtures/images/notes/6.png',
		}),
		img({
			altText: 'a rusty lock',
			filepath: './tests/fixtures/images/notes/7.png',
		}),
		img({
			altText: 'something very happy in nature',
			filepath: './tests/fixtures/images/notes/8.png',
		}),
		img({
			altText: `someone at the end of a cry session who's starting to feel a little better.`,
			filepath: './tests/fixtures/images/notes/9.png',
		}),
	])

	return noteImages
}

let userImages: Array<Awaited<ReturnType<typeof img>>> | undefined
export async function getUserImages() {
	if (userImages) return userImages

	userImages = await Promise.all(
		Array.from({ length: 10 }, (_, index) =>
			img({ filepath: `./tests/fixtures/images/user/${index}.jpg` }),
		),
	)

	return userImages
}

export async function img({
	altText,
	filepath,
}: {
	altText?: string
	filepath: string
}) {
	return {
		altText,
		contentType: filepath.endsWith('.png') ? 'image/png' : 'image/jpeg',
		blob: await fs.promises.readFile(filepath),
	}
}

export function createFilm() {
	const title = faker.word.words()
	const tagline = faker.lorem.sentence()
	const overview = faker.lorem.paragraphs()
	const runtime = faker.number.int({ min: 60, max: 180 })
	const releaseDate = new Date(faker.date.past())

	const ageRating = AGE_RATINGS.sort(() => Math.random() - Math.random()).slice(
		0,
		1,
	)[0]?.value

	const selectedLanguage = LANGUAGES.sort(
		() => Math.random() - Math.random(),
	).slice(0, 1)[0]

	const language = selectedLanguage ? selectedLanguage.name : ''
	const status =
		STATUSES.sort(() => Math.random() - Math.random()).slice(0, 1)[0]?.name ||
		''

	const contentScore = faker.number.float({ min: 0, max: 100, multipleOf: 0.1 })
	const budget = faker.number.int({ min: 0, max: 1000000000 })
	const revenue = faker.number.int({ min: 0, max: 1000000000 })

	return {
		title,
		tagline,
		overview,
		runtime,
		releaseDate,
		ageRating,
		language,
		status,
		contentScore,
		budget,
		revenue,
	}
}

export function createPerson() {
	const name = faker.person.fullName()

	return {
		name,
	}
}
