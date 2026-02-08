import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'APIs',
  description: 'REST vs GraphQL, fetch patterns, and React Query. Learn how to consume APIs safely with loading and error handling.',
};
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Globe, Network } from 'lucide-react';

const apiStyles = [
  {
    name: 'REST',
    description: 'Representational State Transfer — resource-based HTTP APIs',
    icon: Globe,
    color: 'text-blue-500',
    pros: [
      'Simple HTTP verbs (GET, POST, PUT, DELETE)',
      'Stateless, cacheable, widely understood',
      'Tooling and docs (OpenAPI/Swagger)',
      'Easy to consume with fetch or axios',
    ],
    cons: ['Over-fetching or under-fetching', 'Multiple round-trips for related data'],
    bestFor: 'CRUD apps, public APIs, mobile + web clients',
  },
  {
    name: 'GraphQL',
    description: 'Query language — client requests exactly the fields it needs',
    icon: Network,
    color: 'text-pink-500',
    pros: [
      'Single endpoint, flexible queries',
      'No over-fetching; one request for nested data',
      'Strong typing and introspection',
      'Great with Apollo, urql, or React Query',
    ],
    cons: ['Caching is harder', 'Complexity on the server', 'Learning curve'],
    bestFor: 'Complex UIs, mobile + web with different data needs',
  },
];

const fetchPattern = `// Simple fetch with error handling
async function getUser(id: string) {
  const res = await fetch(\`/api/users/\${id}\`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || 'Failed to fetch user');
  }

  return res.json();
}

// In React with loading and error state
function useUser(id: string | null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    getUser(id)
      .then((user) => { if (!cancelled) setData(user); })
      .catch((e) => { if (!cancelled) setError(e); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  return { data, error, loading };
}`;

const reactQueryExample = `// With React Query (recommended for server state)
import { useQuery } from '@tanstack/react-query';

function useUser(id: string | null) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetch(\`/api/users/\${id}\`).then((r) => {
      if (!r.ok) throw new Error('Failed to fetch');
      return r.json();
    }),
    enabled: !!id,
  });
}

// In component: automatic loading, error, refetch, cache
function UserProfile({ userId }: { userId: string }) {
  const { data, error, isLoading } = useUser(userId);
  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  return <div>{data.name}</div>;
}`;

const graphqlQuery = `// GraphQL query example
const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
\`;

// With Apollo Client
const { data, loading, error } = useQuery(GET_USER, {
  variables: { id: userId },
});`;

export default function APIsPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">APIs</h1>
          <p className="text-muted-foreground text-lg">
            REST vs GraphQL, fetch patterns, and React Query. Learn how to consume APIs safely
            with loading and error handling.
          </p>
        </div>
      </FadeIn>

      <section id="comparison" className="scroll-mt-20">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold mb-4">REST vs GraphQL</h2>
          <p className="text-muted-foreground mb-6">
            REST uses URLs and HTTP methods; GraphQL uses a single endpoint and a query language.
            Choose based on your API and client needs.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {apiStyles.map((api) => {
              const Icon = api.icon;
              return (
                <Card key={api.name} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${api.color}`} />
                      <div>
                        <CardTitle>{api.name}</CardTitle>
                        <CardDescription>{api.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-green-600">Pros</h4>
                      <ul className="space-y-1">
                        {api.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-red-600">Cons</h4>
                      <ul className="space-y-1">
                        {api.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Best for: {api.bestFor}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="fetch" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Fetch & Error Handling</h2>
          <p className="text-muted-foreground">
            Always check res.ok and handle errors. Use a custom hook or React Query to centralize
            loading and error state.
          </p>
          <CodeBlock code={fetchPattern} lang="typescript" filename="api.ts" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="react-query" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">React Query</h2>
          <p className="text-muted-foreground">
            React Query (TanStack Query) handles caching, refetching, and loading/error state for
            server data. Use queryKey and queryFn for predictable behavior.
          </p>
          <CodeBlock code={reactQueryExample} lang="typescript" filename="useUser.ts" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="graphql" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">GraphQL Queries</h2>
          <p className="text-muted-foreground">
            Define queries with gql and variables. Apollo Client or urql provide useQuery with
            caching and normalized cache options.
          </p>
          <CodeBlock code={graphqlQuery} lang="typescript" filename="queries.ts" />
        </FadeInOnScroll>
      </section>
    </div>
  );
}
