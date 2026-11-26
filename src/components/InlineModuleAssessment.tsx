import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lock,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { MODULE_4_FLASHCARDS, QUIZ_PACKS } from '../data/assessmentsData';
import { UserProgress } from '../types/course';

interface InlineModuleAssessmentProps {
  moduleId: number;
  modTitle: string;
  completedCount: number;
  totalUnits: number;
  progress: UserProgress;
  onSaveQuizScore: (quizId: string, score: number, total: number) => void;
  onCompleteModuleUnits: () => void;
  onProceedNextModule?: () => void;
}

export function InlineModuleAssessment({
  moduleId,
  modTitle,
  completedCount,
  totalUnits,
  progress,
  onSaveQuizScore,
  onCompleteModuleUnits,
  onProceedNextModule,
}: InlineModuleAssessmentProps) {
  const pack =
    QUIZ_PACKS.find((p) => p.moduleId === moduleId) ?? QUIZ_PACKS[0];
  const isModuleCompleted = completedCount >= totalUnits && totalUnits > 0;
  const pct = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

  const [earlyUnlock, setEarlyUnlock] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [subMode, setSubMode] = useState<'quiz' | 'flashcards'>('quiz');
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [flashcardRevealed, setFlashcardRevealed] = useState(false);

  useEffect(() => {
    setEarlyUnlock(false);
    setAnswers({});
    setSubmitted(false);
    setSubMode('quiz');
    setFlashcardIdx(0);
    setFlashcardRevealed(false);
  }, [moduleId]);

  const isQuizOpen = isModuleCompleted || earlyUnlock;
  const savedScore = progress.quizBestScores[pack.id];
  const answeredCount = pack.questions.filter(
    (q) => answers[q.id] !== undefined
  ).length;
  const computedScore = pack.questions.reduce(
    (sum, q) => (answers[q.id] === q.correctIndex ? sum + 1 : sum),
    0
  );

  const handleSubmit = () => {
    setSubmitted(true);
    onSaveQuizScore(pack.id, computedScore, pack.questions.length);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const activeCard = MODULE_4_FLASHCARDS[flashcardIdx];

  return (
    <section
      id="module-assessment"
      aria-labelledby={`m${moduleId}-assessment-heading`}
      className="pt-8 mt-8 border-t border-slate-700/80 space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-5">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="font-semibold text-cyan-300 uppercase tracking-wider">
              End-of-Module {moduleId} Assessment
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300 tabular-nums">
              {pack.questions.length} MCQs
            </span>
            {savedScore && (
              <>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="font-semibold text-emerald-400 tabular-nums">
                  Best Score: {savedScore.score}/{savedScore.total} (
                  {Math.round((savedScore.score / savedScore.total) * 100)}%)
                </span>
              </>
            )}
          </div>
          <h2
            id={`m${moduleId}-assessment-heading`}
            className="font-display text-2xl font-semibold text-white"
          >
            Module {moduleId} Knowledge Check: {modTitle}
          </h2>
          <p className="text-sm text-slate-300">{pack.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {moduleId === 4 && isQuizOpen && (
            <div className="flex border border-slate-600 rounded-sm overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => setSubMode('quiz')}
                className={`px-3 py-1.5 font-semibold ${
                  subMode === 'quiz'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-[#182233] text-slate-200 hover:bg-slate-700/70'
                }`}
              >
                MCQ Quiz ({pack.questions.length})
              </button>
              <button
                type="button"
                onClick={() => setSubMode('flashcards')}
                className={`px-3 py-1.5 font-semibold ${
                  subMode === 'flashcards'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-[#182233] text-slate-200 hover:bg-slate-700/70'
                }`}
              >
                Flashcards ({MODULE_4_FLASHCARDS.length})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Completion Gate when units remain */}
      {!isQuizOpen && (
        <div className="bg-[#182233] border border-slate-600/70 rounded-sm p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">
                  Complete Module {moduleId} Units to Unlock Assessment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You have completed{' '}
                  <strong className="text-white tabular-nums">
                    {completedCount} of {totalUnits}
                  </strong>{' '}
                  units ({pct}%) in Module {moduleId}. Finish the remaining study units above or mark the module complete to begin the end-of-module quiz.
                </p>
              </div>
            </div>

            <span className="font-mono text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-800/70 px-2.5 py-1 rounded-sm shrink-0 tabular-nums">
              {completedCount}/{totalUnits} Units ({pct}%)
            </span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-sm overflow-hidden">
            <div
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onCompleteModuleUnits}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold px-4 py-2 rounded-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark All Module {moduleId} Units Complete &amp; Start Quiz</span>
            </button>
            <button
              type="button"
              onClick={() => setEarlyUnlock(true)}
              className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 px-2 py-1"
            >
              Take Assessment Now Anyway
            </button>
          </div>
        </div>
      )}

      {/* Open Quiz Body */}
      {isQuizOpen && subMode === 'quiz' && (
        <div className="space-y-5">
          {!isModuleCompleted && earlyUnlock && (
            <div className="p-3 bg-amber-950/40 border border-amber-800/70 rounded-sm flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200">
              <span>
                Early assessment preview enabled ({completedCount}/{totalUnits} units marked complete).
              </span>
              <button
                type="button"
                onClick={onCompleteModuleUnits}
                className="font-semibold underline hover:text-white"
              >
                Mark all Module {moduleId} units complete
              </button>
            </div>
          )}

          <div className="flex items-center justify-between text-xs font-mono text-slate-300 tabular-nums">
            <span>
              Progress: {answeredCount}/{pack.questions.length} answered
            </span>
            {submitted && (
              <span className="px-2.5 py-1 bg-emerald-950/60 border border-emerald-700 text-emerald-300 font-semibold rounded-sm">
                Final Score: {computedScore}/{pack.questions.length} (
                {Math.round((computedScore / pack.questions.length) * 100)}%)
              </span>
            )}
          </div>

          <div className="space-y-4">
            {pack.questions.map((q, qIdx) => {
              const selectedOption = answers[q.id];
              const isCorrect = selectedOption === q.correctIndex;
              return (
                <article
                  key={q.id}
                  className="p-4 sm:p-5 border border-slate-600/70 bg-[#182233] rounded-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-300">
                    <span>
                      Question {qIdx + 1} of {pack.questions.length}
                      {q.subtopic ? ` · ${q.subtopic}` : ''}
                    </span>
                    <span>{q.citation}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {q.question}
                  </h3>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const picked = selectedOption === optIdx;
                      let optionStyle =
                        'border-slate-600 bg-[#243044] text-slate-100 hover:border-slate-400';

                      if (submitted) {
                        if (optIdx === q.correctIndex) {
                          optionStyle =
                            'border-emerald-700 bg-emerald-950/50 text-emerald-200 font-medium';
                        } else if (picked && optIdx !== q.correctIndex) {
                          optionStyle =
                            'border-red-700 bg-red-950/50 text-red-200';
                        }
                      } else if (picked) {
                        optionStyle =
                          'border-cyan-400 bg-cyan-950/50 text-white font-medium';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          disabled={submitted}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              [q.id]: optIdx,
                            }))
                          }
                          className={`w-full text-left px-3.5 py-2.5 rounded-sm border text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${optionStyle}`}
                        >
                          <span className="font-mono text-xs font-semibold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span className="flex-1">{opt}</span>
                          {submitted && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          )}
                          {submitted && picked && optIdx !== q.correctIndex && (
                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div
                      className={`p-3 rounded-sm text-xs leading-relaxed border ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-800/70 text-emerald-200'
                          : 'bg-amber-950/40 border-amber-800/70 text-amber-100'
                      }`}
                    >
                      <strong className="mr-1">
                        {isCorrect ? 'Correct:' : 'Explanation:'}
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-700/80">
            {!submitted ? (
              <button
                type="button"
                disabled={answeredCount === 0}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-5 py-2.5 rounded-sm disabled:opacity-40"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Submit Module {moduleId} Assessment ({answeredCount}/{pack.questions.length})
                </span>
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-[#182233] hover:bg-slate-700/70 border border-slate-500 text-slate-100 text-xs font-semibold px-4 py-2 rounded-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Module {moduleId} Quiz</span>
                </button>
                {onProceedNextModule && (
                  <button
                    type="button"
                    onClick={onProceedNextModule}
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold px-4 py-2 rounded-sm"
                  >
                    <span>Continue to Module {moduleId + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Module 4 Scenario Flashcards Submode */}
      {isQuizOpen && moduleId === 4 && subMode === 'flashcards' && (
        <div className="border border-slate-600/70 rounded-sm p-5 sm:p-6 space-y-5 bg-[#182233]">
          <div className="flex items-center justify-between font-mono text-xs text-slate-300 border-b border-slate-700/80 pb-3">
            <span className="font-semibold text-cyan-300 uppercase">
              Scenario Flashcard · {activeCard.category}
            </span>
            <span className="tabular-nums">
              {flashcardIdx + 1} / {MODULE_4_FLASHCARDS.length}
            </span>
          </div>

          <h3 className="font-display text-xl font-semibold text-white leading-snug">
            {activeCard.prompt}
          </h3>

          {flashcardRevealed ? (
            <div className="p-4 bg-emerald-950/40 border border-emerald-800/70 rounded-sm space-y-1.5">
              <span className="font-mono text-[11px] uppercase font-semibold text-emerald-300 block">
                Model Compliance Answer · {activeCard.citation}
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeCard.modelAnswer}
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setFlashcardRevealed(true)}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold px-4 py-2 rounded-sm"
            >
              <Eye className="w-4 h-4" />
              <span>Reveal Statutory Answer</span>
            </button>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-slate-700/80">
            <button
              type="button"
              onClick={() => {
                setFlashcardIdx(
                  (i) =>
                    (i - 1 + MODULE_4_FLASHCARDS.length) %
                    MODULE_4_FLASHCARDS.length
                );
                setFlashcardRevealed(false);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-slate-500 bg-[#243044] text-slate-100 hover:bg-slate-700/70 rounded-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFlashcardIdx((i) => (i + 1) % MODULE_4_FLASHCARDS.length);
                setFlashcardRevealed(false);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-sm"
            >
              <span>Next Card</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
