interface ProofChipsProps {
  items: string[];
}

export default function ProofChips({ items }: ProofChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 backdrop-blur-sm px-5 py-2.5 text-sm text-foreground hover:border-accent/50 hover:bg-muted transition-all"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

