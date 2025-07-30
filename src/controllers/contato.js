const Contato = require("../models/contato")

exports.index = (req, res) => {
  res.render("contato", {
    contato: {},
  })
}

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body)
    await contato.register()

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors)
      req.session.save(() => res.redirect("/contato/index"))
      return
    }

    req.flash("success", "Contato criado com sucesso.")
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    )
    return
  } catch (error) {
    return res.render("404")
  }
}

exports.editar = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404")

    const contato = await Contato.buscarPorId(req.params.id)
    if (!contato) return res.render("404")

    res.render("contato", { contato })
  } catch (error) {
    console.error(error)
  }
}

exports.editado = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404")

    const contato = new Contato(req.body)
    await contato.editar(req.params.id)

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors)
      req.session.save(() => {
        res.redirect(`/contato/index/${req.params.id}`)
      })
      return
    }

    req.flash("success", "Contato editado com sucesso.")
    req.session.save(() => {
      res.redirect(`/contato/index/${contato.contato._id}`)
    })
    return
  } catch (error) {
    return res.render("404")
  }
}
