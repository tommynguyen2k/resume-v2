import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Folder Structure',
  description: 'Popular strategies for organizing folders and files in Next.js (App Router) projects, from basic to advanced.',
};
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/code-block';

const colocationCode = `src/                      (hoặc không có src/, đặt trực tiếp ở root)
├── app/                  ← mọi thứ liên quan đến routing nằm đây
│   ├── layout.tsx
│   ├── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── (auth)/           ← group route (không ảnh hưởng URL)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── dashboard/        ← route thật
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   └── api/              ← Route Handlers (API)
│       └── webhook/
│           └── route.ts
├── components/           ← UI chung, reusable
│   ├── ui/               ← shadcn/ui, Radix, hoặc tự build
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/           ← Header, Footer, Sidebar...
│   └── feature/          (tùy chọn)
├── lib/                  ← non-UI logic, utilities
│   ├── utils.ts
│   ├── auth.ts
│   └── db.ts
├── hooks/                ← custom hooks
├── types/                ← TypeScript types chung
├── styles/               (nếu không dùng tailwind globals)
└── actions/              ← Server Actions (nếu tách riêng)`;

const featureBasedCode = `app/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── products/
│   └── users/`;

const atomicCode = `components/
├── atoms/
├── molecules/
├── organisms/
├── templates/
└── pages/`;

const serverClientCode = `components/
├── server/
├── client/
└── shared/`;

export default function FolderStructurePage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Folder Structure Strategies</h1>
          <p className="text-muted-foreground text-lg">
            Các strategy phổ biến để tổ chức folder/file trong dự án Next.js (App Router), từ cơ bản
            đến nâng cao, phù hợp với các quy mô dự án khác nhau.
          </p>
        </div>
      </FadeIn>

      <section id="colocation" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                1. Cấu trúc mặc định + Colocation
                <Badge variant="secondary">Khuyên dùng</Badge>
              </CardTitle>
              <CardDescription>
                Cách Next.js chính thức khuyến nghị cho hầu hết dự án vừa & nhỏ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Đây là cách Next.js chính thức khuyến nghị và cũng là cách phổ biến nhất hiện nay
                (2025).
              </p>
              <CodeBlock lang="text" code={colocationCode} />
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-2">Khi nào dùng?</p>
                <p className="text-sm text-muted-foreground">
                  Dự án vừa & nhỏ, team 1–8 người, muốn nhanh, dễ maintain.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="feature-based" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle>2. Feature-based / Domain-driven structure</CardTitle>
              <CardDescription>Rất phổ biến cho dự án trung bình → lớn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Mỗi tính năng lớn được gói gọn thành một folder riêng (vertical slice).
              </p>
              <CodeBlock lang="text" code={featureBasedCode} />
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-2">Ưu điểm:</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Dễ scale theo team (mỗi team làm 1 feature)</li>
                  <li>Dễ xóa feature (xóa cả folder)</li>
                  <li>Giữ tính đóng gói cao</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="atomic" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle>3. Atomic Design + Feature Folders</CardTitle>
              <CardDescription>
                Kết hợp - thường thấy trong dự án lớn, design system mạnh
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock lang="text" code={atomicCode} />
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="server-client" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle>4. Server Components vs Client Components</CardTitle>
              <CardDescription>
                Rất quan trọng 2025 - Tách rõ ràng để dễ quản lý &quot;use client&quot;
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Cách 1 – Tách folder</h4>
                  <CodeBlock lang="text" code={serverClientCode} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cách 2 – Dùng hậu tố (phổ biến hơn)</h4>
                  <CodeBlock lang="text" code={serverClientCode} />
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="comparison" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle>So sánh nhanh các strategy phổ biến 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Quy mô dự án</th>
                      <th className="text-left p-3 font-medium">Strategy khuyến nghị</th>
                      <th className="text-left p-3 font-medium">Ưu tiên chính</th>
                      <th className="text-left p-3 font-medium">Độ phức tạp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Cá nhân / nhỏ</td>
                      <td className="p-3">Colocation + src/app + components/ui</td>
                      <td className="p-3">Đơn giản, nhanh</td>
                      <td className="p-3">★☆☆☆☆</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Startup vừa</td>
                      <td className="p-3">Feature folders + colocation</td>
                      <td className="p-3">Dễ scale theo tính năng</td>
                      <td className="p-3">★★☆☆☆</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Sản phẩm lớn</td>
                      <td className="p-3">Domain/Feature + Atomic + tách server/client</td>
                      <td className="p-3">Team lớn, design system mạnh</td>
                      <td className="p-3">★★★★☆</td>
                    </tr>
                    <tr>
                      <td className="p-3">Enterprise</td>
                      <td className="p-3">Modular + monorepo + packages/ui</td>
                      <td className="p-3">Chia module, tái sử dụng cross-project</td>
                      <td className="p-3">★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="best-practices" className="scroll-mt-20">
        <FadeInOnScroll>
          <Card>
            <CardHeader>
              <CardTitle>Lời khuyên thực tế 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Dùng <code className="bg-muted px-1.5 py-0.5 rounded">src/</code> folder (để
                    tách biệt code với config)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Đặt <strong>Server Actions</strong> gần nơi sử dụng (trong folder feature hoặc
                    file actions.ts)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Dùng <code className="bg-muted px-1.5 py-0.5 rounded">(group)</code> để gom các
                    route không ảnh hưởng URL
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Đặt tên file rõ ràng:{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">page.tsx</code>,{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">layout.tsx</code>,{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">route.ts</code>,{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">loading.tsx</code>,{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">error.tsx</code>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Nếu dùng <strong>tRPC / React Query / RTK Query</strong> → tạo folder{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">queries/</code> hoặc{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">api/</code> trong feature
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Đừng lạm dụng quá nhiều layer trừ khi dự án &gt; 50–100 màn hình</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </section>
    </div>
  );
}
