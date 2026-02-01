'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value.trim(),
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value.trim(),
      company:
        (form.querySelector('[name="company"]') as HTMLInputElement)?.value?.trim() || undefined,
      subject: (form.querySelector('[name="subject"]') as HTMLInputElement).value.trim(),
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim(),
    };

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setErrorMessage((data.error as string) || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="container relative z-10 py-12 md:py-20 px-4 md:px-8 max-w-2xl">
        <FadeIn>
          <div className="space-y-4 mb-12">
            <Badge variant="secondary">
              <Mail className="h-3 w-3 mr-1" />
              Connect
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Connect with me</h1>
            <p className="text-lg text-muted-foreground">
              Have a job opportunity, project idea, or want to collaborate? Send me an invite and
              I&apos;ll get back to you.
            </p>
          </div>
        </FadeIn>

        <FadeInOnScroll>
          <Card>
            <CardHeader className="mb-4">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Send a job invite or message
              </CardTitle>
              <CardDescription>
                Fill in the form below. I typically reply within 1–2 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="e.g. Job opportunity – Senior Frontend Engineer"
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, project, or how you'd like to work together..."
                    rows={5}
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p>Thanks! Your message was sent. I&apos;ll reply soon.</p>
                  </div>
                )}

                {status === 'error' && errorMessage && (
                  <div className="flex items-start gap-2 rounded-lg bg-destructive/10 text-destructive p-4">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send invite / message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Or email directly:{' '}
            <a
              href="mailto:truongnguyen1582000@gmail.com?subject=Job%20invite%20%7C%20Portfolio%20contact"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              truongnguyen1582000@gmail.com
            </a>
          </p>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
