import { bookGenresLabels } from '@/features/books/constants/book-enums';
import { CodegenConfig } from '@graphql-codegen/cli';

import { loadEnvFile } from 'process';

loadEnvFile();

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'https://lwmecktyyhputyqkdigy.hasura.eu-west-2.nhost.run/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET || ''
                }
            }
        }
    ],
    documents: ['./src/graphql/**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query'
                // NOTE: This plugin does not allow for maxDepth to be set
                // Hasura has bi-directional relationships, this creates infinite loops
                // 'graphql-codegen-typescript-validation-schema'
            ],
            config: {
                documentMode: 'string',
                fetcher: '../lib/graphql-client#fetcher',
                addInfiniteQuery: true,
                reactQueryVersion: 5
                // scalarSchemas: {
                //     uuid: 'z.string().uuid()',
                //     timestamp: 'z.string().datetime()',
                //     timestamptz: 'z.string().datetime()',
                //     date: 'z.string().date()',
                //     jsonb: 'z.any()',
                //     bigint: 'z.string()',
                //     bytea: 'z.string()',
                //     citext: 'z.string()',
                //     interval: 'z.string()',
                //     money: 'z.string()',
                //     smallint: 'z.number().int()'
                // },
                // defaultScalarSchema: 'z.unknown()',
                // schema: 'zod',
            }
        }
    }
};

export default config;
