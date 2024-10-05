import { animate, motion } from 'framer-motion'
export default function Badge({ caption }) {
  return <motion.span className="badge"
    animate={{
      scale: [1, 1.3, 1], // scale the badge up and down
      transition: { duration: 0.5, }, // the animation will take 0.5 seconds
    }}
  >{caption}</motion.span>;
}
