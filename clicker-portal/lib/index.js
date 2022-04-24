module.exports = ({ wallets, refs, config, client }) => ({
  getSpeed: () => client.query("clicker", { get_speed: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),

  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});