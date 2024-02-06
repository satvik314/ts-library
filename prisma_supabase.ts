import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@supabase/prisma-client-js'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

const prisma = new PrismaClient()

const question = await prisma.grade7_math_data.create({
    data: {
      question: 'What is the sum of 2 and 3?',
      options: '[1, 2, 3, 4, 5]',
      explanation: 'The sum of 2 and 3 is 5.',
      bloomsLevel: 'Understanding',
      difficultyLevel: 1,
      metadata: {
        topic: 'Addition',
        grade: 7
      }
    }
  })

const questionId = question.id

const updatedQuestion = await prisma.grade7_math_data.update({
    where: { id: questionId },
    data: {
      question: 'What is the sum of 3 and 4?'
    }
  })

await prisma.grade7MathData.delete({
    where: { id: questionId }
  })

  await prisma.$disconnect()