import { BigLink, Container, Label } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-40">
      <Label>Error 404</Label>
      <h1 className="display mt-5 text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">Page Not Found</h1>
      <p className="mt-6 max-w-[50ch] text-lg text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <BigLink href="/" variant="solid" className="mt-10 max-w-sm">
        Back to Home
      </BigLink>
    </Container>
  );
}
