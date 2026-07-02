export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 px-4">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.15), transparent)' }} />
      <div className="mx-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: i === 1 ? '#00d4ff' : 'rgba(0,212,255,0.3)' }}
          />
        ))}
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(0,212,255,0.15), transparent)' }} />
    </div>
  )
}
